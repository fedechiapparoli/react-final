import React from 'react'
import './imagen/carrito1.png'
const navBar = () => {
    return (
        <div className='navBard'>

        <div className='navSide'>
            <h3 className='logo'>Pericote Bebidas</h3>
        <div className='links'>
            <a href='/home'>Inicio</a>
            <a href='/Us'>Nosotros</a>
            <a href='/contact'>Contactos</a>
            <div>
                <img  className='carritoCompras' src='./imagen/carrito1.png' alt=""/>
            </div>
            
        </div>
        
        <div className='rigthSide'>
            
        </div>
            
        </div>    
       </div>
    )

}
export default navBar



