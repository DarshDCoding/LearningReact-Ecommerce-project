import { OrderDetails } from "./OrderDetails";
import { OrderHeader } from "./OrderHeader";

export function OrdersGrid({ orders, addToCart }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetails order={order} addToCart={addToCart} />
          </div>
        );
      })}
    </div>
  );
}