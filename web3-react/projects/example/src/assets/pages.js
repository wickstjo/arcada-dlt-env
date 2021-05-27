import React, { useContext } from 'react';
import { Context } from './context';
import { Route, Switch } from 'react-router-dom';

import Primary from '../pages/primary';
import Error from '../pages/error';

export default () => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // IF INITIALIZATION IS DONE
    if (state.initialized) { return (
        
        <Switch>
            <Route exact path={ '/' } component={ Primary } />
            <Route component={ Error } />
        </Switch>
    
    // OTHERWISE, RENDER NOTHING
    )} else { return null }
}