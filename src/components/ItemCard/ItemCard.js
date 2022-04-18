import { NavLink } from 'react-router-dom';

const ItemCard = ({ product }) => {
  return (
    <article className="itemCard">
      <div className="itemCard__img">
        <img src={product.img} alt="product img" width={350} />
      </div>
      <div className="ItemCard__text">
        <h4 className="item-name">{product.name}</h4>
        <p className="item-price">{product.price}</p>
        <NavLink className="btn" to={`/detail/${product.id}`}>
          Ver más
        </NavLink>
      </div>
    </article>
  );
};

export default ItemCard;
