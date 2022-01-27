import React from "react";
import "../components/count.css";

const ItemCount = ({ onAdd, stock, counter, setCounter }) => {
  /* const { isInCart } = useContext(CartContext);
  const norepeat = ()=>{
    isInCart()
  }*/
  const addCount = () => {
    if (counter < stock) setCounter(counter + 1);
  };
  const sustCount = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <div className="conteiner">
      <div className="conteinerCount">
        <button className="botonCount" onClick={sustCount}>
          -
        </button>
        <h6 className="contador">{counter}</h6>
        <button className="botonCount" onClick={addCount}>
          +
        </button>
      </div>
      <button onClick={onAdd} className="addCarrito">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
