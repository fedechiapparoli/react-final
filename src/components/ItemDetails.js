import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import "./details.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetails = ({ datos }) => {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  const { id, price, name, image } = datos;

  // Constante para agregar al carrito
  const clickHandler = () => {
    addItem({ id, price: price, image, name, cantidad: counter });
  };

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
                <ItemCount
                  onAdd={onAdd}
                  stock={datos.stock}
                  counter={counter}
                  setCounter={setCounter}
                />
              </>
            )}

            {add && (
              <Link to={"/category/:idCategory/Carts"}>
                {
                  <button onClick={clickHandler} className="buttonTerminar">
                    Ir al Carrito
                  </button>
                }
              </Link>
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
