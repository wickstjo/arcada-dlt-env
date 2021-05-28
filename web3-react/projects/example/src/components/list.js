import React from 'react';

export default ({ data, fallback }) => {
    switch(data.length) {

        // NO ITEMS FOUND, RENDER ERROR
        case 0: { return (
            <div id={ 'error' }>{ fallback }</div>    
        )}

        // RENDER NORMALLY
        default: { return (
            data.map((value, index) =>
                <div id={ 'row' } key={ index }>{ value }</div>
            )
        )}
    }
}