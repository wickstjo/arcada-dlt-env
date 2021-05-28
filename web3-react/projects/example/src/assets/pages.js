import React, { useContext } from 'react';
import { Context } from './context';
import { Route, Switch, Redirect } from 'react-router-dom';

import Devices from '../pages/devices';
import Create from '../pages/create';
import Device from '../pages/device';
import Error from '../pages/error';

import '../interface/css/innerbody.scss';

export default () => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // IF INITIALIZATION IS DONE
    if (state.initialized) { return (
        
        <Switch>
            <Route exact path={ '/' } component={() => <Redirect to={ '/devices' } /> } />
            <Route exact path={ '/devices' } component={ Devices } />
            <Route exact path={ '/create' } component={ Create } />
            <Route exact path={ '/device/:identifier' } component={ Device } />
            <Route component={ Error } />
        </Switch>
    
    // OTHERWISE, RENDER NOTHING
    )} else { return null }
}