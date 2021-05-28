import React, { useState, useEffect } from 'react';

export default ({ header, func, requires }) => {

    // LOCAL STATE
    const [style, set_style] = useState('bad')

    // ON LOAD..
    useEffect(() => {
        validate()
    }, [])

    // WHEN ONE OF THE REQUIREMENTS CHANGE
    useEffect(() => {
        validate()
    }, [requires])

    function validate() {

        // CHECK IF EVERY REQUIREMENT PASSES VALIDATION
        const result = check();

        // IF THEY DO..
        if (result) {
            set_style('good')

        // OTHERWISE
        } else {
            set_style('bad')
        }
    }

    // CHECK IF ALL VALUES ARE TRUE
    function check() {
        for (let value of requires) {
            if (value !== true) {
                return false;
            }
        }

        return true;
    }

    // EXECUTE PROVIDED FUNCTION -- IF REQUIREMENTS HAVE PASSED VALIDATION
    function execute() {
        if (style === 'good') {
            func();
        }
    }

    return (
        <div id={ 'button' } className={ style } onClick={ execute }>
            <div id={ 'inner' }>{ header }</div>
        </div>
    )
}