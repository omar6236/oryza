'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { H2, P } from '@/components/ui/Typography';

const FeaturedCollection = () => {
  const items = [
    {
      id: 1,
      name: 'Essential Tee',
      price: '$69',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      category: 'Essentials',
    },
    {
      id: 2,
      name: 'Organic Hoodie',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1556821552-9f91a09a020d?w=400&h=500&fit=crop',
      category: 'Outerwear',
    },
    {
      id: 3,
      name: 'Hemp Shorts',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1535687411291-75334bfb21c3?w=400&h=500&fit=crop',
      category: 'Essentials',
    },
    {
      id: 4,
      name: 'Linen Jacket',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1539533057440-7bf6b1e91125?w=400&h=500&fit=crop',
      category: 'Outerwear',
    },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center mb-12">
          <H2 className="mb-4">Featured Collection</H2>
          <P>Carefully curated pieces for the modern wardrobe.</P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/product/${item.id}`}>
                <Card hover>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-stone font-semibold mb-2">{item.category}</p>
                    <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                    <p className="text-lg font-semibold text-accent">{item.price}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedCollection;
