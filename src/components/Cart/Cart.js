import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {

  const { cart, removeItem, totalCart } = useContext(CartContext);
  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <article key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </article>
        ))}
      </ul>
      <p>Total: {totalCart()}</p>
    </div>
  );
};

export default Cart;
