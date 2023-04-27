import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
    filterProductsByCategory,
    getFilterCategories,
    getProducts,
    orderByPrice,
} from "../../redux/actions";

import styles from "./OrderFilters.module.css";

const OrderFilters = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  const [orden, setOrden] = useState("");
  

  useEffect(() => {
    dispatch(getFilterCategories());
  }, [dispatch]);

  function handleFilterCategories(e) {
    const selectedCategory = e.target.value;
    if (selectedCategory === "all") {
      dispatch(getProducts());
    } else {
      dispatch(filterProductsByCategory(selectedCategory));
    }
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    // setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={styles.filtesContainer}>
      <select onChange={(e) => handleSort(e)}>
        <option disabled value="">Precio</option>
        <option value="asc">Mayor</option>
        <option value="desc">Menor</option>
      </select>
      <select onChange={(e) => handleFilterCategories(e)}>
        <option value="all">Todas las categorías</option>
        {allCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderFilters;
