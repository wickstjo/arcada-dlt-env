import React, { useContext, useReducer, useEffect } from 'react';
import { Context } from '../assets/context';
import reducer from '../states/local';
import List from '../components/list';
import '../interface/css/innerbody.scss';

import { read, write, event } from '../funcs/blockchain';

export default () => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, {
        collection: []
    })

    // ON LOAD..
    useEffect(() => {
        dispatch({
            type: 'set-page',
            payload: 'devices'
        })

        const run = async() => {

            const foo = await read({
                contract: 'parent',
                func: 'fetch_child',
                args: ['foo']
            }, state)

            console.log(foo)
        }

        // RUN THE ABOVE
        run()

        // // SUBSCRIBE TO EVENTS IN THE CONTRACT
        // const feed = event({
        //     contract: 'oracle',
        //     name: 'added'
        // }, state)
        
        // // WHEN EVENT DATA IS INTERCEPTED
        // feed.on('data', async() => {

        //     // REFRESH DEVICE COLLECTION
        //     set_local({
        //         type: 'partial',
        //         payload: {
        //             collection: await read({
        //                 contract: 'oracle',
        //                 func: 'fetch_collection',
        //                 args: [state.keys.public]
        //             }, state)
        //         }
        //     })
        // })

        // // UNSUBSCRIBE ON UNMOUNT
        // return () => { feed.unsubscribe(); }

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