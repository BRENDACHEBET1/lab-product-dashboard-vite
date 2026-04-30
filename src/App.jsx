import React, { useState } from 'react';
import ProductList from './components/ProductList';


const App = () => {
  // TODO: Define initial product data
 const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      inStock: true
    },
    {
      id: 2,
      name: "Phone",
      price: 800,
      inStock: false
    },
    {
      id: 3,
      name: "Mouse",
      price: 40,
      inStock: false
    },
    {
      id:4,
      name: "Tablet",
      price: 600,
      inStock: true
    }
  ]);
  // TODO: Implement state to manage filtering
    const [filter, setFilter] = useState("all");
    // Remove product
    const removeProduct = (id) => {
    setProducts((prevProducts) =>prevProducts.filter((product) => product.id !== id)
    );
  };

  // TODO: Implement logic to filter products based on availability
    const filteredProducts = products.filter((product) => {
    if (filter === "inStock") return product.inStock;
    if (filter === "outOfStock") return !product.inStock;
    return true; // "all"
  });
  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* Filter buttons */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("inStock")}>In Stock</button>
        <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>
      </div>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} removeProduct={removeProduct}/>
    </div>
  );
};

export default App;
