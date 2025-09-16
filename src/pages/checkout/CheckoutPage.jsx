import axios from "axios";
import { useEffect, useState } from "react";
import { OrderSummary } from "./OrderSummary";
import CheckoutHeader from "./CheckOutHeader";
import { PaymentSummary } from "./PaymentSummary";
import "./CheckoutPage.css";

const CheckoutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const getDeliveryData = async () =>{

      let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
        setDeliveryOptions(response.data);
  
      response = await axios.get("/api/payment-summary")
        setPaymentSummary(response.data);
    };
    console.log ("kuch to hua hai...kuch ho gaya hai....")
    getDeliveryData();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./src/assets/images/icons/checkout-favicon.png"
      />

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;