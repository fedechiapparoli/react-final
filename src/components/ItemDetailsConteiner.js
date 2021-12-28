import React, {useState, useEffect} from 'react'
import './wine.json'
import ItemDetails from './ItemDetails'
const ItemDetailsConteiner = () => {
  
    const [datos, setdatos] = useState([])
    useEffect(() =>{
       getDatos()
      }, [])
    const getDatos = () => {
        const newProm = new Promise ((res, rej) =>{
        
            
        
        setTimeout(() => {
            res(datos)
        }, 2000)
        })
       
       newProm.them ( res => setdatos(res))
    } 
    return (
        <div>
            
            {
                datos.map((des)  => {
                    return <ItemDetails  key={des.id}/> 
                })
               
                  
                }
            
            
        </div>
    )
}

export default ItemDetailsConteiner
