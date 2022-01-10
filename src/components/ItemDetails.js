import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import "./details.css";
import { Link } from "react-router-dom";
const ItemDetails = ({ datos }) => {
  const [add, setAdd] = useState(false);
  const onAdd = () => {
    setAdd(true);
  };
  useEffect(() => {}, [add]);
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
            {!add && (
              <>
                <ItemCount onAdd={onAdd} stock={datos.stock} />
              </>
            )}
            {add && <button className="buttonTerminar">Terminar Compra</button>}
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
