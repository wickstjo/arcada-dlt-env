import React, { useContext, useReducer, useEffect } from 'react';
import { Context } from '../assets/context';
import reducer from '../states/local';
import Swapper from '../components/swapper';
import '../interface/css/innerbody.scss';

import { read, write, event } from '../funcs/blockchain';

export default () => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, {
        collection: ['foo', 'bar', 'biz']
    })

    // ON LOAD..
    useEffect(() => {
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

    // INSTANTIATE A NEW CHILD
    function create() {
        console.log('foo')
    }

    return (
        <div id={ 'innerbody' }>
            <div id={ 'header' }>
                <div>List of Children</div>
                <div onClick={ create }>Instantiate Child</div>
            </div>
            <div id={ 'outer' }>
                <div id={ 'container' }>
                    <Swapper data={ local.collection } />
                </div>
            </div>
        </div>
    )
}