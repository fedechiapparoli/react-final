import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  // Agregar al carrito
  const addItem = (datos) => {
    setCart([...cart, datos]);
  };

  // Remover del carrito
  const removeItem = (id) => {
    const arrayAux = cart.filter((d) => d.id === !id);
    setCart(arrayAux);
  };
  // No repeticion del Item
  const isInCart = (id) => {
    return cart.some((d) => d === id);
  };
  // Limpiar el carrito
  const clear = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clear, isInCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
