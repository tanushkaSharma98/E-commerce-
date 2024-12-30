import './globals.css';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <CartProvider>
          <Navbar />
          <HomePage/>
          {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
