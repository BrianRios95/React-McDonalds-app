import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useContext } from 'react';
import CartContext from "../../Context/CartContext";

const Navbar = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <header className="navbar-container">
      <nav className="navbar-container__navMenu">
        <div className="navImg">
          <Link to="/"><img src="../../img/mcDonalds-logo.png" alt="McDonalds logo" /></Link>
        </div>
        <ul className="navList">
          <NavLink className={({ isActive }) => isActive ? "navAnchor active" : "navAnchor"} to="/">
            Inicio
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "navAnchor active" : "navAnchor"} to="/products">
            Productos
          </NavLink>
          {getQuantity() === 0 ? null : <CartWidget />}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
