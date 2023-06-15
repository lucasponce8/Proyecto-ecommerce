import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useCart from "../../hooks/useCart";

import { postEmail, postOrder } from '../../redux/actions';

export const PaymentCheck = () => {

    const dispatch = useDispatch();

    const { cart, calculateTotalItem, clearCart } = useCart();

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

    console.log(cartOrder)

    let msj = cartOrder.products.map(prods => prods.map(item => item.cantidad + ': ' + item.producto))

    let orderMsj = msj.map(items => items.join(' '))




    useEffect(() => {
        const infoClient = {
          email: cart[0]?.clientData?.email,
          nombre: cart[0]?.clientData?.nombre,
          apellido: cart[0]?.clientData?.apellido,
          pedido: orderMsj,
        };

        console.log(infoClient)
      
        if (infoClient.email && infoClient.nombre && infoClient.apellido) {
          dispatch(postEmail(infoClient));
          dispatch(postOrder(cartOrder));
          clearCart();
        }
      }, [dispatch]);
      

  return (
    <h1>Pago realizado</h1>
  )
}
