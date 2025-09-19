import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router";
import { useParams } from "react-router";
import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import "./TrackingPage.css";

const TrackingPage = ({ cart }) => {
  const params = useParams();
  const { orderId, productId } = params;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const getDetailsByOrderId = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    getDetailsByOrderId();
  }, [orderId]);

  return (
    <>
      <title>Tracking</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./src/assets/images/icons/tracking-favicon.png"
      />
      <Header cart={cart} />
      {!order ? null : (
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>


            {order.products.map((product) => {
              return (
                <Fragment key={product.productId}>
                  {product.productId === productId && (
                    <>
                      <div className="delivery-date">
                        Arriving on {dayjs(product.estimatedDeliveryTimeMs).format("dddd, MMMM d")}
                      </div>

                      <div className="product-info">
                        {product.product.name}
                      </div>

                      <div className="product-info">Quantity: {product.quantity}</div>

                      <img
                        className="product-image"
                        src={product.product.image}
                      />
                    </>
                  )}
                </Fragment>
              );
            })}

            <div className="progress-labels-container">
              <div className="progress-label">Preparing</div>
              <div className="progress-label current-status">Shipped</div>
              <div className="progress-label">Delivered</div>
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TrackingPage;
