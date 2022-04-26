import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="icon">

      <Link to="/cart" className="cartWidget">
        <div className="cartIcon">
          <AiOutlineShoppingCart className="icon" />
        </div>
        <div className="quantity">
          {getQuantity()}
        </div>
      </Link>
    </div>
  )
}

export default CartWidget;