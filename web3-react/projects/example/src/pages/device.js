import React, { useContext, useReducer, useEffect, Fragment } from 'react';
import { Context } from '../assets/context';
import reducer from '../states/local';
import Info from '../components/info';
import Trigger from '../components/trigger';

import { read, write } from '../funcs/blockchain';

export default ({ match }) => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, {
        details: {
            contract: 'foo',
            owner: 'foo',
            identifier: 'bar',
            name: 'biz',
            created: 'eyy',
            active: 'lmao'
        },
        valid: false
    })

    // ON LOAD..
    useEffect(() => {
        const run = async() => {

            // SET PAGE HEADER
            dispatch({
                type: 'set-page',
                payload: 'device'
            })

            // CHECK IF THE IDENTIFIER IS REGISTERED
            const device_address = await read({
                contract: 'device_manager',
                func: 'fetch_device',
                args: [match.params.identifier]
            }, state)

            // IF A VALID ADDRESS WAS RETURNED
            if (device_address !== '0x0000000000000000000000000000000000000000') {

                // FETCH & SET DEVICE DETAILS IN STATE
                fetch(device_address)
            }
        }

        // RUN ASYNCHRONOUSLY
        run()
    }, [])

    // FETCH & SET DEVICE DETAILS IN STATE
    async function fetch(device_address) {

        // FETCH CONTRACT DETAILS
        const details = await read({
            contract: 'device',
            address: device_address,
            func: 'details'
        }, state)

        // DESTRUCTURE VALUES FROM DETAILS
        const [owner, identifier, name, created, active] = Object.values(details);

        // FETCH DATA & SET IN STATE
        set_local({
            type: 'all',
            payload: {
                details: {
                    contract: device_address,
                    owner: owner,
                    identifier: identifier,
                    name: name,
                    created: created,
                    active: active ? 'True' : 'False'
                },
                valid: true
            }
        })
    }

    // TOGGLE ACTIVE STATUS
    async function toggle() {

        // EXECUTE FUNCTION
        const result = await write({
            contract: 'device',
            address: local.details.contract,
            func: 'toggle_active',
        }, state)

        // SUCCESS
        if (result.success) {
            fetch(local.details.contract)
        
        // ERROR
        } else { console.log('ERROR:', result.reason) }
    }

    return (
        <Fragment>
            <div id={ 'innerbody' }>
                <div id={ 'list' }>
                    <Info
                        data={ local.details }
                        valid={ local.valid }
                        fallback={ 'Invalid device identifier provided in URL!' }
                    />
                </div>
            </div>
            { local.valid ?
                <Trigger
                    header={ 'Toggle Active Status' }
                    func={ toggle }
                />
            : null }
        </Fragment>
    )
}