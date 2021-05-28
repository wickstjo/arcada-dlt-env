import React, { useContext, useReducer, useEffect } from 'react';
import { Context } from '../assets/context';
import reducer from '../states/local';
import List from '../components/list';

import { read } from '../funcs/blockchain';

export default () => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, {
        collection: []
    })

    // ON LOAD..
    useEffect(() => {
        const run = async() => {

            // SET PAGE HEADER
            dispatch({
                type: 'set-page',
                payload: 'devices'
            })

            // FETCH THE USER COLLECTION
            const collection = await read({
                contract: 'device_manager',
                func: 'fetch_collection',
                args: [state.keys.public]
            }, state)

            // SAVE IT IN THE LOCAL STATE
            set_local({
                type: 'specific',
                payload: {
                    name: 'collection',
                    data: collection
                }
            })
        }

        // RUN ASYNCHRONOUSLY
        run()
    }, [])

    return (
        <div id={ 'innerbody' }>
            <div id={ 'list' }>
                <List
                    data={ local.collection }
                    fallback={ 'Your device collection is empty!' }
                />
            </div>
        </div>
    )
}