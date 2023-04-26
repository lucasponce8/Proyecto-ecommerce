import React from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'

const Card = ({
  description,
  price,
  image,
  name,
  category,
  subcategory,
  id
}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.card_container}>
        <h1>{name}</h1>
        <img src={image} alt={`Foto de ${name}`} />
        <h3>{description}</h3>
        <h4>{price}</h4>
      </div>
    </Link>
  )
}

export default Card
