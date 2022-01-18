import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Carts = ({ datos }) => {
  const { cart, removeItem } = useContext(CartContext);
  const clickRemove = (id) => {
    removeItem(id);
  };
  return (
    <div>
      {cart.map((i) => (
        <div key={i.id}>
          <p>Nombre:{i.price}</p>
          <p>Precio:{i.price}</p>
          <p>Cantidad:</p>
          <button onClick={clickRemove}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};
export default Carts;
