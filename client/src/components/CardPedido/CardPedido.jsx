import React from 'react';

import styles from './CardPedido.module.css';

const CardPedido = ({order}) => {

  console.log(order.products.map(prods=> prods))
  return (
    <div className={styles.cardOrder}>
      <p>orden: {order._id}</p>
      <p>total: {order.total}</p>
      <p>productos: {order.products.join(', ')}</p>
    </div>
  )
}

export default CardPedido;