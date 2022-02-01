import React from "react";
import "../components/item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div>
      <section style={{ diplay: "flex" }}>
        <div className="cardsConteiner">
          <div className="card">
            <img className="imagen" src={props.image} alt=""></img>

            <h4 className="title">{props.title}</h4>
            <Link to={`/Inicio/${props.id}`}>
              {" "}
              <button className="description">Descripción </button>
            </Link>

            <p className="priceName">Precio:{props.price} </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Item;
