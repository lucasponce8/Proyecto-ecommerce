import { useState, createContext } from 'react'

export const CartContext = createContext();

export function CartProvider({children}) {

  // crear el provider
  const [cart, setCart] = useState([]);

  // Para agregar un producto al carrito
  const addToCart = product => {
    setCart([...cart, product])
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