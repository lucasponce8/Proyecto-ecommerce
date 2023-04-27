import OrderFilters from '../OrderFilters/OrderFilters';
import SearchBar from '../SearchBar/SearchBar';

import styles from './NavFilter.module.css';


const NavFilter = () => {
  return (
    <div className={styles.navFilterContainer}>
        <SearchBar />
        <OrderFilters />
    </div>
  )
}

export default NavFilter;