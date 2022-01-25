import React, { useState, useEffect } from "react";
import Item from "./Item.js";

import SpinerLoader from "./SpinerLoader.js";
import { useParams } from "react-router-dom";
import db from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
const ItemList = () => {
  const [card, setCard] = useState([]);
  const [loader, setLoader] = useState(true);

  const { idCategory } = useParams();

  /* const items = dataBase;
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
  }, [idCategory, items]);*/
  useEffect(() => {
    //setLoader(true);
    const funcAsincrona = async () => {
      const myItems = idCategory
        ? query(collection(db, "items"), where("category", "==", idCategory))
        : collection(db, "items");

      try {
        const querySnapshot = await getDocs(myItems);

        console.log(querySnapshot.docs);

        setCard(
          querySnapshot.docs.map((el) => {
            return { ...el.data(), id: el.id };
          })
        );
      } catch {
        console.log("SE ROMPIO");
      }

      setLoader(false);
    };
    funcAsincrona();
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
