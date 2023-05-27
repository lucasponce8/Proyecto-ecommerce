import React from 'react'
import styles from "./Paginate.module.css"

export default function Paginate ({productsPerPage, allProducts, paginate}){
  const pageNumbers = []

  for (let i = 0; i<=Math.ceil(allProducts/productsPerPage) -1; i++){ //divido todos los personajes por la cantidad de personajes por pagina
    pageNumbers.push(i+1) //pusheo los numeros que me da el resultado al pageNumbers
  }
  // console.log(pageNumbers)

  return(
    <div className={styles.paginateItem}>
      <nav>
      <ul className={styles.paginate}>
        {pageNumbers && //si tengo este arreglo, mapea y me devuelve cada uno de los nums que devuelva el paginado
        pageNumbers.map(number =>(   //aqui el mapa agarra cada producto por separado y lo renderiza
          <li className={styles.paginado} key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
    
  )
}
