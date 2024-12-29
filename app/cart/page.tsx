'use client';

import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, action: string) => {
    const product = cart.find(item => item.id === id);
    if (!product) return;

    const newQuantity = action === 'increase' ? product.quantity + 1 : Math.max(product.quantity - 1, 1);
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="container">
      <h1 className="title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="image" />
              <div>
                <h3 className="name">{item.title}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
                <div className="quantity">
                  <button onClick={() => handleQuantityChange(item.id, 'decrease')} className="button">-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 'increase')} className="button">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="total">Total: ${total.toFixed(2)}</p>
    </div>
  );
}
