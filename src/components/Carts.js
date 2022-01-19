import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

const Carts = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
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
    <div>
      {cart.map((i) => (
        <div key={i.id}>
          <img src={i.image} alt={i.name} />
          <p> Nombre:{i.name} </p>
          <p> Precio:{i.price}</p>
          <p> Cantidad: {i.cantidad}</p>
          <button onClick={() => clickRemove(i.id)}>Eliminar</button>
          <p> Total: {total}</p>
        </div>
      ))}
    </div>
  );
};
export default Carts;
