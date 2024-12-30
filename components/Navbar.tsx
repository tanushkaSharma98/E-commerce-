'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/cart', label: 'Cart' },
  ];

  const [searchValue, setSearchValue] = useState('');

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="navbar-link">
            {label}
          </Link>
        ))}
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </nav>
  );
}