import React from 'react';
import useCart from '../../hooks/useCart';
import { CartItem } from '../../components/SliderCart/SliderCart';

import styles from './Cart.module.css';

const Cart = () => {
  const { cart, addToCart } = useCart();

  return (
    <>
      <div>
        {
          cart.length > 0 ? (
            <div className={styles.cartListContainer}>
          
              <div className={styles.cartList}>
                <ul> 
                  {
                    
                    cart.map(product => (
                      
                      <CartItem 
                        
                        key={product._id}
                        addToCart = {() => addToCart(product)}
                        {...product}
                        />
                    
                      ))
                    }
                </ul>
              </div>
            </div>
          )
          :
          (
            <h4>No se encuentran productos disponibles</h4>
          )
        }
      </div>
     
    </>
  )
}

export default Cart
