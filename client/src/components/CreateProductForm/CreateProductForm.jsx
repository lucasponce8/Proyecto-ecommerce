// import { Formik, Form, Field, ErrorMessage } from 'formik';


import styles from './CreateProductForm.module.css';

const CreateProductForm = () => {

    const initialValues = {
        productName: '',
        productCategory: '',
        productSubcategory: '',
        productPrice: '',
        productStock: '',
        productDescription: '',
        productImage: ''
    }


  return (
    <div>
      <div className={styles.create_container}>
        <form>
          <div className={styles.create_container_info}>
            <div 
                className={styles.create_container_info_picture}
            >
              <input type="file" placeholder="Ingrese el nombre del producto" />
            </div>
            <div className={styles.create_container_info_inputs}>
              <input type="text" placeholder="Ingrese el nombre" />
              <select>
                <option value="" disabled>
                  Ingrese una categoria
                </option>
              </select>
              <select>
                <option value="" disabled>
                  Ingrese una subcategoria
                </option>
              </select>
              <input type="number" placeholder="Precio" />
              <input type="number" placeholder="Stock" />
            </div>
          </div>
          <div className={styles.create_container_description}>
            <textarea placeholder="Ingrese la descripcion"></textarea>
          </div>
          <button type="submit" className={styles.create_container_button}>
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;
