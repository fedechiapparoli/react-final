import React, { useState, useEffect } from "react";
import dataBase from "./wine.json";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import SpinerLoader from "./SpinerLoader";

const ItemDetailsConteiner = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });
  const [datos, setDatos] = useState([]);
  const { id } = useParams();
  const getDatos = (prodId) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const itemSearch = dataBase.find((item) => item.id === prodId);
        res(itemSearch);
      }, 2000);
    });
  };

  useEffect(() => {
    getDatos(id).then((res) => setDatos(res));
  }, [id]);
  return (
    <div>
      {loader === true ? (
        <SpinerLoader />
      ) : (
        <ItemDetails key={datos.id} datos={datos} />
      )}
    </div>
  );
};

export default ItemDetailsConteiner;
