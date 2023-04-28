import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductsByCategory,
  getFilterCategories,
  getProducts,
  orderByPrice,
} from "../../redux/actions";
import { AllCards } from "../../components/AllCards/AllCards";
import NavFilter from "../../components/NavFilter/NavFilter";

import styles from "./Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products); // "products" esta declarado en el initalState del reducer

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.productsContainer}>
      <NavFilter className={styles.productsContainer_filters} />

      <div className={styles.productsContainer_cards}>
        <AllCards allProducts={allProducts} />
      </div>
    </div>
  );
};

export default Products;
