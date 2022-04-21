import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemID } = useParams();

  useEffect(() => {
    getProductById(itemID).then((product) => {
      setItemDetail(product);
    });
  }, [itemID]);

  return (
    <div>
      <h2>ItemDetailContainer</h2>
      <div>
        <ItemDetail {...itemDetail} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
