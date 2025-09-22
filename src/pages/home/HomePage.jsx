import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { ProductGrid } from "./ProductsGrid";
import Header from "../../components/Header";
import "./HomePage.css";

const HomePage = ({cart, loadCart, addToCart}) => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');


  useEffect(() => {
    async function fetchData (){
      const urlPath = search ? `/api/products?search=${search}`: `/api/products`;

      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    fetchData();
  },[search]);

  return (
    <>
      <title>E-commerce Project</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./src/assets/images/icons/home-favicon.png"
      />

      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} addToCart={addToCart} />
      </div>
    </>
  );
};
export default HomePage;
