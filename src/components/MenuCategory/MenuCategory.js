import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuCategory = () => {
  const [active, setActive] = useState(false);
  const categories = ['Hot', 'Hamburguesas', 'Complementos', 'Bebidas', 'Helados'];
  return (
    <div className="menuCategory">
      {categories.map((category, index) => (
        <NavLink className={({ isActive }) => isActive
          ? "menuCategory__categoryAnchor active"
          : "menuCategory__categoryAnchor"}
          to={`/category/${category}`}>
          <div className='categoryIcon--container'>
            <img className='categoryIcon--container__icon' src='../../img/icons/burger-icon.png' alt='category icon' />
          </div>
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuCategory;
