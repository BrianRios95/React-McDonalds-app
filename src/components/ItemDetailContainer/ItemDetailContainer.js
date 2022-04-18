import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getProductById, getProductDetail } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemID } = useParams();

  useEffect(() => {
    getProductById(itemID).then(product => {
      setItemDetail(product);
    });
  }, [itemID]);

  console.log(itemDetail);

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
