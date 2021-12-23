import React, {useState, useEffect} from 'react'
import Item from './Item.js'
import vino1 from './imagen/vino1.png'
import vino2 from './imagen/vino4.jpg'
import vino3 from './imagen/vino5.png'


const ItemList = () => {
  const [card, setcard] = useState([])
  useEffect(() =>{
    getCard()
  }, [])
    const getCard = () => {
      const getPromise = new Promise ((res, rej) =>{
        const card = [  { id:1, img:vino3, title:'Tinto Malbec', price:'$2000', descripcion:'Vino tinto con aromas a roble y vainilla.'},
                        { id:2, img:vino3, title:'Blanco Chablis', price:'$3000', descripcion:'Vino blanco Chablis dulce, sin guarda' },
                        { id:3, img:vino3, title:'Rosado Syrha', price:'$4000', descripcion:'Vino Rosado dulce agradable al paladar' },
                        { id:4, img:vino3, title:'Tinto Malbec', price:'$5000', descripcion:'Vino Rosado dulce agradable al paladar' }
                           

                       ]
         setTimeout(() =>{
           res(card)
         }, 2000)
      })
      getPromise.then(res => setcard (res))
    }
 
   
      
        
    return (  
        <div style={{display: "flex", justifyContent:"space-around"}}>
        
          {  
            card.map((card) => {
               
        return <Item  key={card.id}  title={card.title} price={card.price} desc={card.descripcion} i={card.img} />;
      })}
         
        </div>
    ) 
}

export default ItemList
