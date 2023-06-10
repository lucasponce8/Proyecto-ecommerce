import React from 'react';
import useCart from '../../hooks/useCart';
import { CartItem } from '../../components/CartItem/CartItem';

import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { postOrder } from '../../redux/actions';

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

  console.log(cart)

  const dispatch = useDispatch();



  // traer aqui el post del action y cargarle el carrito
  // crear una funcion nueva para que cuando le de click 
  // al boton de agregar al carrito se pueda ejecutar esa funcion

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cart.length > 0) {
      let totalOrder = calculateCartTotal()
      const cartOrder = {
        products: cart.map(prod => prod.name),
        total: totalOrder
      }
      dispatch(postOrder(cartOrder))
      clearCart()
      alert('Compra realizada')
    } else {
      alert('No se pudo realizar la compra')
    }
    
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
              <button onClick={handleSubmit}>
                Realizar compra
              </button>
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
