import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product"); // to expand the cart with product details... setCart(response.data));
    setCart(response.data);
  };

  const addToCart = async (product, quantity) => {
    await axios.post("/api/cart-items", {
      productId: product.id,
      // quantity: quantity,
      quantity, //does same thing as above
    });
    await loadCart();
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <HomePage cart={cart} loadCart={loadCart} addToCart={addToCart} />
          }
        />
        <Route
          path="checkout"
          element={<CheckoutPage cart={cart} loadCart={loadCart} />}
        />
        <Route
          path="orders"
          element={<OrdersPage cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
