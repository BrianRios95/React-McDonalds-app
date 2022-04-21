import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Counter from '../Counter/Counter';
import CartContext from '../../Context/CartContext';

const ItemDetail = ({ id, name, price, category, img, description }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const onAdd = (amount) => {
    const itemCart = {
      id,
      name,
      price,
      quantity: amount,
    };

    addToCart(itemCart);
  };

  return (
    <div className="itemDetail">
      <div className="imgDetailContainer">
        <img src={img} width={150} alt="item img" />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        {isInCart(id) ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <Counter onConfirm={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
