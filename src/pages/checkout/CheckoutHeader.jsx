import { Link } from 'react-router';
import { totalQuantity } from '../../utils/totalQunatity';
import CheckoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png'
import GreenLogo from '../../assets/images/logo.png';
import './CheckoutHeader.css';

const CheckoutHeader = ({cart}) => {
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={GreenLogo} />
              <img
                className="mobile-logo"
                src="./src/assets/images/mobile-logo.png"
              />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {totalQuantity(cart)} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={CheckoutLockIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutHeader;