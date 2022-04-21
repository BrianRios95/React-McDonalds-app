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

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getQuantity, isInCart, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
