import React from 'react'
import carrito from './imagen/carrito1.png'
import './styles/Cart.css'
import {Link}  from "react-router-dom";
const CartWidgets = () => {
    return (
        <div>
       
       <Link to="/Carrito">
            <img className='carrito' src={carrito} alt=""/>
           </Link>
        </div>
    )
}

export default CartWidgets
