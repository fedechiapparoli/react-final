import React from 'react'
import carrito from './imagen/carrito1.png'
import './styles/Cart.css'
const CartWidgets = () => {
    return (
        <div>
            <img className='carrito' src={carrito} alt=""/>
        </div>
    )
}

export default CartWidgets
