import React from 'react'
import useCart from '../../hooks/useCart';
import { CartItem } from '../../components/SliderCart/SliderCart';

import styles from './Cart.module.css'

const Cart = () => {
  const { cart, addToCart } = useCart();

  return (
    <>
      <div>
        <h4>No se encuentran productos disponibles</h4>
      </div>
      <div className={styles.cartListContainer}>
          
          <div className={styles.cartList}>
            <ul> 
              <li className={styles.items}>
              {
                
                cart.map(product => (
                  <CartItem 
                    
                    key={product.id}
                    addToCart = {() => addToCart(product)}
                    {...product}
                    />
                  ))
                }
                </li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Cart
