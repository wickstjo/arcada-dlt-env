import React, { useContext } from 'react';
import { Context } from '../assets/context';
import { Link } from 'react-router-dom';
import '../interface/css/menu.scss';

export default () => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    return (
        <div id={ 'menu' }>
            <Item
                header={ 'Your Device Collection' }
                link={ '/devices' }
                name={ 'devices' }
                current={ state.page }
            />
            <Item
                header={ 'Create new Device' }
                link={ '/create' }
                name={ 'create' }
                current={ state.page }
            />
            <Item
                header={ 'View Device' }
                link={ '/device/bad-identifier' }
                name={ 'device' }
                current={ state.page }
            />
        </div>
    )
}

// MENU ITEM
function Item({ header, link, name, current }) {

    // NON-LINK
    if (name === current) { return (
        <li className={ 'current' }>{ header }</li>

    // LINK
    )} else { return (
        <Link to={ link }><li>{ header }</li></Link>
    )}
}