import { useContext, useEffect } from 'react';
import { Context } from './context';
import { init } from '../funcs/blockchain';

export default () => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOAD ONCE
    useEffect(() => {

        // INITIALIZE ETHEREUM APIs & DATA
        init().then(data => {

            // SAVE CONNECTION DATA IN STATE
            dispatch({
                type: 'init',
                payload: data
            })
        })
    }, [])

    return null;
}