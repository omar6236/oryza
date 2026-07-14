'use client';

import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { H1, H2, P } from '@/components/ui/Typography';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = 0; // Calculate from items
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <Section>
        <Container>
          <div className="text-center py-20">
            <H1 className="mb-4">Your Cart is Empty</H1>
            <P className="mb-8">Start shopping to add items to your cart.</P>
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <H1 className="mb-12">Shopping Cart</H1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.productId}>
                  <div className="p-6 flex gap-4">
                    <div className="w-24 h-24 bg-stone/10 rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Product Name</h3>
                      <p className="text-sm text-stone mb-2">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 border border-stone/20 rounded">-</button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                          className="w-12 text-center border border-stone/20 rounded"
                        />
                        <button className="px-2 py-1 border border-stone/20 rounded">+</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold mb-4">$0.00</p>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <Card>
              <div className="p-6 space-y-4">
                <H2 className="text-lg">Order Summary</H2>
                <div className="space-y-3 border-t border-stone/20 pt-4">
                  <div className="flex justify-between">
                    <span className="text-stone">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone">Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                </div>
                <div className="border-t border-stone/20 pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Link href="/checkout" className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CartPage;
