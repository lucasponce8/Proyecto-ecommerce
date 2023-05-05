import React from "react";
import Card from "../Card/Card";
import styles from "./AllCards.module.css";

export const AllCards = ({ allProducts }) => {
  // console.log(allProducts);
  return (
    <div className={styles.allCards_container}>
      {allProducts.length > 0 ? (
        allProducts?.map((producto) => {
          return (
            <Card
              key={producto._id}
              id={producto._id}
              description={producto.description}
              price={producto.price}
              image={producto.image}
              name={producto.name}
              category={producto.category}
              subcategory={producto.subcategory}
              stock={producto.stock}
            />
          );
        })
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};
