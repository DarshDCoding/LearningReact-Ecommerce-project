import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

// import { products } from "../../starting-code/ecommerce-project/data/products";
import "./HomePage.css";
import { ProductGrid } from "./ProductsGrid";

const HomePage = ({cart, loadCart}) => {
    const [products, setProducts] = useState([]);
  
    // using treditional fetch

  //   fetch('http://localhost:3000/api/products/')
  //   .then((response)=>{
  //   return response.json();
  // }).then((data)=>{
  //   setProducts(data)
  //   })


    //using axios only
  
  //   useEffect(() => {
  //   // axios.get("http://localhost:3000/api/products")
  //   axios
  //     .get("/api/products") //after setting server proxy in vite config...no need to add
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);


    //using async await

  useEffect(() => {
    async function fetchData (){
      const response = await axios.get("/api/products")
      setProducts(response.data);
    };

    fetchData();
  },[]);

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
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};

export default HomePage;
