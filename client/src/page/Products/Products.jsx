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
import Paginate from "../../components/Paginate/Paginate";



import styles from "./Products.module.css";
import { useAsyncError } from "react-router-dom";
import Card from "../../components/Card/Card";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products); // "products" esta declarado en el initalState del reducer
  const [currentPage, setCurrentPage] = useState(1); //declaro un estado local, le paso la pagina actual y cual va a ser la pag actual
  const [productsPerPage, setProductsPerPage] = useState(6);//cantidad de productos por pagina
  const indexOfLastProduct = currentPage * productsPerPage //sobre la pag actual, multiplico por la cantidad de productos por pagina
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage //esto me dara el indice del primer producto

  const currentProducts = allProducts
  .filter((producto) => producto.stock > 0) // Solo muestra los productos con stock mayor a 0
  .slice(indexOfFirstProduct, indexOfLastProduct); //esto guardara los productos que hay que renderizar de acuerdo a la pagina


  const paginate = (pageNumber) => { //esto seteara la pagina de acuerdo al numero que yo vaya apretando
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0);
  }
  
  

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  


  
  return (
    <>
    <div className={styles.productsContainer}>
      <NavFilter className={styles.productsContainer_filters} />

      <div className={styles.productsContainer_cards}>
        <AllCards allProducts={currentProducts} />
      </div>
      
      
    </div>
    <div>
      <Paginate className={styles.paginateStilo}
      productsPerPage={productsPerPage}
      allProducts={allProducts.length}
      paginate = {paginate}
    />
    </div>
    
    </>
  );
  
};

export default Products;
