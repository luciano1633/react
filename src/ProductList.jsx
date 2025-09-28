// ProductList.jsx - Componente para mostrar el listado de productos

import React from 'react';
import './ProductList.css'; // Estilos para el componente

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Tienda de Videojuegos PlayStation</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-prices">
              <span className="normal-price">Precio: ${product.normalPrice.toLocaleString()}</span>
              {product.offerPrice && product.offerPrice < product.normalPrice && (
                <span className="offer-price">Oferta: ${product.offerPrice.toLocaleString()}</span>
              )}
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => onAddToCart(product)}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;