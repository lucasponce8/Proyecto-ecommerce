import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useCart from "../../hooks/useCart";
import { postOrder } from "../../redux/actions";

import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

  // estado para avisar cuando hay un pedido nuevo
  // const [hasNewOrder, setHasNewOrder] = useState(false);

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
      // setHasNewOrder(true);
      Swal.fire({
        title: "Compra realizada!",
        text: "En unos segundos sera redirigido al inicio",
        icon: "success",
        timer: 3000,
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

              <Formik 
                initialValues={{ 
                  email: '', 
                  nombre: '',
                  apellido: '',
                  dni: '',
                  provincia: '',
                  ciudad: '',
                  calle: '',
                  piso: '',
                  cp: '',
                  celular: '',
                }}
                validate={values => {
                  const errors = {};
                    if (!values.email) {
                      errors.email = 'Correo es requerido';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Completar correo';
                    }
                    if(!values.nombre) {
                      errors.nombre = 'Nombre es requerido'
                    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(values.nombre)) {
                      errors.nombre = 'Nombre solo pueden ser letras';
                    }
                    if(!values.apellido) {
                      errors.apellido = 'Apellido es requerido'
                    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(values.apellido)) {
                      errors.apellido = 'Apellido solo pueden ser letras';
                    }
                    if(!values.dni) {
                      errors.dni = 'Dni es requerido'
                    } else if(!/^[0-9]{1,10}$/.test(values.dni)) {
                      errors.dni = 'Dni solo pueden ser numeros';
                    }
                    if(!values.calle) {
                      errors.calle = 'Calle es requerido'
                    } else if(!/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]{1,50}$/.test(values.calle)) {
                      errors.calle = 'Complete calle';
                    }
                    if(!/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]{1,8}$/.test(values.piso)) {
                      errors.piso = 'Piso solo puede tener letras y numeros';
                    }
                    if(!values.cp) {
                      errors.cp = 'Codigo postal es requerido'
                    } else if(!/^[0-9]{1,10}$/.test(values.cp)) {
                      errors.cp = 'Complete el codigo postal';
                    }
                    if(!values.celular) {
                      errors.celular = 'Celular es requerido'
                    } else if(!/^[0-9]{1,15}$/.test(values.celular)) {
                      errors.celular = 'Ingrese un celular valido';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ values, errors }) => (
                  <Form className={styles.formCheckout}>
                    <Field type="email" name="email" placeholder='Correo'/>
                    <ErrorMessage name="email" component="div" />

                    <Field type="text" name="nombre" placeholder='Nombre'/>
                    <ErrorMessage name="nombre" component="div" />

                    <Field type="text" name="apellido" placeholder='Apellido'/>
                    <ErrorMessage name="apellido" component="div" />

                    <Field type="text" name="calle" placeholder='Calle'/>
                    <ErrorMessage name="calle" component="div" />

                    <Field type="text" name="piso" placeholder='Piso'/>
                    <ErrorMessage name="piso" component="div" />

                    <Field type="number" name="cp" placeholder='Codigo Postal'/>
                    <ErrorMessage name="cp" component="div" />

                    <Field type="number" name="celular" placeholder='Numero de celular'/>
                    <ErrorMessage name="celular" component="div" />


                    {
                     (errors.email || errors.nombre || errors.apellido || errors. calle || errors.cp || errors.celular || !values.email) ?
                      <button disabled>Realizar compra</button>
                      :
                      <div>
                          <button onClick={handleSubmit}>Realizar compra</button>
                      </div>
                    }
                  </Form>
                )}

              </Formik>

            ) :
            <p>Finalizar compra no está disponible mientras tu carrito esté vacío.</p>
        }
    </>
  );
};

export default FormCart;
