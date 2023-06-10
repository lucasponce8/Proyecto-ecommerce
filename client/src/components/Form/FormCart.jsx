import React from "react";
import { useDispatch } from "react-redux";
import useCart from "../../hooks/useCart";
import { postOrder } from "../../redux/actions";

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
        products: cart.map((prod) => prod.name),
        total: totalOrder,
      };
      dispatch(postOrder(cartOrder));
      clearCart();
      alert("Compra realizada");
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
