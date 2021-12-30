import React from 'react'
import ItemCount from './ItemCount'
import './details.css'
const ItemDetails = ({datos}) => {
    return (
        <div  style={{diplay: 'flex'}}> 
             <div className='detailConteiner'> 
             <div className='detail'>
                 <img className='imagenDetail' src= {datos.image} alt=''></img>
                 <h3 className='titleDetail'>{datos.name}</h3>
                 <p className='descDetail'>{datos.description}</p>
                 <p className='priceDetail'>Precio: {datos.price} </p>
                 <ItemCount/>
                 <button className='buttonDetail'>Volver</button>
             </div>
             </div>
            
        </div>
    )
}

export default ItemDetails
