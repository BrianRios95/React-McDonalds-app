import { useState } from 'react';
import { Link } from 'react-router-dom';

const Counter = ({ onConfirm }) => {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount != 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={increaseAmount}>+</button>
      <h4>{amount}</h4>
      <button onClick={decreaseAmount}>-</button>
      <button onClick={() => onConfirm(amount)}>Agregar al carrito</button>
    </div>
  );
};

const ItemDetail = ({ id, name, price, category, img, description }) => {
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (amount) => {
    console.log(amount);
    setCantidad(amount);
  };

  console.log(cantidad);

  return (
    <div className="itemDetail">
      <div className="imgDetailContainer">
        <img src={img} width={150} />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        {cantidad > 0 ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <Counter onConfirm={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
