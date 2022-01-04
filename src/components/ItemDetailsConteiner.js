import React, { useState, useEffect } from "react";
import database from "./wine.json";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";

const ItemDetailsConteiner = () => {
  const [datos, setdatos] = useState([]);
  const { id } = useParams();
  const getDatos = (prodId) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const itemSearch = database.find((item) => item.id === prodId);
        res(itemSearch);
      }, 2000);
    });
  };

  useEffect(() => {
    getDatos(id).then((res) => setdatos(res));
  }, [id]);
  return (
    <div>
      <ItemDetails key={datos.id} datos={datos} />
    </div>
  );
};

export default ItemDetailsConteiner;
