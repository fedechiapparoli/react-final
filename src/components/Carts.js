import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

import "./cart.css";
const Carts = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const formHandler = async () => {
    const orders = {
      buyer: {
        name: "federico",
        Phone: 34111111,
        mail: "fchiapparoli@hotmail.com",
      },
      items: [
        {
          id: 1,
          title: "Vino tinto Borgoña",
          price: 500,
        },
        { id: 2, title: "Vino blanco Torrontes", price: 1000 },
      ],
      total: 1500,
    };
    const db = getFirestore();
    const { id } = await addDoc(collection(db, "orders"), orders);

    console.log("ordersId", id);
  };
  const clickRemove = (id) => {
    removeItem(id);
  };
  useEffect(() => {
    let totalCalculado = 0;
    cart.forEach((item) => {
      totalCalculado += parseInt(item.price.slice(1)) * item.cantidad;
    });
    setTotal(totalCalculado);
  }, [cart]);
  return (
    <div className="cartConteiner">
      {cart.map((i) => (
        <div key={i.id}>
          <img className="imageCart" src={i.image} alt={i.name} />
          <p> Nombre:{i.name} </p>
          <p> Precio:{i.price}</p>
          <p> Cantidad: {i.cantidad}</p>
          <button onClick={() => clickRemove(i.id)}>Eliminar</button>
          <p> Total: {total}</p>
        </div>
      ))}
      <div>
        <button className="buttonForm" onClick={formHandler}>
          Completar formulario
        </button>
      </div>
    </div>
  );
};
export default Carts;
