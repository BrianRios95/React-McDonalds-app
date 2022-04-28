import { Link } from 'react-router-dom';

const MenuCategory = () => {
  const categories = ['Hot', 'Hamburguesas', 'Complementos', 'Bebidas', 'Helados'];
  return (
    <div className="menuCategory">
      {categories.map((category, index) => (
        <div className='menuCategory__category--container' >
          <div className='categoryIcon--container'>
            <img className='categoryIcon--container__icon' src='../../img/icons/burger-icon.png' alt='category icon' />
          </div>
          <Link className='anchor' key={index} to={`/category/${category}`}>
            {category}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;
