import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { getDoc, doc, getDocs, query, where, writeBatch, collection, documentId, addDoc } from 'firebase/firestore';
import { firestoreDB } from '../../services/firebase';

const Cart = () => {

  const { cart, removeItem, totalCart } = useContext(CartContext);

  const createOrder = () => {
    const order = {
      items: cart,
      buyer: {
        nameBuyer: "Brian",
        phone: "2612511340",
        email: "riosbrian.ar@gmail.com",
      },
      total: totalCart(),
      date: new Date(),
    }

    const Ids = cart.map(item => item.id);

    const batch = writeBatch(firestoreDB);
    const collectionRef = collection(firestoreDB, "products");
    const outStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", Ids)))
      .then(response => {
        response.docs.forEach(doc => {
          const dataDoc = doc.data();
          const productQuantity = cart.find(item => item.id === doc.id)?.quantity;

          if (dataDoc.stock >= productQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - productQuantity })
          } else {
            outStock.push({ id: doc.id, ...dataDoc });
          }

        });
      }).then(() => {
        if (outStock.length === 0) {
          const collectionRef = collection(firestoreDB, "orders");
          return addDoc(collectionRef, order);
        } else {
          return Promise.reject({ name: "outOfStockError", products: "outOfStock" });
        }
      }).then(({ id }) => {
        batch.commit();
        console.log(`el id de la orden es: ${id}`);
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <article key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
            <button onClick={() => createOrder()}>Crear Orden</button>
          </article>
        ))}
      </ul>
      <p>Total: {totalCart()}</p>
    </div>
  );
};

export default Cart;
