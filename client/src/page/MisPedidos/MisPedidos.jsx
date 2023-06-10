import React, { useEffect } from 'react';

import AllCardsPedidos from '../../components/AllCardsPedidos/AllCardsPedidos';

import { useDispatch, useSelector } from 'react-redux';

import { getOrders } from '../../redux/actions';
// Aqui va a estar toda la logica necesaria para que el administrador del ecommerce vea los pedidos que le van llegando

import styles from './MisPedidos.module.css';

const MisPedidos = () => {
  
  const dispatch = useDispatch();
  const allOrders = useSelector(state => state.orders);
  
  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch]);


  return (
    <div>
      <AllCardsPedidos allOrders={allOrders}/>
    </div>
  )
}

export default MisPedidos;