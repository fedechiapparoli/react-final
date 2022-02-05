import React, { useContext } from "react";
import "./styles/carrito.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
const CartWidgets = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/category/:idCategory/Carts">
        <img
          className="carrito"
          src="https://firebasestorage.googleapis.com/v0/b/pericote-bebidas.appspot.com/o/carrito1.png?alt=media&token=be54a8c2-8729-4764-9d86-b8c028ff8970"
          alt=""
        />
      </Link>
      <p className="carritoCounter">{cart.length}</p>
    </div>
  );
};

export default CartWidgets;
