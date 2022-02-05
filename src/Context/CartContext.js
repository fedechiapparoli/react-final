import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Agregar al carrito
  const addItem = (item) => {
    let newCart = [...cart];
    if (isInCart(item)) {
      newCart.find((obj) => obj.id === item.id);
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    //borro el item deseado filtrando en la lista los items de distinto id
    const newCart = cart.filter((i) => i.id !== id);
    setCart(newCart);
  };

  // No repetición del Item

  function isInCart(itemRecibido) {
    return cart.some((item) => item.id === itemRecibido.id) ? true : false;
  }
  // Limpiar el carrito
  const clear = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, clear, isInCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
