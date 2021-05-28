import React, { useContext, useReducer, useEffect } from 'react';
import { Context } from '../assets/context';
import Text from '../components/input/text';
import Button from '../components/input/button';
import reducer from '../states/input';
import '../interface/css/input.scss';

import { write } from '../funcs/blockchain';

export default () => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [ input, set_input ] = useReducer(reducer, {
        identifier: {
            value: '',
            status: false
        },
        name: {
            value: '',
            status: false
        }
    })

    // ON LOAD..
    useEffect(() => {
        dispatch({
            type: 'set-page',
            payload: 'create'
        })
    }, [])

    // CREATE A NEW DEVICE
    async function create(identifier, name) {
        
        // INSTANTIATE A NEW DEVICE CONTRACT
        const result = await write({
            contract: 'device_manager',
            func: 'create_device',
            args: [identifier, name],
        }, state)

        // SUCCESS
        if (result.success) {
            
            // REDIRECT TO DEVICE PAGE
            dispatch({
                type: 'redirect',
                payload: '/device/' + identifier
            })
        
        // ERROR
        } else { console.log('ERROR:', result.reason) }
    }

    return (
        <div id={ 'innerbody' }>
            <div id={ 'input' }>
                <div id={ 'container' }>
                    <div id={ 'left' }>
                        <Text
                            data={ input.identifier }
                            placeholder={ 'Device Identifier (5-64 characters)' }
                            range={[ 5, 64 ]}
                            update={ set_input }
                            id={ 'identifier' }
                        />
                        <Text
                            data={ input.name }
                            placeholder={ 'Device Name (1-20 characters)' }
                            range={[ 1, 20 ]}
                            update={ set_input }
                            id={ 'name' }
                        />
                    </div>
                    <div id={ 'right' }>
                        <Button
                            header={ 'CREATE' }
                            func={() => { create(input.identifier.value, input.name.value) }}
                            requires={[
                                input.identifier.status,
                                input.name.status
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}