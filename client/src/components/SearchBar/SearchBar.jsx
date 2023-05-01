import { useState } from 'react';
import searchLogo from '../../images/search.png';

import { useDispatch } from 'react-redux';
import { getNameProduct } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameProduct(name))
    setName('');
  }


  return (
    <div className={styles.searchBarContainer}>
      <form 
        className={styles.searchBarContainer_form}
      >
        <input 
          type="text" 
          placeholder='Buscar producto...'
          value={name}
          onChange={e => handleInputChange(e)}
        />   
        <button 
          type="submit"
          onClick={e => handleSubmit(e)}
        >
          <img src={searchLogo} alt="Logo de busqueda" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar; 