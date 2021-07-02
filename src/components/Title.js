import React from 'react';
import "../styles/Title.css";

export default function Title({title}) {
    return(
        <div className='title'>
            <h1>
                {title}
            </h1>
        </div>
    )
}

