import { useState } from 'react';

const Favorites = (favorites) => {
  const [fav, setFav] = useState([]);
  console.log(fav);

  return (
    <div className='home--container'>
      <div className='home--container__content'>
        <h1>Compra de la manera más fácil</h1>
        <p>Con la nueva app de Mc Donalds, pedí lo que más te gusta en 3 simples pasos.</p>
        <div className='imgContainer'>
          <img src='../../img/notebook.png' />
        </div>
      </div>
    </div>
  )
}

export default Favorites;