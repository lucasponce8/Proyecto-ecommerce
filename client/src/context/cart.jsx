import { useState, createContext } from 'react'

export const CartContext = createContext();

export function CartProvider({children}) {

  // crear el provider
  const [cart, setCart] = useState([]);

  // Para agregar un producto al carrito
  const addToCart = product => {
    
    product.quantity = 1;
    
    const existingProduct = cart.filter(item => item.id === product.id);


    // const checkCart = cart.filter(existingProduct)
    console.log(existingProduct)
    
    
    if(existingProduct) {
      setCart([...cart, product.quantity += 1]);
    } else if (!existingProduct) {
      setCart([...cart, { ...product.quantity = 1 }]);
    }
    

  };
  
  

  // para borrar producto del cart
  const clearCart = () => {
    setCart([]);
  }

  return(
  
      <CartContext.Provider 
        value = {{
          cart,
          addToCart,
          clearCart,
        } }
      >
        {children}
      </CartContext.Provider>

  )
}