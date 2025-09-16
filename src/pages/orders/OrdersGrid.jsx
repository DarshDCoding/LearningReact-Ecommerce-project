import { OrderDetails } from "./OrderDetails";
import { OrderHeader } from "./OrderHeader";

export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetails order={order} />
          </div>
        );
      })}
    </div>
  );
}