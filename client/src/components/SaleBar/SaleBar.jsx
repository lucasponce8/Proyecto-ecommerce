import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../../redux/actions";
import { AllCards } from "../../components/AllCards/AllCards";
import styles from "./SaleBar.module.css"
import { Link } from "react-router-dom";



const SaleBar = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products); // "products" esta declarado en el initalState del reducer
  const productosCategoria1 = allProducts.filter((e) => e.category === "Tecnologia").slice(0,3);
  const productosCategoria2 = allProducts.filter((e) => e.category === "Electrodomesticos").slice(0,3);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


    return (
      <div className={styles.saleBarConteiner}>
        <div className={styles.saleBarConteiner_cat1}>
          <Link to="/Tecnologia" className={styles.link}>
            <h2>Tecnologia</h2>
          </Link>
            <AllCards allProducts={productosCategoria1} />
        </div>
        <div className={styles.saleBarConteiner_cat2}>
          <Link to="/Electrodomesticos" className={styles.link}>
            <h2>Electrodomesticos</h2>
          </Link>
            <AllCards allProducts={productosCategoria2}/>
        </div>
      </div>
    );
};

export default SaleBar;
