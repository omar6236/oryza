'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { H1, P } from '@/components/ui/Typography';

const Hero = () => {
  return (
    <Section
      isHero
      className="relative min-h-screen bg-gradient-to-b from-stone to-background flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-background" />

      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <H1 className="text-5xl md:text-7xl mb-6 text-foreground">Designed to Last</H1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <P className="text-xl md:text-2xl mb-8 text-foreground/70">
            Premium streetwear crafted from organic materials.
          </P>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button variant="primary" size="lg" className="hover:scale-105 transition-transform">
            Shop Collection
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
