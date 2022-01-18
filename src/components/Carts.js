import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Carts = ({ datos }) => {
  const { cart, removeItem } = useContext(CartContext);

  const clickRemove = (id) => {
    removeItem(id);
  };

  function precioTotal() {}
  return (
    <div>
      {cart.map((i) => (
        <div key={i.id}>
          <img src={i.image} alt={i.name}></img>
          <p>Nombre:{i.name}</p>
          <p>Precio:{i.price}</p>
          <p>Cantidad: {i.cantidad}</p>
          <button onClick={() => clickRemove(i.id)}>Eliminar</button>
          <p>Total: {precioTotal}</p>
        </div>
      ))}
    </div>
  );
};
export default Carts;
