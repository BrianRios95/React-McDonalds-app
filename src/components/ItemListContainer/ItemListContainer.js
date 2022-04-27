import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../products';
import { getDocs, collection, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import MenuCategory from '../MenuCategory/MenuCategory';
import { firestoreDB } from '../../services/firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    /* getProductsByCategory(category).then((products) => {
      setItems(products);
    }); */

    const collectionCategory = category
      ? query(collection(firestoreDB, "products"), where("category", "==", category))
      : collection(firestoreDB, "products");

    getDocs(collectionCategory).then(response => {
      const products = response.docs.map(item => {
        return { id: item.id, ...item.data() };
      })
      setItems(products);
    })

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
