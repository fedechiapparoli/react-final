import React, { useState, useEffect } from "react";
//import dataBase from "./wine.json";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import SpinerLoader from "./SpinerLoader";
import db from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
const ItemDetailsConteiner = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {});
  const [datos, setDatos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const ref = doc(db, "items", id);

    getDoc(ref)
      .then((querySnapshot) => {
        setDatos({ ...querySnapshot.data(), id: querySnapshot.id });
      })
      .catch((e) => console.log(e));
    setLoader(false);
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
