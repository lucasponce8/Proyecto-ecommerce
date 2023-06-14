import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions";
import CounterDetail from "../../components/CounterDetail/CounterDetail";
import useCart from "../../hooks/useCart";
import LazyLoad from "react-lazy-load";

import styles from "./DetailProduct.module.css";
import ButtonEditProduct from "../../components/ButtonEditProduct/ButtonEditProduct";

export const DetailProduct = () => {
  const dispatch = useDispatch();
  const detailProd = useSelector((state) => state.product);
  const isLoading = useSelector((state) => state.isLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    dispatch(getProductDetail(id)).finally(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
  }, [dispatch, id]);

  const { cart, addToCart, deleteProductCart } = useCart();

  // console.log(`!!el stock de ${detailProd.name}: ${detailProd.stock}`)

  return (
    <>
      <div className={styles.description}>
        {isLoading ? (
          <p>CARGANDO....</p>
        ) : detailProd._id ? (
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionContainer_image}>
              <LazyLoad offset={100}>
                <img
                  src={detailProd.image}
                  alt={`Imagen de ${detailProd.name}`}
                />
              </LazyLoad>
            </div>
            <div className={styles.descriptionContainer_info}>
              <div className={styles.descriptionContainer_info_cnt}>
                <div className={styles.descriptionContainer_info__name}>
                  <h1>{detailProd.name}</h1>
                </div>
                <div className={styles.descriptionContainer_info__detail}>
                  <div className={styles.descriptionContainer_info__desc}>
                    <p>{detailProd.description}</p>
                  </div>
                  <div className={styles.descriptionContainer_info__price}>
                    <h2>${detailProd.price}</h2>
                  </div>
                  <div className={styles.descriptionContainer_info__counter}>
                    <CounterDetail
                      product={detailProd}
                      addToCart={addToCart}
                      cart={cart}
                      stock={detailProd.stock}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No hay producto para mostrar</p>
        )}

        <div>
          <button onClick={() => window.history.back()}>Volver</button>
        </div>
      </div>
    </>
  );
};
