import React from 'react';

import styles from './CardPedido.module.css';

const CardPedido = ({order}) => {
  
  return (
    <div className={styles.cardOrder}>
      <p>Dia: {order.createdAt}</p>
      <p>orden: {order._id}</p>

      <p>productos: </p>
      {order.products.map((productArray, index) => (
        <div key={index}>
          {productArray.map((product, subIndex) => (
            <p key={subIndex}>
              cantidad: {product.cantidad}, producto: {product.producto}
            </p>
          ))}
        </div>
      ))}

      <p>total: ${order.total}</p>

      
    </div>
  )
}

export default CardPedido;