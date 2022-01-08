import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import dataBase from "./wine.json";
import SpinerLoader from "./SpinerLoader.js";
import { useParams } from "react-router-dom";
const ItemList = () => {
  const [card, setCard] = useState([]);
  const [loader, setLoader] = useState(true);
  const catId = useParams();
  console.log(catId);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });
  useEffect(() => {
    getCard();
  }, []);
  const getCard = () => {
    const getPromise = new Promise((res, rej) => {
      const card = dataBase;
      setTimeout(() => {
        res(card);
        console.log(card);
      }, 2000);
    });
    getPromise.then((res) => setCard(res));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {loader === true ? (
        <SpinerLoader />
      ) : (
        card.map((card) => {
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
        })
      )}
    </div>
  );
};

export default ItemList;
