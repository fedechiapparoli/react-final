import React from 'react'
import CartWidgets from './CartWidgets'




const navBar = () => {
    return (
        <div className='navBard'>

        <div className='navSide'>
            <h3 className='logo'>Pericote Bebidas</h3>
        <div className='links'>
            <a href='/home'>Inicio</a>
            <a  href='/Us'>Nosotros</a>
            <a href='/contact'>Contactos</a>
            </div>
           <CartWidgets/>
           </div>
         </div>   
        
        
       
            
         
       
    )

}
export default navBar



