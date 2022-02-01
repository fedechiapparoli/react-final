import React from "react";
import "./contacto.css";
const Contacto = () => {
  return (
    <div>
      <div>
        <h1 className="tituloContacto">Contáctenos</h1>
      </div>
      <section>
        <form className="contactoConteiner">
          <div className="formContacto">
            <label className="labelContacto">Nombre</label>
            <input className="celdaContacto" type="text"></input>
            <label className="labelContacto">Mail</label>
            <input className="celdaContacto" type="email"></input>
            <label className="labelContacto">Teléfono</label>
            <input className="celdaContacto" type="text"></input>
            <textarea className="textContacto">Mensaje:</textarea>
            <div className="buttonContacto">
              <button className="buttonEnviar">Enviar</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacto;
