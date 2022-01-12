import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import dataBase from "./wine.json";
import SpinerLoader from "./SpinerLoader.js";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [card, setCard] = useState([]);
  const [loader, setLoader] = useState(true);

  const { idCategory } = useParams();

  const items = dataBase;
  const getCard = () => {
    setLoader(true);
    return new Promise((res) => {
      setTimeout(() => {
        if (idCategory) {
          let listaFiltrada = items.filter(
            (item) => item.category === idCategory
          );
          res(listaFiltrada);
        } else {
          res(items);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    getCard()
      .then((res) => setCard(res))
      .finally(() => setLoader(false));
  }, [idCategory, items]);

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
