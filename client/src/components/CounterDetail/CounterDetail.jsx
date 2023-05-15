import React from 'react';

import styles from './CounterDetail.module.css';
import { useState } from 'react';

const CounterDetail = ({stock}) => {
  
    const [count, setCount] = useState(0);

    const sumaProd = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const restaProd = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
  
    return (
    <div className={styles.counterCart}>
        <div className={styles.counterCart_info}>
            <div 
                className={styles.counterCart_info_button} 
                onClick={sumaProd}
            >
                +
            </div>
            <div
                className={styles.counterCart_info_counter} 
            >
                {count}
            </div>
            <div 
                className={styles.counterCart_info_button}
                onClick={restaProd}
            >
                -
            </div>
        </div>
        <div
            className={styles.counterCart_sendCart}
        >
            <p>Agregar al carrito</p>
        </div>
    </div>
  )
}

export default CounterDetail