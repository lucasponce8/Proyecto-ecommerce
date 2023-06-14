import React, { useEffect } from 'react';
import ListProducts from '../../components/ListProducts/ListProducts';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/actions';

import styles from './MisProductos.module.css';

const MisProductos = () => {

const dispatch = useDispatch();
const allProducts = useSelector((state) => state.products); 


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

  return (
    <div className={styles.listProducts_container}>
        
        <ListProducts
            allProducts={allProducts}
        />
    </div>
  )
}

export default MisProductos;