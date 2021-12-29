import React from 'react'
import ItemCount from './ItemCount'

const ItemDetails = ({datos}) => {
    return (
        <div> 
             <div className='detailConteiner'> 
             <div className='detail'>
                 <img className='imagenDetail' src= {datos.image} alt=''></img>
                 <h3 className='titleDetail'>{datos.name}</h3>
                 <p className='descDetail'>Descripción: {datos.description}</p>
                 <p className='priceDetail'>Precio: {datos.price} </p>
                 <ItemCount/>
                 <button className='buttonDtail'>Volver</button>
             </div>
             </div>
            
        </div>
    )
}

export default ItemDetails
