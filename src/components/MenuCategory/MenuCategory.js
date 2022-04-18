import { NavLink } from 'react-router-dom';

const MenuCategory = () => {
  const categories = ['Hot', 'Hamburguesas', 'Papas', 'Bebidas', 'Helados'];
  return (
    <div className="menuCategory">
      {categories.map(category => (
        <NavLink to={`/category/${category}`}>{category}</NavLink>
      ))}
    </div>
  );
};

export default MenuCategory;
