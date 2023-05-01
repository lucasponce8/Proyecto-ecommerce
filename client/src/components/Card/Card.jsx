import React from "react";
import { Link } from "react-router-dom";
import { formToJSON } from "axios";
import styles from "./Card.module.css";

const Card = ({
  description,
  price,
  image,
  name,
  category,
  subcategory,
  id,
  stock,
}) => {
  function formatNumber(price) {
    let str = price.toString();
    if (/\d+\.\d{2}$/.test(str)) {
      // Si ya tiene dos decimales, devolverla tal cual
      return str;
    } else {
      // Eliminar caracteres no deseados y formatear
      let numOnly = str.replace(/[^\d.]/g, "");
      let numFloat = parseFloat(numOnly).toFixed(2);
      // Agregar puntos de mil y devolver
      return numFloat.replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  }

  return (
    <div className={styles.card_container}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.cardImg_container}>
          <img className={styles.cardImg} src={image} alt={`Foto de ${name}`} />
        </div>
        <div className={styles.details_container}>
          <div className={styles.name}>{name}</div>
          <p className={styles.price}>${formatNumber(price)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
