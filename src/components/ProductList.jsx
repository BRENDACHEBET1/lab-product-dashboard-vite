
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  
 
  return (
    <>
      {/* Conditional rendering: no in-stock products */}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} removeProduct={removeProduct}/>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
