import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";

import { getFilterCategories } from "../../redux/actions";
import cartIcon from '../../images/cart.png';
import cartIconFull from '../../images/cart-full.png';

import SliderCart from "../SliderCart/SliderCart";
import ProfileAdmin from "../ProfileAdmin/ProfileAdmin";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);

  const { cart } = useCart();


  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  useEffect(() => {
    dispatch(getFilterCategories());
  }, [dispatch]);

  return (
    <nav className={styles.navbar_container}>
      <ul className={styles.navbar_container_pages}>
        <li className={styles.navbar_container_pages_btn}>
          <Link
            className={styles.navbar_container_pages_btn_link}
            to="/products">
            Productos
          </Link>

          {allCategories.length > 0 && (
            <ul className={styles.navbar_container_menuOptions_dropdown}>
              {allCategories.map((category) => (
                <li key={category}>
                  <Link
                    className={styles.navbar_container_pages_btn_link}
                    to={`/productos/${category}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={styles.navbar_container_pages_btn}>
          <Link className={styles.navbar_container_pages_btn_link} to="/about">
            Preguntas
          </Link>
        </li>
        <li className={styles.navbar_container_pages_btn}>
          <Link className={styles.navbar_container_pages_btn_link} to="/create">
            Crear producto
          </Link>
        </li>
        <li className={styles.navbar_container_pages_btn}>
          <Link 
            className={styles.navbar_container_pages_btn_link} to="/pedidos"
          >
            Mis pedidos
          </Link>
        </li>
        <li className={styles.navbar_container_pages_btn}>
          <Link 
            className={styles.navbar_container_pages_btn_link} to="/myproducts"
          >
            Mis productos
          </Link>
        </li>
        
        {/* todo: mostrar aqui el profile admin */}
        {/* <ProfileAdmin /> */}
      </ul>
      <div className={styles.navbar_container_logo}>
        {/* <Link to="/">
          <h1>Logo</h1>
        </Link> */}
      </div>
      <div className={styles.navbar_container_menuOptions}>
        <div 
          className={styles.navbar_container_menuOptions__cart}
        >
          
          <div
            className={styles.cartContainer}
            onClick={toggleSlider}
          >
            {
              cart.length > 0 ?
              <img src={cartIconFull} alt="cart-full" />
              :
              <img src={cartIcon} alt="cart" />
            }
          </div>
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
      </div>
    </nav>
  );
};

export default NavBar;
