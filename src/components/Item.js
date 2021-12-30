import React from 'react'
import '../components/item.css'
import { Link, useParams } from "react-router-dom";

const Item = (props) => {
 useParams()
console.log(useParams())
    return (
        <div >
           <section style={{diplay: 'flex'}}> 
        <div className='cardsConteiner'>
            <div className='card'>
                <img className='imagen' src={props.i} alt=''></img>
                
                    <h4 className='title'>{props.title}</h4>
                    <Link to={ `/Inicio/${props.id}`} > <button className='description'>Descripción </button></Link>
                   
                    
                    <p>Precio:{props.price}</p>
                    <button className='cardsButton'>Agregar al carrito</button>
                </div>
            </div>
            </section>
          </div>
    
    )
    
} 

export default Item
