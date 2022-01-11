import React, { useState, useEffect, useParams } from "react";
import CartWidgets from "./CartWidgets";
import { Link } from "react-router-dom";
import dataBase from "./wine.json";
import ItemListConteiner from "./ItemListConteiner";

const NavBar = () => {
  const [categ, setCateg] = useState([]);
  // const {idCategory} = useParams();

  /*const getCateg = (idCategory) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const myData = dataBase.filter((item) => item.category === idCategory);
        
        res(myData);
      }, 2000);
    });
  };
  useEffect(() => {
    getCateg(idCategory).then((res) => setCateg(res));
  }, [idCategory]);*/
  return (
    <>
      <Item categ={categ} />
      <div className="navBard">
        <div className="navSide">
          <Link to="/">
            <h3 className="logo">Pericote Bebidas</h3>
          </Link>
          <div className="links">
            <Link to="/">{"Inicio"}</Link>
            <Link to="category/Blancos"> Blancos</Link>
            <Link to="category/Tintos">Tintos</Link>

            <Link to="/contacto">Contactos</Link>
            <Link to="/Nosotros">Nosotros</Link>
            <Link to="/Carrito"></Link>
          </div>
          <CartWidgets />
        </div>
      </div>
    </>
  );
};
export default NavBar;
