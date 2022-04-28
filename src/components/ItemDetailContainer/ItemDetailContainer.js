import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { firestoreDB } from '../../services/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemID } = useParams();

  useEffect(() => {
    /* getProductById(itemID).then((product) => {
      setItemDetail(product);
    }); */
    getDoc(doc(firestoreDB, "products", itemID)).then(response => {
      console.log(response);
      const product = { id: response.id, ...response.data() }
      setItemDetail(product);
      console.log(product);

    })
  }, [itemID]);

  return (
    <div className='itemDetailContainer'>
      <div className='itemDetailContainer__item'>
        <ItemDetail {...itemDetail} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
