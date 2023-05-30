import React, { useState } from 'react'

import styles from './SliderCart.module.css'
import useCart from '../../hooks/useCart'
import { Link } from 'react-router-dom'

// import cart from '../../hooks/useCart'


export const CartItem = ({image, price, name, quantity, id, addToCart, stock, product}) => {





  return (

    <li 
      key={id}
      className={styles.item}  
    >
      <img 
        src={image} 
        alt={name} 
        className={styles.itemImg}
      />

      <div className={styles.itemName}>
        <strong>{name}</strong>
      </div>

      <div className={styles.itemPrice}>
        <strong>${price}</strong>
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

  const { cart, addToCart, changeCount } = useCart();
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