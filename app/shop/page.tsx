'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H1 } from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CATEGORIES, MATERIALS, SIZES } from '@/lib/constants';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState('newest');
  const [gridColumns, setGridColumns] = useState(4);

  // Placeholder products
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: `product-${i}`,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 250) + 50,
    image: `https://images.unsplash.com/photo-${1520000000000 + i * 1000}?w=400&h=500&fit=crop`,
  }));

  return (
    <Section className="bg-background">
      <Container>
        <H1 className="mb-12 text-center">Shop</H1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              {/* Category */}
              <div>
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.id}
                        onChange={(e) => setSelectedCategory(e.target.checked ? cat.id : null)}
                        className="w-4 h-4 rounded accent"
                      />
                      <span className="text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-semibold mb-3">Material</h3>
                <div className="space-y-2">
                  {MATERIALS.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterial === mat}
                        onChange={(e) => setSelectedMaterial(e.target.checked ? mat : null)}
                        className="w-4 h-4 rounded accent"
                      />
                      <span className="text-sm">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-semibold mb-3">Price</h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-accent"
                />
                <p className="text-sm text-stone mt-2">$0 - ${priceRange[1]}</p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Sort & View */}
            <div className="flex justify-between items-center mb-8 pb-8 border-b border-stone/20">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-stone/20 rounded-lg bg-background text-foreground"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>

              <div className="flex gap-2">
                {[1, 2, 4].map((cols) => (
                  <button
                    key={cols}
                    onClick={() => setGridColumns(cols)}
                    className={`px-3 py-2 border rounded-lg transition-colors ${
                      gridColumns === cols
                        ? 'bg-accent text-white border-accent'
                        : 'border-stone/20 hover:border-accent'
                    }`}
                  >
                    {cols === 1 ? '1' : cols === 2 ? '2' : '4'}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid gap-6 ${
                gridColumns === 4
                  ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  : gridColumns === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1'
              }`}
            >
              {products.map((product) => (
                <Card key={product.id} hover>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&${product.id}`}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-lg font-semibold text-accent mb-4">${product.price}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ShopPage;
