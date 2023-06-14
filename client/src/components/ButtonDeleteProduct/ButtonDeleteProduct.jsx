import React from 'react';
import { useDispatch } from "react-redux";

import { deleteProduct } from "../../redux/actions";
import Swal from 'sweetalert2';


import styles from './ButtonDeleteProduct.module.css';

const ButtonDeleteProduct = ({ id }) => {

  const dispatch = useDispatch();

  const onDeleteProduct = (e, id) => {
    e.preventDefault();


    Swal.fire({
      title: "Esta seguro que quiere eliminar el producto?",
      text: "No puedes revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'El producto fue borrado',
          'success'
        ).then(() => {

          dispatch(deleteProduct(id))
        }).then(() => {
          window.location.href = `/myproducts`;
        })
      }
    })
    
  }
  
  return (
    <div>
        <div 
          className={styles.deleteCart_sendCart}
          onClick={(e) => onDeleteProduct(e, id)}
        >
            Borrar producto
        </div>
    </div>
  )
}

export default ButtonDeleteProduct;