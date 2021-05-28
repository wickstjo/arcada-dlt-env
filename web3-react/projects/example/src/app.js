import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./assets/context";

import Init from './assets/init';
import Redirect from './components/redirect';
import Menu from './components/menu';
import Pages from './assets/pages';

import './interface/css/general.scss';

export default () => { return (
    <BrowserRouter>
        <Provider>
            <Init />
            <Redirect />
            <div id={ 'wrapper' }>
                <div id={ 'limiter' }>
                    <Menu />
                    <Pages />
                </div>
            </div>
        </Provider>
    </BrowserRouter>
)}