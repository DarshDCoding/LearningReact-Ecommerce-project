import HomePage from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage/>} />
        <Route path="orders" element={<div>Orders page...</div>} />
        <Route path="tracking" element={<div>Tracking page...</div>} />
      </Routes>
    </>
  );
}

export default App;
