import React, { useState } from 'react'

import useCart from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'

import styles from './SliderCart.module.css'





const SliderCart = ({onClose}) => {

  const { cart, addToCart, deleteProductCart } = useCart();
  console.log(cart)

  return (
    <div className={styles.sliderContainer}>
        <div>
          <div className={styles.sliderContainer_button}>
            <div 
              onClick={onClose}
              className={styles.closeBtn}
            >
              X
            </div>
          </div>
          <div className={styles.sliderContainer_title}>
            <p className={styles.titleNavCart}>
              <Link to='/cart'>Ir a pagar</Link>
            </p>
          </div>
        </div>
        <div className={styles.sliderItems}>
          <ul className={styles.sliderItems_list}>
            {
              cart.map(product => (
                <CartItem 
                  key={product._id}
                  stock={product.stock}
                  addToCart = {() => addToCart(product)}
                  deleteProductCart = {() => deleteProductCart(product)}
                  {...product}
                />
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default SliderCart;