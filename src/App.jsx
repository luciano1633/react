import { useState } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import { products } from './products'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  // Función para agregar producto al carrito
  // Si el producto ya existe, incrementa la cantidad; si no, lo agrega con cantidad 1
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // Función para remover producto del carrito
  // Reduce la cantidad en 1; si llega a 0, lo elimina completamente
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 })
          }
        } else {
          acc.push(item)
        }
        return acc
      }, [])
    )
  }

  // Calcular total de productos y precio total del carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.offerPrice || item.normalPrice) * item.quantity, 0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tienda de Videojuegos PlayStation</h1>
        <div className="cart-summary">
          <span>Carrito: {totalItems} productos - Total: ${totalPrice.toLocaleString()}</span>
        </div>
      </header>
      <main>
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          totalItems={totalItems}
          totalPrice={totalPrice}
        />
      </main>
    </div>
  )
}

export default App
