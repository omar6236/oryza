'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { H1, H2, P } from '@/components/ui/Typography';
import Input from '@/components/ui/Input';
import { Search } from 'lucide-react';

const JournalPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      title: 'The Art of Organic Cotton',
      excerpt: 'Explore the journey from seed to fabric...',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Sustainability',
      date: '2024-01-15',
      readingTime: 5,
    },
    {
      id: 2,
      title: 'Craftsmanship at Its Finest',
      excerpt: 'Behind the scenes at our manufacturing facilities...',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
      category: 'Craftsmanship',
      date: '2024-01-10',
      readingTime: 7,
    },
    {
      id: 3,
      title: 'Timeless Style Guide',
      excerpt: 'How to build a wardrobe that lasts...',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
      category: 'Style',
      date: '2024-01-05',
      readingTime: 6,
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Section className="bg-stone/5">
        <Container>
          <H1 className="text-center mb-8">Journal</H1>
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-3 text-stone" size={20} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/journal/${post.id}`}>
                <Card hover className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative aspect-square md:aspect-auto h-64 md:h-auto">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:col-span-2 p-8">
                      <p className="text-xs text-stone font-semibold mb-2">{post.category}</p>
                      <H2 className="text-2xl mb-4">{post.title}</H2>
                      <P className="mb-4">{post.excerpt}</P>
                      <div className="flex items-center gap-4 text-sm text-stone">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default JournalPage;
