import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

import "./cart.css";
const Carts = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  // Vaciar Carrito
  const buttonDelete = () => {
    clear();
  };
  // Enviar buyer e item
  const formHandler = async (e) => {
    e.preventDefault();
    const orders = {
      buyer: {
        name: name,
        phone: phone,
        mail: mail,
      },

      items: [...cart],
      total: { total },
    };
    setName("");
    setPhone("");
    setMail("");
    const db = getFirestore();
    const { id } = await addDoc(collection(db, "orders"), orders);

    console.log("ordersId", id);
  };
  // Eliminar Item
  const clickRemove = () => removeItem();
  // Sumar items
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
        </div>
      ))}
      <div>
        <div>Total: {total}</div>

        <div>
          <button onClick={buttonDelete}>Vaciar Carrito</button>
        </div>
        <h4>Completar formulario</h4>
      </div>

      <div>
        <form onSubmit={formHandler}>
          <input
            placeholder="Nombre y Apellido"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            placeholder="Teléfono"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            placeholder="Mail"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          ></input>
          <button type="submit">Finaliar Compra</button>
        </form>
      </div>
    </div>
  );
};
export default Carts;
