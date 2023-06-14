import React, { useEffect } from 'react';

import styles from './CounterDetail.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SliderCart from '../SliderCart/SliderCart';
import useCart from '../../hooks/useCart';


const CounterDetail = ({ product, addToCart, stock}) => {
    const {cart} = useCart();
    let mapCartId = cart.map(item => item._id);
    let filterCart = mapCartId.includes(product._id);
    const [carrito, setCarrito] = useState([]);
    // useEffect(() => {
    //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCarrito(storedCart);
    //   }, []);

    const [showSlider, setShowSlider] = useState(false);
    const toggleSlider = () => {
      setShowSlider(!showSlider);
    };
  
    const handleAddToCart = () => {
      addToCart(product);
      toggleSlider(); // Abrir el menú del carrito desplegable
    //   localStorage.setItem('cart', JSON.stringify([...cart, product]));  
    };
  
    return (
      <div className={styles.counterCart}>
            {!filterCart ? (
                <div className={styles.counterCart_sendCart} onClick={handleAddToCart}>
                    <div onClick={toggleSlider}>
                        <p>Agregar al carrito</p>
                    </div>
                </div>
            ) : (
                    <Link to="/cart">
                        <div className={styles.counterCart_sendCart}>
                            <p>Ir al carrito</p>
                        </div>
                    </Link>
                )}
            {
                showSlider 
                && 
                <div 
                    className={styles.sliderOverlay} 
                    onClick={toggleSlider}
                >
                </div>}
            {
                showSlider 
                && 
                <SliderCart 
                    onClose={toggleSlider} 
                />
            }
      </div>
    );
};
  
export default CounterDetail;
  