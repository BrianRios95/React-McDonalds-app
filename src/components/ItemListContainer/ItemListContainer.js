import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../products';
import ItemList from '../ItemList/ItemList';
import MenuCategory from '../MenuCategory/MenuCategory';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProductsByCategory(category).then((products) => {
      setItems(products);
    });
  }, [category]);

  return (
    <div>
      <h2>Item List Container</h2>
      <MenuCategory />
      <div className="itemListContainer">
        <ItemList products={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
