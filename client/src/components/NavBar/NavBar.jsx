import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilterCategories } from '../../redux/actions';

import styles from './NavBar.module.css';


const NavBar = () => {

    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categories);

    // console.log(allCategories)

    useEffect(() => {
        dispatch(getFilterCategories())
    }, [dispatch])

  return (
    <nav className={styles.navbar_container}>
        <ul className={styles.navbar_container_pages}>
            <li
                className={styles.navbar_container_pages_btn}
            >
                <Link
                    className={styles.navbar_container_pages_btn_link}
                    to='/'
                >
                    Productos
                </Link>
                {
                    allCategories.length > 0 && (
                        <ul 
                            className={styles.navbar_container_menuOptions_dropdown}
                        >
                            {
                                allCategories.map(category => (
                                    <li key={category}>
                                        <Link
                                            className={styles.navbar_container_pages_btn_link}
                                            to={`/productos/${category}`}
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </li>
            <li
                className={styles.navbar_container_pages_btn}
            >
                <Link
                    className={styles.navbar_container_pages_btn_link}
                    to='/about'
                >
                    Preguntas
                </Link>
            </li>
        </ul>
        <div className={styles.navbar_container_logo}>
            <h1>LOGO</h1>
        </div>
        <div className={styles.navbar_container_menuOptions}>

        </div>
    </nav>
  )
}

export default NavBar