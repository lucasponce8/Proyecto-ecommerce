import React, { useState } from 'react'

import styles from './SliderCart.module.css'
import useCart from '../../hooks/useCart'
import { Link } from 'react-router-dom'

// import cart from '../../hooks/useCart'


export const CartItem = ({image, price, name, quantity, id, addToCart}) => {

  return (

    <li key={id}>
      <img src={image} 
        alt={name} 
      />
      <div>
        <strong>{name} - ${price}</strong>
      </div>
    
      <footer>
        <small>
          Cantidad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    
    </li>
  )

}


const SliderCart = ({onClose}) => {

  const { cart, addToCart } = useCart();
  

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
              <Link to='/cart'>Carrito</Link>
            </p>
          </div>
        </div>
        <div>
          <ul>
            {
              cart.map(product => (
                <CartItem 
                  key={product.id}
                  addToCart = {() => addToCart(product)}
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