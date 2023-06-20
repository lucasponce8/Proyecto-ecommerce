import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useCart from "../../hooks/useCart";

import { useLocation } from 'react-router-dom';
import { postEmail, postOrder } from '../../redux/actions';
import { useState } from 'react';

export const PaymentCheck = () => {

    const dispatch = useDispatch();




    const { cart, calculateTotalItem, clearCart } = useCart();


    const [isOrderPosted, setIsOrderPosted] = useState(false);


    // let msj = cartOrder.products.map(prods => prods.map(item => item.cantidad + ': ' + item.producto))

    // let orderMsj = msj.map(items => items.join(' '))


    // const handleSubmit = (e) => {
    //   e.preventDefault();

  

  


    useEffect(() => {
      if (!isOrderPosted && cart.length > 0) {
        const calculateCartTotal = () => {
          let total = 0;
  
          for (const product of cart) {
            total += calculateTotalItem(product);
          }
  
          return total;
        };
  
        const totalOrder = calculateCartTotal();
  
        const cartOrder = {
          products: cart.map((product) => [
            { cantidad: product.quantity, producto: product.name, id: product._id },
          ]),
          total: totalOrder,
        };
  
        dispatch(postOrder(cartOrder)).then(() => {
          setIsOrderPosted(true);
          clearCart();
        });
      }
    }, [cart, calculateTotalItem, clearCart, dispatch, isOrderPosted]);
  



  return (
    <>    
      <div>
        <h1>Pago realizado</h1>
      </div>
    </>
  )
}
