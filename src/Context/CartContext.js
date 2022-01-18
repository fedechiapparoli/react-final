import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  // Agregar al carrito
  const addItem = ({ datos }) => {
    setCart([...cart, datos]);
  };

  // Remover del carrito
  const removeItem = (id) => {
    setCart((precart) => {
      return precart.filter((datos) => datos.id === !id);
    });
  };
  // Limpiar el carrito
  const clear = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>
      {props.children}
    </CartContext.Provider>
  );
};
