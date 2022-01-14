import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (Item) => {
    setCart([...cart, Item]);
  };

  const removeItem = (id) => {};
  const clear = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={(addItem, removeItem, cart, clear)}>
      {children}
    </CartContext.Provider>
  );
};
