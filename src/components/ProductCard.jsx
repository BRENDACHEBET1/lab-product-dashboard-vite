import React from 'react';
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? "outOfStockClass" : ""}`}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
       <h3>{product.name}</h3>
      {/* TODO: Display product price */}
        <p>Price: ${product.price}</p>
      {/* TODO: Show if the product is in stock or out of stock */}
      

      {product.inStock ? (
        <p className={styles.inStock}>In Stock</p>
      ) : (
        <p className={styles.outStockText}>Out of Stock</p>
      )}
      <button onClick={() => removeProduct(product.id)}>Remove </button>
    </div>
  );
};

export default ProductCard;
