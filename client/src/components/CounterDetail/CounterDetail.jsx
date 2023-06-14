import React from 'react';

import styles from './CounterDetail.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CounterDetail = ({product, addToCart, stock, cart}) => {
    

    let mapCartId = cart.map(item => item._id);
    
    let filterCart = mapCartId.includes(product._id);
    
    // console.log(mapCartId)
    // console.log(filterCart)

    
    
  return (
    <div className={styles.counterCart}>

        {
            !filterCart ?
            <div
                className={styles.counterCart_sendCart}
                onClick={() => addToCart(product)}
            >
                <div>
                    <p>Agregar al carrito</p>
                </div>
            </div>
            :
            <Link to='/cart'>
                <div
                    className={styles.counterCart_sendCart}
                >
                    <p>Ir al carrito</p>
                </div>
            </Link>

        }

    </div>
  )
}

export default CounterDetail;