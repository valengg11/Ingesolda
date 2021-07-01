import React from 'react';
import "../styles/Title.css";

export default function Title({title}) {
    return(
        <div className='title'>
            <h3>
                {title}
            </h3>
        </div>
    )
}

