import React, { useContext } from "react";
import carrito from "./imagen/carrito1.png";
import "./styles/Cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
const CartWidgets = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/Carrito">
        <img className="carrito" src={carrito} alt="" />
      </Link>
      <p>({cart.length})</p>
    </div>
  );
};

export default CartWidgets;
