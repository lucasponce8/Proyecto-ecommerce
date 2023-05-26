import { useState, createContext } from 'react'

export const CartContext = createContext();

export function CartProvider({children}) {

  // crear el provider
  const [cart, setCart] = useState([]);

  // Para agregar un producto al carrito
  const addToCart = product => {
    const productId = cart.findIndex(item => item.id === product.id);

    if (productId >= 0) {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity += 1
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: 1
        }
      ]));
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