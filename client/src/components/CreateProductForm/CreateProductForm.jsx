// import { Formik, Form, Field, ErrorMessage } from 'formik';

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFilterCategories, postProduct } from "../../redux/actions";
import Swal from "sweetalert2";



import styles from "./CreateProductForm.module.css";


const CreateProductForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(state => state.products);

  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    subcategory: '',
    stock: '',
  });

  const validateInputs = (input) => {
    let regularExpNameDescription = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9-(),.]+$/;
    let errorInput = {};
  
    if(!input.name) {
      errorInput.name = "El nombre es obligatorio";
    } else if(!regularExpNameDescription.test(input.name)){ 
      errorInput.name = "Solo es valido usar letras (incluida la ñ-ü y acentos), numeros, guiones medios y parentesis"
    } else if(!input.description) {
      errorInput.description = "La descripcion es obligatoria"
    } else if(!regularExpNameDescription.test(input.description)) {
      errorInput.description = "Solo es valido usar letras (incluida la ñ-ü y acentos), numeros, guiones medios y parentesis"
    }
    
    return errorInput; 
  };

  const [errorIn, setErrorIn] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
    setErrorIn(validateInputs({
      ...input,
      [e.target.name]:[e.target.value]
    }))

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameRepeat = products.filter(prod => prod.name === input.name);

    if(nameRepeat.length !== 0) {
      alert('Ya existe un producto con ese nombre, por favor elija otro');
      return;
    }

    let resultError = Object.keys(validateInputs(input));

    if(resultError.length !== 0) {
      alert('Llene los campos correctamente');
      return
    } else {
      dispatch(postProduct(input));

  
      setInput({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '',
        subcategory: '',
        stock: '',
      });

      Swal.fire({
        title: "Producto creado!",
        text: "En unos segundos sera redirigido al producto",
        icon: "success",
        timer: 3000,
        showConfirmButton: true,
      }).then(() => {
        window.location.href = `/products`;

      });
      // navigate('/products');
    }
  }


  return (
    <div>
      <div className={styles.create_container}>
        <form onSubmit={e => handleFormSubmit(e)}>
          <div className={styles.create_container_info}>
            <div
                className={styles.create_container_info_picture}
            >
              <input 
                type="url"
                value={input.image}
                name="image"
                placeholder="Agregue la url de la foto"
                onChange={e => handleChange(e)}
              />
            </div>

            <div>
              {/* <Widget
                  tabs="file url"
                  locale="es"
                  name="image"
                  publicKey="d00f029a60bdde9dafab"
                  previewStep
                  customTabs={{ preview: effects }}
                  clearable
                  onFileSelect={(file) => {
                    if (!file) {
                      setFieldValue("image", "");
                      return;
                    }
                    file.done((fileInfo) => {
                      setFieldValue("image", fileInfo.cdnUrl);
                    });
                  }}
                  onChange={(file) => {
                    setFieldValue("image", file);
                  }}
                /> */}
            </div>

            <div className={styles.create_container_info_inputs}>
              <input 
                type="text" 
                value={input.name}
                name='name'
                placeholder="Ingrese el nombre"
                onChange={e => handleChange(e)}
              />
              {
                errorIn.name && (
                  <p>{errorIn.name}</p>
                )
              }
              <input 
                type="text" 
                value={input.category}
                name='category'
                placeholder="Ingrese la categoria"
                onChange={e => handleChange(e)}
              />
              {/* {
                errorIn.category && (
                  <p>{errorIn.category}</p>
                )
              } */}
              <input 
                type="text" 
                value={input.subcategory}
                name='subcategory'
                placeholder="Ingrese la subcategoria"
                onChange={e => handleChange(e)}
              />
              {/* {
                errorIn.subcategory && (
                  <p>{errorIn.subcategory}</p>
                )
              } */}
              <input 
                type="number" 
                min='0'
                value={input.number}
                name="price"
                placeholder="Precio"
                onChange={e => handleChange(e)}
              />
              {/* {
                errorIn.price && (
                  <p>{errorIn.price}</p>
                )
              } */}
              <input 
                type="number" 
                min='0'
                value={input.stock}
                name="stock"
                placeholder="Stock" 
                onChange={e => handleChange(e)}
              />
              {/* {
                errorIn.price && (
                  <p>{errorIn.price}</p>
                )
              } */}
            </div>
          </div>
          <div className={styles.create_container_description}>
            <textarea 
              value={input.description}
              name="description"
              placeholder="Ingrese la descripcion"
              onChange={e => handleChange(e)}
            />
            {
              errorIn.name && (
                <p>{errorIn.name}</p>
              )
            }
          </div>
          <button type="submit" className={styles.create_container_button}>
            Crear
          </button>
          <Link to='/products'>
            <button type="submit" className={styles.create_container_button}>
              Volver
            </button>
          </Link>

        </form>
      </div>
    </div>


  );
};

export default CreateProductForm;
