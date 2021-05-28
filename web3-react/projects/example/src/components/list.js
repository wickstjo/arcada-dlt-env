import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data, fallback }) => {
    switch(data.length) {

        // NO ITEMS FOUND, RENDER ERROR
        case 0: { return (
            <div id={ 'error' }>{ fallback }</div>    
        )}

        // RENDER NORMALLY
        default: { return (
            data.map((value, index) =>
                <Link to={ '/device/' + value } key={ index }>
                    <div id={ 'row' }>
                        <div>Identifier { index }:</div>
                        <div>{ value }</div>
                    </div>
                </Link>
            )
        )}
    }
}