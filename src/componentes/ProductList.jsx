// ProductList.jsx - Componente para mostrar el listado de productos

import React from 'react';
import './ProductList.css'; // Estilos para el componente

const getCategories = (products) => {
  const cats = new Set();
  products.forEach(p => {
    if (p.category) {
      p.category.split(',').forEach(cat => cats.add(cat.trim()));
    }
  });
  return Array.from(cats);
};

const ProductList = ({ products, cart, onAddToCart, selectedCategory, setSelectedCategory }) => {
  const categories = ['Todas', ...getCategories(products)];
  const filteredProducts = selectedCategory === 'Todas'
    ? products
    : products.filter(p => p.category && p.category.includes(selectedCategory));

  return (
    <div className="product-list">
      <h2>Tienda de Videojuegos PlayStation</h2>
      <div className="category-filter">
        <span>Filtrar por categoría:</span>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
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
              className={`add-to-cart-btn ${cart.some(item => item.id === product.id) ? 'in-cart' : ''}`}
              onClick={() => onAddToCart(product)}
              disabled={cart.some(item => item.id === product.id)}
            >
              {cart.some(item => item.id === product.id) ? 'En el Carrito' : 'Agregar al Carrito'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;