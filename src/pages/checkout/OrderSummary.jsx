import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "../../components/CartItemDetails";
import axios from "axios";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            });

          const deleteCartItem = async ()=>{
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          }

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
              </div>

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} deleteCartItem={deleteCartItem}/>
                <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
              </div>
            </div>
          );
        })}
    </div>
  );
}