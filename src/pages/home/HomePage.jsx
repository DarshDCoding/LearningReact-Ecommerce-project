import Header from "../../components/Header";
// import { products } from "../../starting-code/ecommerce-project/data/products";
import "./HomePage.css";
import { ProductGrid } from "./ProductsGrid";

const HomePage = ({cart}) => {
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
        <ProductGrid />
      </div>
    </>
  );
};

export default HomePage;
