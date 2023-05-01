import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContainer_list}>
        <nav className={styles.footerContainer_nav}>
          <ul className={styles.footerContainer_nav_ul}>
            <li className={styles.footerContainer_nav_ul_list}>
              <Link
                to="/products"
                className={styles.footerContainer_nav_ul_list__link}>
                Productos
              </Link>
            </li>
            <li className={styles.footerContainer_nav_ul_list}>
              <Link
                to="/about"
                className={styles.footerContainer_nav_ul_list__link}>
                Preguntas
              </Link>
            </li>
            <li className={styles.footerContainer_nav_ul_list}>
              <Link
                to="/create"
                className={styles.footerContainer_nav_ul_list__link}>
                Crear producto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerContainer_logo}>
        <div className={styles.footerContainer_logo_container}>
          <Link to="/" className={styles.footerContainer_logo_container_link}>
            Inicio
          </Link>
        </div>
      </div>
      <div className={styles.footerContainer_legal}>
        <h4>© . Todos los derechos reservados.</h4>
      </div>
    </div>
  );
};

export default Footer;
