import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import swal from "sweetalert";
import validator from "validator";

const Order = ({ closeModal, order }) => {

  const { cartItems, clearCart, printOrder } = useContext(CartContext);
  const [removeBtn, setRemoveBtn] = useState(true);
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [address, setAddress] = useState("");

  const validEmail = (e) => {
    let email = e.target.value

    if (validator.isEmail(email)) {
      setEmail(email)
      setEmailError(true);
    } else {
      setEmail("");
      setEmailError(false);
    }
  }

  const checkout = (order) => {
    if (customer != "" && phone != "" && email != "" && address != "") {

      const buyer = {
        buyerName: customer,
        phone: phone,
        email: email,
        address: address,
      }

      if (cartItems() >= 1) {
        order(buyer);
        swal({
          title: "¡Gracias por tu compra!",
          text: "Tu orden llegará te pronto",
          icon: "success",
          button: "¡Aceptar!",
        });
        setRemoveBtn(false);
        closeModal(false);
        clearCart();
      }
    }

  }
  return (
    <div className="modal--container">
      <form className="modal--container__form">
        <input onChange={(e) => setCustomer(e.target.value)} className="input" type="text" placeholder="Nombre Completo" />
        <input onChange={(e) => setPhone(e.target.value)} className="input" type="text" placeholder="Teléfono" />
        {emailError ? null : <p>Ingrese un email válido</p>}
        <input onChange={(e) => validEmail(e)} className="input" type="text" placeholder="Email" />
        <input onChange={(e) => setAddress(e.target.value)} className="input" type="text" placeholder="Dirección" />
      </form>
      {removeBtn ? (
        <div className="modal--container__buttons">
          <button className="btn end" onClick={() => checkout(order)}>Finalizar compra</button>
          <button className="btn continue" onClick={() => closeModal(false)}>Seguir comprando</button>
        </div>
      ) : null
      }
    </div>
  )
}

export default Order;