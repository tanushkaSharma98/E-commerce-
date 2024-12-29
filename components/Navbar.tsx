'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="text-2xl font-bold tracking-wide">Shoppinn</div>
      <div className="flex gap-4 ml-auto">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/cart" className="hover:underline">Cart</Link>
      </div>
    </nav>
  );
}
