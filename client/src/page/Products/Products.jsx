import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategory, getFilterCategories, getProducts, orderByPrice } from '../../redux/actions';
import { AllCards } from '../../components/AllCards/AllCards';


const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products); // "products" esta declarado en el initalState del reducer
  const allCategories = useSelector(state => state.categories);
  const [orden, setOrden] = useState("")

  useEffect(() => {
    dispatch(getFilterCategories())
  }, [dispatch])
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function handleFilterCategories(e) {
    const selectedCategory = e.target.value;
      if (selectedCategory === "all") {
        dispatch(getProducts());
      } else {
        dispatch(filterProductsByCategory(selectedCategory));
      }
  }

  function handleSort (e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value))
    // setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
  };
  
  return (
    <div>
      <h1>Productos</h1>
      <div>
        <select onChange={e =>handleSort(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select onChange={e =>handleFilterCategories(e)}>
          <option value="all">Todas las categorías</option>
            {
              allCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
</select>
      </div>
      <AllCards allProducts={allProducts} />
    </div>
  );

}

export default Products
// const ProductDetail = ({match}) => {
    
// let data = useSelector(state=> state.productDetail)

// React.useEffect(
//     () => {

//       useDispatch(getProductDetail(match.params.id))
//     },[match.params.id]
// )
