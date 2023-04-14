import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';

const Products = () => {

 
  return (
    <div>
      <h1>Products</h1>
      
    </div>
  )
}

export default Products
// const ProductDetail = ({match}) => {
    
// let data = useSelector(state=> state.productDetail)

// React.useEffect(
//     () => {

//       useDispatch(getProductDetail(match.params.id))
//     },[match.params.id]
// )
