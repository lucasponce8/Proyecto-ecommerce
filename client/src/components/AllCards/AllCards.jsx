import React from 'react'
import Card from '../Card/Card';

export const AllCards = ({allProducts}) => {
  console.log(allProducts);
    return (
        <>
            <div>AllCards</div>
            {
                allProducts.length > 0 ? (allProducts.map(producto => {
                    return (
                        <Card key = {producto._id}
                        description={producto.description}
                        price={producto.price}
                        image={producto.image}
                        name={producto.name}
                        category={producto.category}
                        subcategory={producto.subcategory}
                        />
                    )
                }))
                : (<p>No hay productos disponibles</p>)
            }
        </>
    )
}
