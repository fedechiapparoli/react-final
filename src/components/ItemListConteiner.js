import React from 'react'

const ItemListConteiner = (props) => {
    return (
        <div>
            
            <div style={{textAlign:'center', margin:'25px'}}>
                <h2 style={{margin:'4px'}}>Cerveza {props.name}</h2>
                <h6 style={{margin:'4px'}}>Descripción: {props.description}</h6>
                <p style={{margin:'4px', color:'green'}}>Precio: {props.price}</p>
                
            </div>
        </div>
        
    )
}

export default ItemListConteiner
