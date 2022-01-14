import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Agregar al carrito
  const addItem = (items) => {
    setCart([...cart, items]);
  };
  // Remover del carrito
  const removeItem = (id) => {
    setCart((precart) => {
      return precart.filter((items) => items.id === !id);
    });
  };
  // Limpiar el carrito
  const clear = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={(addItem, removeItem, cart, clear)}>
      {children}
    </CartContext.Provider>
  );
};
