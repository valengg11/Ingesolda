import React from 'react';
import "../styles/About.css";
import Title from './Title'

export default function About() {
    return (
        <div className='aboutContainer' id='acerca'>
           <Title
            title="¿QUIÉNES SOMOS?"
           />
           <div className='textContainer'>
               <img/>
                <p>
               Lorem ipsum dolor sit amet, consectetur.
               </p>
           </div>
        </div>
    )
}