import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext();

export function CartProvider({children}) {

  // crear el provider
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   setCart(storedCart);
  // }, []);


  // Para agregar un producto al carrito
  const addToCart = product => {
    console.log(product)
    // Verificar si el producto ya existe en el carrito
    const existingProduct = cart.find(item => item._id === product._id);

    if (existingProduct) {
      // Si el producto ya existe en el carrito, aumentar la cantidad en 1
      const updatedCart = cart.map(item => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      // Si el producto no existe en el carrito, agregarlo con la cantidad inicial de 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deleteProductCart = product => { 

    const existingProduct = cart.find(item => item._id === product._id);

    if (existingProduct) {
      if (existingProduct.quantity === 1) {
        // Si la cantidad es 1, eliminar el producto del carrito
        const updatedCart = cart.filter(item => item._id !== product._id);
        setCart(updatedCart);
      } else {
        // Si la cantidad es mayor que 1, reducir la cantidad en 1
        const updatedCart = cart.map(item => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCart(updatedCart);
      }
    }

  }
  
  // para borrar todos los productos del cart
  const clearCart = () => {
    setCart([]);
  }

  // funcion para calcular el total de cada item
  const calculateTotalItem = product => {
    return product.quantity * product.price;
  }

  // funcion para eliminar un producto del carrito
  const deleteProduct = product => {
    const filterProduct = cart.filter(item => item._id !== product._id);

    setCart(filterProduct);
  }


  return(
      <CartContext.Provider 
        value = {{
          cart,
          addToCart,
          clearCart,
          deleteProductCart,
          calculateTotalItem,
          deleteProduct
        } }
      >
        {children}
      </CartContext.Provider>

  )
}