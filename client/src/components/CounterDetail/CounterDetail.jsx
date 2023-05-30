import React from 'react';

import styles from './CounterDetail.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CounterDetail = ({product, addToCart, cart}) => {
  
    const [count, setCount] = useState(0);

    const sumaProd = () => {
        if(count < product.stock) {
            setCount(count + 1);
        }
    }

    const restaProd = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        setCount(count)
        addToCart({...product, quantity: count})
    }


  
    return (
    <div className={styles.counterCart}>
        {/* <div className={styles.counterCart_info}>
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
        </div> */}
    {
        !false ? (

            <div
            className={styles.counterCart_sendCart}
            onClick={() => addToCart(product)}
            >
        <p>Agregar al carrito</p>
        </div>
        )
        : (

            <Link to='/cart'>
                <div
                    className={styles.counterCart_sendCart}
                >
                    <p>Ir al carrito</p>
                </div>
            </Link>
        )
    }
    </div>
  )
}

export default CounterDetail