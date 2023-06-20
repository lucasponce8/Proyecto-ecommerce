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
  
      const handleOrderPosted = () => {
        setIsOrderPosted(true);
      };


      if (!isOrderPosted && cart.length > 0) {
        dispatch(postOrder(cartOrder)).then(handleOrderPosted);
      }
      

    }, [cart, calculateTotalItem, dispatch, isOrderPosted]);
  
    useEffect(() => {
      if (isOrderPosted) {
        clearCart();
      }
    }, [clearCart, isOrderPosted]);
  



  return (
    <>    
      <div>
        <h1>Pago realizado</h1>
      </div>
    </>
  )
}
