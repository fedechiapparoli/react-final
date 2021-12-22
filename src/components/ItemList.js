import React from 'react'
import Item from './Item.js'
import vino1 from './imagen/vino1.png'
import vino2 from './imagen/vino2.jpg'
import vino3 from './imagen/vino3.jpg'

const card = [           { id:1, img:{vino1}, title:'tinto', price:'$2000' },
{ id:2, img:{vino2}, title:'tinto', price:'$3000' },
{ id:3, img:{vino3}, title:'tinto', price:'$4000' } ]
console.log(card)
const ItemList = () => {
    
   
      
        
    return (  
        <div>
        <h3>hola mundo</h3>
          {  
            card.map((card) => {
               
        return <Item  key={card.id}  title={card.title}/>;
      })}
            
        </div>
    ) 
}

export default ItemList
