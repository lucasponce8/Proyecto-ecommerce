import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import { getProductsById } from "../../redux/actions";

import styles from './DetailProduct.module.css';
import CounterDetail from "../../components/CounterDetail/CounterDetail";

import useCart from '../../hooks/useCart';


export const DetailProduct = () => {

  const dispatch = useDispatch();
  const detailProd = useSelector(state => state.product);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getProductsById(id))
  }, [dispatch, id]);

  const { cart, addToCart } = useCart()

  // console.log(detailProd)
  // console.log(cart)


  return (
    <>
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
                className={styles.descriptionContainer_info__detail}
              >

                <div
                  className={styles.descriptionContainer_info__desc}
                >
                  <p>{detailProd.description}</p>
                </div>

                <div
                  className={styles.descriptionContainer_info__price}
                >
                  <h2>${detailProd.price}</h2>
                </div>

                <div
                  className={styles.descriptionContainer_info__counter}
                >
                  <CounterDetail product={detailProd} addToCart={addToCart} cart={cart} />
                </div>

              </div>
            </div>
          </div>

        </div>


        {/* provisorio */}
        <Link to='/products'>
          Volver
        </Link>
      </div>
    </>
  )
}
