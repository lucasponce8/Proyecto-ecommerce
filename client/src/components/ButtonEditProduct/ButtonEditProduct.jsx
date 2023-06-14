import React, { useState } from 'react';

import styles from './ButtonEditProduct.module.css';
import ModalEditProduct from '../ModalEditProduct/ModalEditProduct';

const ButtonEditProduct = ({
  id,
  description,
  price,
  image,
  name,
  category,
  subcategory,
  stock
}) => {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(!open);
  }

  return (
    <div>
        <div className={styles.counterCart_sendCart} onClick={onOpenModal}>
            Editar producto
        </div>
        {
          open ?
          <div 
            className={styles.sliderOverlay}
            onClick={onOpenModal}
          >
          </div>
          :
          <></>
        }
        {
          open ? 
            <>
              <ModalEditProduct 
                name={name}
                description={description}
                price={price}
                category={category}
                subcategory={subcategory}
                stock={stock}
                image={image}
                id={id}
              />
            </>
          :
            <></>
          
        }
    </div>
  )
}

export default ButtonEditProduct;