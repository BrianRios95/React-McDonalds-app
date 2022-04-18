import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
          <NavLink to="/checkout" className="navAnchor">
            Carrito
          </NavLink>
          {/* insertar componente carrito */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
