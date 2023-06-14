import React from 'react';
import ListProductsItem from '../ListProductsItem/ListProductsItem';

const ListProducts = ({allProducts}) => {
  return (
    <div>
        {
            allProducts?.map(prod => {
                return (
                    <ListProductsItem 
                        key={prod._id}
                        id={prod._id}
                        description={prod.description}
                        price={prod.price}
                        image={prod.image}
                        name={prod.name}
                        category={prod.category}
                        subcategory={prod.subcategory}
                        stock={prod.stock}
                    />   
                )
            })
        }
    </div>
  )
}

export default ListProducts;