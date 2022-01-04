import React from "react";
import ItemCount from "./ItemCount";
import "./details.css";
import { Link } from "react-router-dom";
const ItemDetails = ({ datos }) => {
  return (
    <div>
      <section style={{ diplay: "flex", justifyContent: "center" }}>
        <div className="detailConteiner">
          <div className="detail">
            <img className="imagenDetail" src={datos.image} alt=""></img>
            <h3 className="titleDetail">{datos.name}</h3>
            <p className="descDetail">{datos.description}</p>
            <p className="priceDetail">
              Precio: {datos.price} Stock: {datos.stock}{" "}
            </p>
            <ItemCount />
            <Link to={"/"}>
              <button className="buttonDetail">Volver</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetails;
