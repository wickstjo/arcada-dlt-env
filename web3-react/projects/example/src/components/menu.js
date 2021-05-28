import React, { useContext } from 'react';
import { Context } from '../assets/context';
import { Link } from 'react-router-dom';
import '../interface/css/menu.scss';

export default () => {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    return (
        <div id={ 'menu' }>
            <Item
                header={ 'List of Devices' }
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
                link={ '/device/0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e' }
                name={ 'device' }
                current={ state.page }
            />
        </div>
    )
}

function Item({ header, link, name, current }) { return (
    <Link to={ link }>
        <li className={ name === current ? 'current' : null }>{ header }</li>
    </Link>
)}