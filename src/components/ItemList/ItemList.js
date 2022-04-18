import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ products }) => {
  return (
    <div className="productsContainer">
      {products.map(item => (
        <ItemCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemList;
