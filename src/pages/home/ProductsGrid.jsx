import { Product } from './Product';

export function ProductGrid({products, addToCart}) {
  
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} addToCart={addToCart} />
        );
      })}
    </div>
  );
}