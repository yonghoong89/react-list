import React, { Component } from 'react';

const Keyword =({Category}) =>{
    return(
        <li className="item">
            <a className="link">{Category}</a>
        </li>
    )
}

export default Keyword;
