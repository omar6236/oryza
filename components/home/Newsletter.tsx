'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { H2, P } from '@/components/ui/Typography';

const Newsletter = () => {
  return (
    <Section className="bg-gradient-to-r from-accent to-sage">
      <Container>
        <motion.div
          className="text-center text-white max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <H2 className="mb-4 text-white">Stay Updated</H2>
          <P className="mb-8 text-white/80">
            Subscribe to our newsletter for new collections, exclusive offers, and inspiration.
          </P>

          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/50"
            />
            <Button variant="secondary" size="md">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Newsletter;
