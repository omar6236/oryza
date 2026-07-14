'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H2, H3, P } from '@/components/ui/Typography';

const BrandPhilosophy = () => {
  const values = [
    {
      id: 1,
      title: 'Organic Materials',
      description: 'We use only certified organic cotton and sustainable fabrics.',
      icon: '🌱',
    },
    {
      id: 2,
      title: 'Timeless Design',
      description: 'Every piece is designed to transcend trends and seasons.',
      icon: '⏳',
    },
    {
      id: 3,
      title: 'Ethical Manufacturing',
      description: 'Produced in small batches with fair labor practices.',
      icon: '✋',
    },
    {
      id: 4,
      title: 'Quality First',
      description: 'Rigorous quality control ensures each item is perfect.',
      icon: '✨',
    },
  ];

  return (
    <Section className="bg-stone/5">
      <Container>
        <div className="text-center mb-16">
          <H2 className="mb-4">Our Philosophy</H2>
          <P className="max-w-2xl mx-auto">
            We believe in creating luxury streetwear that respects both people and planet.
          </P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <H3 className="text-lg mb-3">{value.title}</H3>
              <P className="text-sm">{value.description}</P>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BrandPhilosophy;
