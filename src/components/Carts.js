import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <section className="cartConteiner">
        {cart.map((i) => (
          <div
            key={i.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div>
              <img className="imageCart" src={i.image} alt={i.name} />
            </div>
            <div>
              <p className="datosCart">{i.name} </p>
              <p className="datosCart"> Precio:{i.price}</p>
              <p className="datosCart"> Cantidad: {i.cantidad}</p>
            </div>
            <div>
              <button
                className="buttonRemove"
                onClick={() => clickRemove(i.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </section>

      <div className="buttonDeleteConteiner">
        <Link to={"/"}>
          <button className="buttonSeguirComprando">Seguir Comprando</button>
        </Link>
        <button className="buttonDelete" onClick={buttonDelete}>
          Vaciar Carrito
        </button>
      </div>
      <div className="totalConteiner">
        <div>Total: {total}</div>
      </div>

      <section>
        <div className="formConteiner">
          <form onSubmit={formHandler} className="form">
            <input
              className="formCeld"
              placeholder=" Nombre y Apellido:"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="formCeld"
              placeholder=" Teléfono:"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <input
              className="formCeld"
              placeholder=" Mail:"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            ></input>
            <button className="formButton" type="submit">
              Finaliar Compra
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Carts;
