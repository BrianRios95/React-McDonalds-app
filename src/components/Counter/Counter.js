import { useState } from 'react';

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
      <div className='counter__amount'>
        <button onClick={decreaseAmount}>-</button>
        <div className='amount--container'>
          <h4>{amount}</h4>
        </div>
        <button onClick={increaseAmount}>+</button>
      </div>
      <div className='counter__addToCart'>
        <button onClick={() => onConfirm(amount)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;
