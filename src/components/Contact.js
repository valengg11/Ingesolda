import React from 'react';
import "../styles/Contact.css";

export default function Contact() {
    return (
        <div className='contactContainer' id='contacto'>
          <h3>¿QUIERES QUE TE LLAMEMOS?</h3>
           <h2 className='contactTitle'>
           ¡Déjanos tus datos!
           </h2>
      <div className="contactContainerExperto">
        <form className="contactBody">
          <label className="contactLabel">
            NOMBRE:
            <input type="text" name="name" className="contactItem" />
            *
          </label>
          <label className="contactLabel">
            TELÉFONO:
            <input type="text" name="name" className="contactItem"/>
            *
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

