'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H1, H2, P } from '@/components/ui/Typography';

const AboutPage = () => {
  return (
    <>
      <Section className="bg-stone/5">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <H1 className="mb-6 text-center">About ORYZA</H1>
            <P className="text-center text-lg">
              Founded in Bangladesh, ORYZA represents a new philosophy of luxury streetwear—one that
              respects craftsmanship, sustainability, and timeless design.
            </P>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300352-7541bc2d40d1?w=600&h=400&fit=crop"
                alt="ORYZA Studio"
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <H2 className="mb-4">Our Story</H2>
              <P className="mb-4">
                ORYZA began with a simple question: Can luxury streetwear be both beautiful and
                sustainable?
              </P>
              <P>
                We started by connecting with artisans and manufacturers who shared our vision. Every
                piece is thoughtfully crafted using organic materials, ensuring that style never
                comes at the expense of ethics or the environment.
              </P>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-stone/5">
        <Container>
          <H2 className="text-center mb-12">Our Values</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Every item is rigorously inspected to ensure perfection.',
              },
              {
                title: 'Sustainability',
                description: 'We use only certified organic materials and ethical manufacturing.',
              },
              {
                title: 'Transparency',
                description: 'We believe you deserve to know where and how your clothes are made.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <H2 className="text-2xl mb-4">{value.title}</H2>
                <P>{value.description}</P>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
