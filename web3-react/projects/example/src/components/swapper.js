import React from 'react';

// CONTENT SWAPPER
export default ({ data }) => {
    switch(data.length) {

        // IF THERE ARE NO ITEMS
        case 0: { return (
            <div id={ 'row' }>No children found.</div>    
        )}

        // BASELINE
        default: { return (
            data.map((value, index) =>
                <div id={ 'row' } key={ index }>{ value }</div>
            )
        )}
    }
}