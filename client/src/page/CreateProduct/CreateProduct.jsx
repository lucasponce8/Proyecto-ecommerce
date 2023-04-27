import React from 'react'
import styles from './CreateProduct.module.css'

export const CreateProduct = () => {
  return (
    
    <div className={styles.create_product}> 
       <h2 className={styles.h2}>Esta seccion es para crear un producto</h2>
       <form className={styles.form}>
       <input className={styles.input} type="text" placeholder="Nombre del Producto" />
        <input className={styles.input2} type="number" placeholder="Precio" />
        <input className={styles.input3} type="text" placeholder='Categoria'/>
        <button className={styles.button}>Create</button>
      </form>
      
    </div>
      
      
      
    
      
  )
}

export default CreateProduct;
