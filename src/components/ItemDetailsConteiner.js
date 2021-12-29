import React, {useState, useEffect} from 'react'
import database from './wine.json'
import ItemDetails from './ItemDetails'

const ItemDetailsConteiner = () => {
  
    const [datos, setdatos] = useState([])
    
    const getDatos = (prodId) => {
        return new Promise ((res, rej) =>{
        
            
        
        setTimeout(() => {
            const itemSearch = database.find(item => item.id === prodId);
            res(itemSearch)
        }, 2000)
        })
       
       
    } 
    useEffect(() =>{
        getDatos("1").then(res => setdatos(res));
      }, [])
    return (
        <div>
              <ItemDetails   key={datos.id} datos={datos} /> 
        </div>
    )
}

export default ItemDetailsConteiner
