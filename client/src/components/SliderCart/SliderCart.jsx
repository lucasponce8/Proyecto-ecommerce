import React, { useState } from 'react'

import styles from './SliderCart.module.css'


const SliderCart = ({onClose}) => {

  

  return (
    <div className={styles.sliderContainer}>
        <div>
          <div className={styles.sliderContainer_button}>
            <div 
              onClick={onClose}
              className={styles.closeBtn}
            >
              X
            </div>
          </div>
          <div className={styles.sliderContainer_title}>
            <p className={styles.titleNavCart}>
              Pedido: 
            </p>
          </div>
        </div>
    </div>
  )
}

export default SliderCart;