import React from 'react';

import CardPedido from '../CardPedido/CardPedido';

import styles from './AllCardsPedidos.module.css';

const AllCardsPedidos = ({allOrders}) => {
  return (
    <div className={styles.orders_container}>
        {
          allOrders.length > 0 ? (
            allOrders?.map(order => {
              return (
                <CardPedido order={order} key={order._id}/>
              )
            })
          )

          :

          <p>Cargando...</p>
        }
    </div>
  )
}

export default AllCardsPedidos;