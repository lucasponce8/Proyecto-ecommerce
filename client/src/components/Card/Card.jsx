import React from 'react'
import styles from "./Card.module.css"
import { formToJSON } from 'axios';

const Card = ({
  description,
  price,
  image,
  name,
  category,
  subcategory
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
      <h1>{name}</h1>
      <img src={image} alt={`Foto de ${name}`} />
      <h3>{description}</h3>
      <h4>${formatNumber(price)}</h4>
    </div>
  )
}

export default Card
