import { useState, createContext } from 'react'

export const CartContext = createContext();

export function CartProvider({children}) {

  // crear el provider
  const [cart, setCart] = useState([]);

  // Para agregar un producto al carrito
  const addToCart = product => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        setCart([...cart, item]);
        return item;
      });
      // setCart(prevCart => [...prevCart, updatedCart]);
      setCart(updatedCart)
    } else {
      const newProduct = {
        ...product,
        quantity: 1
      };
      setCart(prevCart => [...prevCart, newProduct]);
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