import React from 'react';
import "../styles/Contact.css";
import Title from './Title'

export default function Contact() {
    return (
        <div className='contactContainer' id='contacto'>
           <Title
            title="CONTÁCTANOS"
           />
               
      <div className="contactContainerExperto">
        <form className="contactBody">
          <label className="contactLabel">
            NOMBRE:
            <input type="text" name="name" className="contactItem" placeholder='*'/>
          </label>
          <label className="contactLabel">
            TELÉFONO:
            <input type="text" name="name" className="contactItem" placeholder='*'/>
          </label>
          <label className="contactLabel">
            MENSAJE:
            <textarea rows='3'type="text" name="name" className="contactItem"/>
          </label>
        </form>
        <div className="buttonContainer">
          <div className="obligatorio">
            <p className="asterisco">* </p>
            <p>Campo requerido </p>
          </div>
          <button className='button'>ENVIAR</button>
        </div>
      </div>
  
        </div>
    )
}

