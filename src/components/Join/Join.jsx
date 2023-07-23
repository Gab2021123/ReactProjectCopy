import React from "react"
import './Join.css'
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
function Join(){
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4eetdsh', 'template_49c7kka', form.current, '_ifAwjxKDvMq5s5aH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="join">
            <div className="left-j">
               <hr />
                <span className="des-join stroke-text">
                    <span className="stroke-text"> ¿listo para </span>
                     llevar tu cuerpo
                </span>
                <span className="des-join stroke-text">
                    a otro nivel 
                    <span className="stroke-text"> con nostros?</span>
                </span>
            </div>
            <div className="rigth-j">
                    <form ref={form} className="emailContainer" onSubmit={sendEmail}>
                        <input type="email" className="inputEmail"  name="user_email" placeholder="Ingresa tu email" />
                        <button className="btn btn-j">Entrar Ahora</button>
                    </form>
                   
                
            </div>

        </div>
    )
}
export default Join