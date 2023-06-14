import React from "react";
import { Link } from "react-router-dom";

import ButtonEditProduct from "../ButtonEditProduct/ButtonEditProduct";
import ButtonDeleteProduct from "../ButtonDeleteProduct/ButtonDeleteProduct";

import styles from "./ListProductsItem.module.css";

const ListProductsItem = ({
  id,
  description,
  price,
  image,
  name,
  category,
  subcategory,
  stock,
}) => {
  return (
    <div className={styles.itemDetail}>
      <div className={styles.itemDetail_info}>
        <div className={styles.itemDetail_info_imageContainer}>
          <img 
            src={image} 
            alt={`Imagen de ${name}`} 
            className={styles.itemDetail_info_imageContainer__image}
          />
        </div>
        <div className={styles.itemDetail_info_descriptionContainer}>
          <h4>{name}</h4>
        </div>
        <div className={styles.itemDetail_info_btnsContainer}>
          <ButtonEditProduct 
            id={id}
            description={description}
            price={price}
            image={image}
            name={name}
            category={category}
            subcategory={subcategory}
            stock={stock}
          />
          <ButtonDeleteProduct 
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default ListProductsItem;
