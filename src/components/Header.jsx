import { totalQuantity } from "../utils/totalQunatity";
import "./Header.css";
import { NavLink } from "react-router";
import WhiteLogo from "../assets/images/logo-white.png";
import SearchIcon from "../assets/images/icons/search-icon.png";
import CartIcon from "../assets/images/icons/cart-icon.png"

const Header = ({cart}) => {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={WhiteLogo} />
            <img
              className="mobile-logo"
              src="./src/assets/images/mobile-logo-white.png"
            />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img
              className="search-icon"
              src={SearchIcon}
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img
              className="cart-icon"
              src={CartIcon}
            />
            <div className="cart-quantity">{totalQuantity(cart)}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
