import React from "react";
import useCart from "../../hooks/useCart";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { postEmail, postOrder } from "../../redux/actions";

import styles from "./ButtonSubmitCart.module.css";

export const ButtonSubmitCart = ({ values }) => {
  const dispatch = useDispatch();
  const { cart, calculateTotalItem, clearCart } = useCart();

  const calculateCartTotal = () => {
    let total = 0;

    for (const product of cart) {
      total += calculateTotalItem(product);
    }

    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length > 0) {
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


      const infoClient = {
        email: values.email,
        nombre: values.nombre,
        apellido: values.apellido,
        pedido: orderMsj,
      };

      dispatch(postEmail(infoClient));
      dispatch(postOrder(cartOrder));
      clearCart();

      Swal.fire({
        title: "Compra realizada!",
        text: "En unos segundos sera redirigido al inicio",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        //  a la página de inicio después de 2 segundRedirecciónos
        window.location.href = "/";
      });
    } else {
      alert("No se pudo realizar la compra");
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Realizar compra</button>
    </div>
  );
};
