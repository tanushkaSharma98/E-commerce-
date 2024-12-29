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
  showDescription?: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [popup, setPopup] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      const productsWithQuantity = data.map((product: any) => ({
        ...product,
        quantity: 1,
        showDescription: false,
      }));
      setProducts(productsWithQuantity);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product); // This now handles the redirection if the item is already in the cart
    setPopup(true);
    setTimeout(() => setPopup(false), 2000);
  };

  const handleDescriptionToggle = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].showDescription = !updatedProducts[index].showDescription;
    setProducts(updatedProducts);
  };

  return (
    <div>
      {popup && <div className="popup">Item added to cart!</div>}

      <div className="grid-container">
        {products.map((product, index) => (
          <div key={product.id} className="grid-item">
            <img src={product.image} alt={product.title} className="image" />
            <div className="product-details">
              <h3 className="name">{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className={`description ${product.showDescription ? 'show' : ''}`}>
                {product.description}
              </p>
              {product.description.length > 100 && (
                <span
                  className="see-more"
                  onClick={() => handleDescriptionToggle(index)}
                >
                  {product.showDescription ? 'See less' : 'See more'}
                </span>
              )}
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
