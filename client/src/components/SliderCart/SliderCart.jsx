import React, { useState } from 'react'

import useCart from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'

import styles from './SliderCart.module.css'





const SliderCart = ({onClose}) => {

  const { 
    cart, 
    addToCart, 
    deleteProductCart, 
    calculateTotalItem, 
    clearCart, 
    deleteProduct
  } = useCart();

  const calculateCartTotal = () => {
    let total = 0;

    for (const product of cart) {
      total += calculateTotalItem(product); 
    }

    return total;
  }

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
        {
          cart.length > 0 ?
          <div>
            <h3>Total: ${calculateCartTotal()}</h3>
            <div>
              <button
                onClick={clearCart}
              >
                Limpar carrito
              </button>
            </div>
          </div>
          :
          <p>No hay productos en el carrito</p>

        }
        <div className={styles.sliderItems}>
          <ul className={styles.sliderItems_list}>
            {
              cart.map(product => (
                <CartItem 
                  key={product._id}
                  stock={product.stock}
                  addToCart = {() => addToCart(product)}
                  deleteProductCart = {() => deleteProductCart(product)}
                  calculateTotalItem={() => calculateTotalItem(product)}
                  deleteProduct={() => deleteProduct(product)}
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