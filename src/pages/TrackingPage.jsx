import { Link } from "react-router";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./TrackingPage.css";
import axios from "axios";

const TrackingPage = ({ cart }) => {
  const params = useParams();
  const {orderId, productId} = params;
  const [order, setOrder] = useState(null)

  useEffect(()=>{
    const getDetailsByOrderId = async () =>{
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data)
    };
    getDetailsByOrderId();
  }, [orderId])

  return (
    <>
      <title>Tracking</title>

      <link
        rel="icon"
        type="image/svg+xml"
        href="./src/assets/images/icons/tracking-favicon.png"
      />

      <Header cart={cart} />

      {!order? null:
            <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on Monday, June 13</div>

          <div className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-info">Quantity: 1</div>

          <img
            className="product-image"
            src="./src/assets/images/products/athletic-cotton-socks-6-pairs.jpg"
          />

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
       } {/*We may need to undo what we did.*/}
    </>
  );
};
export default TrackingPage;
