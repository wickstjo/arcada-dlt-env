import React from 'react';
import '../interface/css/footer.scss';

export default ({ header, func }) => { return (
    <div id={ 'footer' } onClick={ func }>
        <span>{ header }</span>
    </div>
)}