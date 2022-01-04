import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import database from "./wine.json";
const ItemList = () => {
  const [card, setcard] = useState([]);
  useEffect(() => {
    getCard();
  }, []);
  const getCard = () => {
    const getPromise = new Promise((res, rej) => {
      const card = database;
      setTimeout(() => {
        res(card);
      }, 2000);
    });
    getPromise.then((res) => setcard(res));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {card.map((card) => {
        return (
          <Item
            key={card.id}
            id={card.id}
            title={card.name}
            price={card.price}
            desc={card.descripcion}
            image={card.image}
            stock={card.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
