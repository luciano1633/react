// Cart.jsx - Componente para mostrar y gestionar el carrito de compras

import React from 'react';
import './Cart.css'; // Estilos para el componente

const Cart = ({ cart, onRemoveFromCart, totalItems, totalPrice }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío. ¡Agrega algunos juegos!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio unitario: ${(item.offerPrice || item.normalPrice).toLocaleString()}</p>
                  <p>Subtotal: ${((item.offerPrice || item.normalPrice) * item.quantity).toLocaleString()}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total productos: {totalItems}</p>
            <p>Total precio: ${totalPrice.toLocaleString()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;