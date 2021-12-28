import React from 'react'
import ItemDetailsConteiner from './ItemDetailsConteiner'

const ItemDetails = (props) => {
    return (
        <div> 
             <div className='detailConteiner'> 
             <div className='detail'>
                 <img className='imagenDetail' src='' alt=''></img>
                 <h3 className='titleDetail'></h3>
                 <p className='descDetail'>Descripción: </p>
                 <p className='priceDetail'>Precio: </p>
                 <button className='buttonDtail'>Volver</button>
             </div>
             </div>
            <ItemDetailsConteiner/>
        </div>
    )
}

export default ItemDetails
