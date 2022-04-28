import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      : query(collection(firestoreDB, "products"), where("category", "==", "Hot"));

    getDocs(collectionCategory).then(response => {
      const products = response.docs.map(item => {
        return { id: item.id, ...item.data() };
      })
      setItems(products);
    })

  }, [category]);

  return (
    <div className='itemListContainer'>
      <MenuCategory />
      <div className="ItemListContainer__list">
        <ItemList products={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
