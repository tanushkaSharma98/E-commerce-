'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [popup, setPopup] = useState(false); // State for popup
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      const productsWithQuantity = data.map((product: any) => ({
        ...product,
        quantity: 1, // Add default quantity
      }));
      setProducts(productsWithQuantity);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setPopup(true);
    setTimeout(() => setPopup(false), 2000); // Hide popup after 2 seconds
  };

  return (
    <div>
      {/* Popup Message */}
      {popup && (
        <div className="fixed top-4 right-4 bg-green-600 text-white py-2 px-4 rounded shadow-md">
          Item added to cart!
        </div>
      )}

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} className="card-img" />
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-price">${product.price}</p>
              <p className="card-description">{product.description}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
