'use client';

import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/cart', label: 'Cart' },
  ];

  return (
    <nav className="navbar">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="navbar-link">
          {label}
        </Link>
      ))}
    </nav>
  );
}
