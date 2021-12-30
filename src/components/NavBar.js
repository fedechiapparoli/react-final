import React from 'react'
import CartWidgets from './CartWidgets'
import { Link } from "react-router-dom";



const navBar = () => {
    return (
        <div className='navBard'>

       <div className='navSide'>
            <h3 className='logo'>Pericote Bebidas</h3>
        <div className='links'>
            
            <Link  to="/">Inicio</Link> {" "}
            <Link  to="/contacto">Contactos</Link>
            <Link to="/Nosotros">Nosotros</Link>
            <Link to="/Carrito"></Link>
           
            </div>
           <CartWidgets/>
           </div>
           </div>
        
        
       
            
         
       
    )

}
export default navBar



