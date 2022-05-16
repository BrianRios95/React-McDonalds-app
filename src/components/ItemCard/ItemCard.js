import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ product }) => {

  return (
    <article className="itemCard">
      <button className='favorite'>
        <img className='heart-icon' src='../../img/icons/heart-icon.png' alt='heart-icon' />
      </button>
      <div className="itemCard__img">
        <img src={product.img} alt="product img" width={350} />
      </div>
      <div className="itemCard__text">
        <h4 className="item-name">{product.name}</h4>
        <p className="item-price">${product.price}</p>
        <Link className="btn" to={`/detail/${product.id}`}>
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;
