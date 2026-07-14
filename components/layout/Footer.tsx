'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-20">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ORYZA</h3>
            <p className="text-background/70 mb-4">Organic by Nature, Street by Heart.</p>
            <p className="text-sm text-background/60">
              Luxury streetwear crafted from organic materials, sustainably manufactured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/shop" className="hover:text-background transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-background transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=new" className="hover:text-background transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=sale" className="hover:text-background transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-background transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-background transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-background/70 mb-4">Subscribe for updates and exclusive offers.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-background/10 border-background/20 text-background placeholder-background/50"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-background/60 mb-4 md:mb-0">
              © 2024 ORYZA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <Link href="/privacy" className="hover:text-background transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-background transition-colors">
                Terms
              </Link>
              <Link href="/returns" className="hover:text-background transition-colors">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
