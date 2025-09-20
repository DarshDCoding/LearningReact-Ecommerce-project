import axios from "axios";
import dayjs from "dayjs";
import { useParams, Link } from "react-router";
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
      {order && (
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>

            {order.products.map((product) => {
              if (product.productId === productId) {
                const totalDeliveryTimeMs = product.estimatedDeliveryTimeMs - order.orderTimeMs
                const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
                // const timePassedMs = totalDeliveryTimeMs*0.7
                const progress = (timePassedMs/totalDeliveryTimeMs)*100 
                return (
                  <Fragment key={product.productId}>
                      <div className="delivery-date">
                        {progress >= 100 ? "Delivered on": "Arriving on" }{" "}
                        {dayjs(product.estimatedDeliveryTimeMs).format(
                          "dddd, MMMM d"
                        )}
                      </div>

                      <div className="product-info">{product.product.name}</div>

                      <div className="product-info">
                        Quantity: {product.quantity}
                      </div>

                      <img
                        className="product-image"
                        src={product.product.image}
                      />

                      <div className="progress-labels-container">
                        <div className={`progress-label ${progress<=49 && 'current-status'}`} >Preparing</div>
                        <div className={`progress-label ${(progress>=50 && progress < 100 ) && 'current-status' }`}>
                          Shipped
                        </div>
                        <div className={`progress-label ${progress>=100 && 'current-status'}`}>Delivered</div>
                      </div>

                      <div className="progress-bar-container">
                        <div className="progress-bar" style={{width:`max(3%, ${progress}%)`}}></div>
                      </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default TrackingPage;
