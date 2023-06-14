import React from "react";

import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/actions";
import { useState } from "react";
import Swal from "sweetalert2";


import styles from "./ModalEditProduct.module.css";

const ModalEditProduct = ({
    name,
    description,
    price,
    category,
    subcategory,
    stock,
    image,
    id,
    onOpenModal
}) => {
    
    const [input, setInput] = useState({
        id: id,
        name: name,
        price: price,
        stock: Number(stock),
    });

    const handleChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        
    }

    const dispatch = useDispatch();
    
    const onProductChangeSubmit = (e) => {
        e.preventDefault();

        // console.log(input)



        dispatch(editProduct(input.id, input));
        onOpenModal()

        Swal.fire({
            title: "Producto modificado!",
            text: "En unos segundos sera redirigido al producto",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
          }).then(() => {
            window.location.href = `/detail/${input.id}`;

          });

    }


    return (
        <div className={styles.modalContainer}>
            <div>
                <h3>Modificar producto:</h3>
            </div>
            <form className={styles.modalContainer_form}>
                <label htmlFor="name">Nombre: </label>
                <input
                    onChange={handleChangeInput} type="text" value={input.name} placeholder={name} id="name" name="name"/>

                {/* <label htmlFor="description">Descripcion: </label>
                <textarea value={input.description} id="description">
                    {description}
                </textarea> */}

                <label htmlFor="price">Precio: </label>
                <input
                    onChange={handleChangeInput}
                    type="number"
                    value={input.price}
                    placeholder={price}
                    id="price"
                    name="price"
                />

                <label htmlFor="category">Categoria: </label>
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={input.category}
                    placeholder={category}
                    id="category"
                    name="category"
                />

                <label htmlFor="subcategory">Subcategoria: </label>
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={input.subcategory}
                    placeholder={subcategory}
                    id="subcategory"
                    name="subcategory"
                />

                <label htmlFor="stock">Stock: </label>
                <input
                    onChange={handleChangeInput}
                    type="number"
                    id="stock"
                    value={input.stock}
                    placeholder={stock}
                    name="stock"
                />

                <label htmlFor="image">Cambiar imagen: </label>
                <input
                    onChange={handleChangeInput}
                    type="url"
                    id="image"
                    value={input.image}
                    placeholder={image}
                    name="image"
                />

                <button 
                    className={styles.buttonSubmitChanges}
                    onClick={(e) => onProductChangeSubmit(e)}
                >
                    Modificar
                </button>
            </form>
        </div>
    );
};

export default ModalEditProduct;
