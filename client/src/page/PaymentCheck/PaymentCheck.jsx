import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useCart from "../../hooks/useCart";

import { useLocation } from 'react-router-dom';
import { postEmail, postOrder } from '../../redux/actions';

export const PaymentCheck = () => {

    const dispatch = useDispatch();




    const { cart, calculateTotalItem, clearCart, onAdd } = useCart();






    // let msj = cartOrder.products.map(prods => prods.map(item => item.cantidad + ': ' + item.producto))

    // let orderMsj = msj.map(items => items.join(' '))


    // const handleSubmit = (e) => {
    //   e.preventDefault();

  
  
      
      
    // }

    const calculateCartTotal = () => {
      let total = 0;
  
      for (const product of cart) {
        total += calculateTotalItem(product);
      }
  
      return total;
    };

    let totalOrder = calculateCartTotal();

    const cartOrder = {
      products: cart.map((product) => [
        { cantidad: product.quantity, producto: product.name, id: product._id },
      ]),
      total: totalOrder,
    };

    // console.log('este soy io :0', cartOrder.products)
    
    useEffect(() => {
      
      setTimeout(() => {
        
        if(cartOrder) {
          console.log('Si pude' , cartOrder)
          dispatch(postOrder(cartOrder))
          clearCart()
        } else {
          console.log('No puedo :(', cartOrder)
        }
      }, 5000);

    }, [])

  return (
    <>    
      <div>
        <h1>Pago realizado</h1>
      </div>
    </>
  )
}
