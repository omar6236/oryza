'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/store/cart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getTotal());

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Lookbook', href: '/lookbook' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-stone/10">
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-2xl font-bold text-accent">
          ORYZA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-stone/10 rounded-lg transition-colors">
            <Search size={20} className="text-foreground" />
          </button>
          <button className="p-2 hover:bg-stone/10 rounded-lg transition-colors">
            <Heart size={20} className="text-foreground" />
          </button>
          <Link
            href="/cart"
            className="relative p-2 hover:bg-stone/10 rounded-lg transition-colors"
          >
            <ShoppingBag size={20} className="text-foreground" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-stone/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-stone/10 bg-background">
          <Container className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
