import dayjs from "dayjs";
import { Link } from "react-router";
import { Fragment, useState } from "react";

export function OrderDetails({ order, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {

        const addToCartFunc = () => {
          setQuantity(1)
          addToCart(orderProduct.product, quantity);
        };

        return (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>
            <div className="product-details">
              <div className="product-name">{orderProduct.product.name}</div>
              <div className="product-delivery-date">
                Arriving on:{" "}
                {dayjs(orderProduct.product.estimatedDeliveryTimeMs).format(
                  "MMMM D"
                )}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary" onClick={addToCartFunc}>
                <img
                  className="buy-again-icon"
                  src="./src/assets/images/icons/buy-again.png"
                />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
