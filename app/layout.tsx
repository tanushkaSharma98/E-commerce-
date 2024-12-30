import './globals.css';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
