import React from 'react';

export default ({ data, valid, fallback }) => {
    switch(valid) {

        // INVALID ADDRESS, RENDER FALLBACK
        case false: { return (
            <div id={ 'error' }>{ fallback }</div>
        )}

        // RENDER NORMALLY
        default: {
            return Object.keys(data).map((key, index) =>
                <div id={ 'row' } key={ index }>
                    <div>{ key.charAt(0).toUpperCase() + key.slice(1) }:</div>
                    <div>{ data[key] }</div>
                </div>
            )
        }
    }
}