import React from 'react';
import useCart from '../../hooks/useCart';
import { CartItem } from '../../components/CartItem/CartItem';

import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { postOrder } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Cart = () => {
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
                        deleteProductCart = {() => deleteProductCart(product)}
                        calculateTotalItem={() => calculateTotalItem(product)}
                        deleteProduct={() => deleteProduct(product)}
                        {...product}
                      />
                    
                    ))
                  }
                </ul>
              </div>
              <div>
                <h4>Total: ${calculateCartTotal()}</h4>
              </div>
              <div>
                <button
                  onClick={clearCart}
                >
                  Limpar carrito
                </button>
            </div>
            <div>
              <Link to='/checkout'>
                <button>
                  Finalizar compra
                </button>
              </Link>
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

export default Cart;
