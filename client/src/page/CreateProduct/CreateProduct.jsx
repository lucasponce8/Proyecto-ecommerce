import React from 'react'
import styles from './CreateProduct.module.css'

export const CreateProduct = () => {
  return (
    
    <div className={styles.create_container}>
      <form >
        
      
        <div className={styles.create_container_info}>

          <div className={styles.create_container_info_picture}>
             <input type="file" />

          </div>
          <div className={styles.create_container_info_inputs}>
             <input type="text" placeholder='Ingrese el nombre'/>
             <select name="" id="">
              <option value="" disabled>Ingrese una categoria</option>
             </select>
             <select name="" id="">
              <option value="" disabled>Ingrese una subcategoria</option>
             </select>
             <input type="number" placeholder='Precio'/>
             <input type="number" placeholder='Stock'/>
              
              
          </div>
        </div>
        <div className={styles.create_container_description}>
            <textarea placeholder='Ingrese la descripcion'></textarea>
        </div>
        <button type="submit" className={styles.button}>Crear</button>
        </form>
    </div>
      
      
    
      
  )
}

export default CreateProduct;
