import React from "react";
import { useDispatch } from "react-redux";
import useCart from "../../hooks/useCart";
import { postOrder } from "../../redux/actions";

import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

import styles from './FormCart.module.css';

const FormCart = () => {
  const {
    cart,
    calculateTotalItem,
    clearCart,
  } = useCart();

  const calculateCartTotal = () => {
    let total = 0;

    for (const product of cart) {
      total += calculateTotalItem(product);
    }

    return total;
  };

//   console.log(cart);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length > 0) {
      let totalOrder = calculateCartTotal();
      const cartOrder = {
        // products: [{producto: cart.map((prod) => prod.name)}],
        products: cart.map(product => [{cantidad: product.quantity, producto: product.name}]), 
        total: totalOrder,
      };
      console.log(cartOrder)
      dispatch(postOrder(cartOrder));
      clearCart();
      // alert("Compra realizada");
      Swal.fire({
        title: "Felicidades!",
        text: "Su compra fue realizada",
        icon: "success",
        timer: 3000, // Tiempo en milisegundos (2 segundos)
        showConfirmButton: false
      }).then(() => {
        // Redirección a la página de inicio después de 2 segundos
        window.location.href = "/";
      });
      
    } else {
      alert("No se pudo realizar la compra");
    }
  };

  return (
      <>
        {
            cart.length > 0 ?
            (

                <form>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="email" placeholder="Ingrese su correo" />
                <input type="number" placeholder="Dni" />
                <input type="number" placeholder="Telefono" />
                <input type="text" placeholder="Provincia" />
                <input type="text" placeholder="Ciudad" />
                <textarea placeholder="Observaciones"></textarea>
            
                <div>
                    <button onClick={handleSubmit}>Realizar compra</button>
                </div>
                </form>
            ) :
            <p>Finalizar compra no está disponible mientras tu carrito esté vacío.</p>
        }
    </>
  );
};

export default FormCart;
