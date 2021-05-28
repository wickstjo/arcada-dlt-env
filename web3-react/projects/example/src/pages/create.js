import React, { useContext, useReducer, useEffect } from 'react';
import { Context } from '../assets/context';
import reducer from '../states/local';
import '../interface/css/innerbody.scss';

import { read, write, event } from '../funcs/blockchain';

export default () => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, {
        collection: ['foo', 'bar', 'biz']
    })

    // ON LOAD..
    useEffect(() => {
        dispatch({
            type: 'set-page',
            payload: 'create'
        })
    }, [])

    return (
        <div id={ 'innerbody' }>
            <div id={ 'content' }>
                Create
            </div>
        </div>
    )
}