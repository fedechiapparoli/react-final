import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import "./details.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Item from "./Item";
import ItemList from "./ItemList";
const ItemDetails = ({ datos }) => {
  const { addItem } = useContext(CartContext);
  // Constante para agregar al carrito
  const clickHandler = () => {
    addItem(items);
  };
  console.log(addItem);
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
            {add && (
              <button onClick={clickHandler} className="buttonTerminar">
                Terminar Compra
              </button>
            )}

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
