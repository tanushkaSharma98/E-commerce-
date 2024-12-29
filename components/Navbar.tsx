'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
      <div className="text-2xl font-bold tracking-wide cursor-pointer">
        Shoppinn
      </div>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/search" className="hover:underline">
          Search
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
      </div>
    </nav>
  );
}
