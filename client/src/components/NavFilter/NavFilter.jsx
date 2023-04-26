import SearchBar from '../SearchBar/SearchBar';

import styles from './NavFilter.module.css';


const NavFilter = () => {
  return (
    <div className={styles.navFilterContainer}>
        <SearchBar />
    </div>
  )
}

export default NavFilter;