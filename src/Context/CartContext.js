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
      setCart([...newCart, item]);
    } else {
      setCart([...cart, item]);
    }
  };
  const removeItem = (itemRecibido) => {
    //borro el item deseado filtrando en la lista los items de distinto id
    const newCart = cart.filter((item) => item.id !== itemRecibido.id);
    setCart(newCart);
  };
  // Remover del carrito
  /* const removeItem = (id) => {
    const arrayAux = cart.filter((d) => d.id === !id);
    setCart(arrayAux);
  };*/
  // No repeticion del Item
  // const isInCart = (id) => {
  // return cart.some((d) => d === id);
  // };
  const isInCart = (itemRecibido) => {
    return cart.some((item) => item.id === itemRecibido.id) ? true : false;
  };
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
