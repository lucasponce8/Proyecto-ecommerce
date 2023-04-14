import React from 'react'
import styles from "./Card.module.css"

const Card = ({
  description,
  price,
  image,
  name,
  category,
  subcategory
}) => {
  return (
    <div className={styles.card_container}>
      <h1>{name}</h1>
      <img src={image} alt={`Foto de ${name}`} />
      <h3>{description}</h3>
      <h4>{price}</h4>
    </div>
  )
}

export default Card
