import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./assets/context";

import Init from './assets/init';
import Pages from './assets/pages';

import './interface/css/general.scss';

export default () => { return (
    <BrowserRouter>
        <Provider>
            <Init />
            <div id={ 'wrapper' }>
                <Pages />
            </div>
        </Provider>
    </BrowserRouter>
)}