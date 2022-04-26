import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getQuantity = () => {
    let count = 0;

    cart.forEach((item) => {
      count += item.quantity;
    });

    return count;
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const products = cart.filter((item) => item.id !== id);
    setCart(products);
  };

  const totalCart = () => {
    let total = 0;
    const prices = cart.forEach(item => {
      total = total + (item.price * item.quantity);
    })
    console.log(total);
    return total;
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getQuantity, isInCart, clearCart, removeItem, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
