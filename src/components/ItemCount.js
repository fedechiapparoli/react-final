
import React,{ useState } from 'react'
import '../components/count.css'
const ItemCount = () => { 
    const [counter, setCounter] = useState(1)
    const addCount = () => {
        if(counter<5) (
        setCounter(counter + 1))
    };
    const sustCount = () => {
        if(counter>0) (setCounter(counter - 1))
    }
    
    return (
        <div className='conteiner'>
          <div className='conteinerCount'>  
            <button className='botonCount' onClick={sustCount}>-</button>
            <h6 className='contador'>{counter}</h6>
            <button className='botonCount' onClick={addCount }>+</button>
          </div> 
          <button className='addCarrito'>Agregar al Carrito</button>
            
        </div>
    )
}

export default ItemCount
