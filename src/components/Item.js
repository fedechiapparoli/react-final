import React from 'react'
import '../components/item.css'
const Item = (props) => {
    
    return (
        <div >
           <section style={{diplay: 'flex'}}> 
        <div className='cardsConteiner'>
            <div className='card'>
                <img className='imagen' src={props.i} alt=''></img>
                
                    <h4 className='title'>{props.title}</h4>
                    <button className='description'>Descripción</button>
                    
                    <p>Precio:{props.price}</p>
                    <button className='cardsButton'>Agregar al carrito</button>
                </div>
            </div>
            </section>
          </div>
    
    )
    
} 

export default Item
