import React from 'react'
import ItemList from './ItemList'
import '../components/item.css'
const Item = ({title}) => {
    
    return (
        <div className='cardsConteiner'>
            <div className='card'>
                <img className='imagen' src='' alt=''></img>
                
                    <h4 className='title'>{title}</h4>
                    <p>Vino fino tinto</p>
                    <p>$200</p>
                    <button className='cardsButton'>Agregar al carrito</button>
                </div>
            </div>
          
    
    )
    
} 
<ItemList/>
export default Item
