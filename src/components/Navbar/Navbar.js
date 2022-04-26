import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useContext } from 'react';
import CartContext from "../../Context/CartContext";

const Navbar = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <header className="navbar-container">
      <nav className="navbar-container__navMenu">
        <div className="navImg">
          <img src="../../img/mcDonalds-logo.png" alt="McDonalds logo" />
        </div>
        <ul className="navList">
          <NavLink className="navAnchor" to="/">
            Inicio
          </NavLink>
          <NavLink to="/cart" className="navAnchor">
            Carrito
          </NavLink>
          {getQuantity() === 0 ? null : <CartWidget />}

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
