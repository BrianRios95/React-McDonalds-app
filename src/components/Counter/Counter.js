import { useState } from 'react';

const Counter = () => {
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
    </div>
  );
};

export default Counter;
