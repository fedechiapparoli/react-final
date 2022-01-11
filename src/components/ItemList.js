import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import dataBase from "./wine.json";
import SpinerLoader from "./SpinerLoader.js";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [card, setCard] = useState([]);
  const [loader, setLoader] = useState(true);
  const [categ, setCateg] = useState([]);
  const { idCategory } = useParams();
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });
  useEffect(() => {
    getCard();
  }, []);
  const getCard = () => {
    const getPromise = new Promise((res) => {
      const card = dataBase;
      setTimeout(() => {
        res(card);
      }, 2000);
    });
    getPromise.then((res) => setCard(res));
  };

  const getCateg = (idCategory) => {
    return new Promise((res) => {
      setTimeout(() => {
        const myData = idCategory
          ? dataBase.filter((item) => item.category === idCategory)
          : dataBase;
        res(myData);
      }, 2000);
    });
  };
  useEffect(() => {
    getCateg(idCategory).then((res) => setCateg(res));
  }, [idCategory]);
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
            <>
              <Item
                categ={categ}
                key={card.id}
                id={card.id}
                title={card.name}
                price={card.price}
                desc={card.descripcion}
                image={card.image}
                stock={card.stock}
              />
            </>
          );
        })
      )}
    </div>
  );
};

export default ItemList;
