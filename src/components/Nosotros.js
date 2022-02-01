import React from "react";
import "../nosotros.css";
const Nosotros = () => {
  return (
    <div className="nosConteiner">
      <img
        className="nosImage"
        src="https://firebasestorage.googleapis.com/v0/b/pericote-bebidas.appspot.com/o/foto%20vi%C3%B1edo4.jpg?alt=media&token=af2a3007-ba94-432a-a832-12709149fea1"
        alt=""
      ></img>
      <h1 className="pericoteTitle">Pericote</h1>
      <p className="nosParrafo">
        Pericote, nace como un proyecto Familiar con el propósito de vender
        vinos de Alta Gama. Ubicada en Vistalba, al pie de la Cordillera de los
        Andes, rodeada de viñedos propios de más de 105 años de antiguedad. Esta
        bodega posee tecnología de última generación, tiene una capacidad de
        500.000 litros en acero inoxidable y 50.000 litros en roble francés,
        además un capital humano altamente capacitado, que permite en cada uno
        de los procesos obtener los mejores resultados. Viamonte posee vinos
        equilibrados y elegantes, de gran personalidad.
      </p>
    </div>
  );
};

export default Nosotros;
