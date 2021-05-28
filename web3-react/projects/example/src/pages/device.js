import React, { useContext, useReducer, useEffect } from 'react';
import { Context } from '../assets/context';
import reducer from '../states/local';
import Info from '../components/info';
import '../interface/css/innerbody.scss';

import { read } from '../funcs/blockchain';

export default ({ match }) => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, {
        details: {
            address: match.params.address,
            name: 'bar',
            created: 'biz'
        },
        valid: false
    })

    // ON LOAD..
    useEffect(() => {
        dispatch({
            type: 'set-page',
            payload: 'device'
        })
    }, [])

    return (
        <div id={ 'innerbody' }>
            <div id={ 'list' }>
                <Info
                    data={ local.details }
                    valid={ local.valid }
                    fallback={ 'Invalid device contract address in URL!' }
                />
            </div>
        </div>
    )
}