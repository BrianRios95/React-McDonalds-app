import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import { getDoc, doc, getDocs, query, where, writeBatch, collection, documentId, addDoc } from 'firebase/firestore';
import { firestoreDB } from '../../services/firebase';
import Order from "../Order/Order";

const Cart = () => {

  const { cart, removeItem, totalCart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const createOrder = (buyer) => {
    const order = {
      items: cart,
      buyer: {
        buyerName: buyer.buyerName,
        phone: buyer.phone,
        email: buyer.email,
        address: buyer.address,
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
    <div className="cart--container">
      <div className="cart--container__items">
        <h3>Tu Carrito</h3>
        <ul>
          {cart.map(item => (
            <article className="cart--item" key={item.id}>
              <div className="cart--item__img">
                <img src={item.img} />
              </div>
              <h4>{item.name}</h4>
              <p>{item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </article>
          ))}
        </ul>
        <div className="actions">
          <button className="checkout" onClick={() => setOpenModal(true)}>Checkout</button>
          <p className="total">Total: {totalCart()}</p>
        </div>
        {openModal ? <Order closeModal={setOpenModal} order={createOrder} /> : null}
      </div>
    </div>
  );
};

export default Cart;
