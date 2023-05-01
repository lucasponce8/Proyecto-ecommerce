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
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");


  

  useEffect(() => {
    dispatch(getFilterCategories());
  }, [dispatch]);

  function handleFilterCategories(e) {
    const selectedCategory = e.target.value;
    setFilterCategory(selectedCategory);
    if (selectedCategory === "all") {
      dispatch(getProducts());
    } else {
      dispatch(filterProductsByCategory(selectedCategory));
    }
  }

  function handleSort(e) {
    // e.preventDefault();

    const selectedOrder = e.target.value;

    setSortOrder(selectedOrder);

    if(selectedOrder === ' ') {
      return dispatch(getProducts())
    }
    dispatch(orderByPrice(selectedOrder));
    
    // setOrden(`Ordenado ${e.target.value}`);
  }
  

  
  function reset(e) {
    e.preventDefault();
    dispatch(getProducts());
    setSortOrder("");
    setFilterCategory("all");
  }

  return (
    <div className={styles.filtesContainer}>
      <select 
        value={sortOrder}
        onChange={(e) => handleSort(e)}
      >
        <option value=" ">Sin orden</option>
        <option value="asc">De menor a mayor</option>
        <option value="desc">De mayor a menor</option>
      </select>
      <select 
        value={filterCategory}
        onChange={(e) => handleFilterCategories(e)}
      >
        <option value="all">Todas las categorías</option>
        {allCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        className={styles.filtesContainer_button}
        onClick={e => reset(e)}
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default OrderFilters;
