import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import { getProductsById } from "../../redux/actions";

import styles from './DetailProduct.module.css';

export const DetailProduct = () => {

  const dispatch = useDispatch();
  const detailProd = useSelector(state => state.product);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getProductsById(id))
  }, [dispatch, id]);

  console.log(detailProd)

  return (
    <div className={styles.description}>
      <div className={styles.descriptionContainer}>
        
        <div className={styles.descriptionContainer_image}>
          <img src={detailProd.image} alt={`Imagen de ${detailProd.name}`} />
        </div>
        
        <div className={styles.descriptionContainer_info}>
          <div className={styles.descriptionContainer_info_cnt}>
            <div 
              className={styles.descriptionContainer_info__name}
            >
              <h1>{detailProd.name}</h1>
            </div>
          
            <div 
              className={styles.descriptionContainer_info__price}
            >
              <h3>Precio: ${detailProd.price}</h3>
            </div>
            
            <div 
              className={styles.descriptionContainer_info__desc}
            >
              <p>{detailProd.description}</p>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
  )
}
