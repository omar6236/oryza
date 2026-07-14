'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H1, H2, H3, P } from '@/components/ui/Typography';

const SustainabilityPage = () => {
  const initiatives = [
    {
      title: 'Organic Cotton',
      description: 'All cotton is certified organic, free from synthetic pesticides and fertilizers.',
      icon: '🌾',
    },
    {
      title: 'Natural Dyes',
      description: 'We use traditional natural dye processes that minimize environmental impact.',
      icon: '🎨',
    },
    {
      title: 'Minimal Packaging',
      description: 'Recyclable and compostable packaging materials only. No unnecessary plastic.',
      icon: '📦',
    },
    {
      title: 'Small Batch Production',
      description: 'Limited production runs reduce waste and ensure quality control.',
      icon: '🏭',
    },
    {
      title: 'Fair Labor',
      description: 'Fair wages, safe working conditions, and ethical manufacturing practices.',
      icon: '✋',
    },
    {
      title: 'Transparency',
      description: 'Full traceability from yarn to finished product. Know where your clothes come from.',
      icon: '🔍',
    },
  ];

  return (
    <>
      <Section className="bg-stone/5">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <H1 className="mb-6">Sustainability</H1>
            <P className="text-lg">
              At ORYZA, sustainability is not an afterthought—it's fundamental to who we are. Every
              decision we make is guided by our commitment to people and planet.
            </P>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2 className="text-center mb-12">Our Initiatives</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-5xl">{initiative.icon}</div>
                <H3 className="text-xl">{initiative.title}</H3>
                <P>{initiative.description}</P>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-stone/5">
        <Container>
          <div className="max-w-2xl mx-auto">
            <H2 className="mb-8 text-center">Our Commitment</H2>
            <div className="space-y-6">
              <P>
                We are committed to continuous improvement. Every quarter, we review our practices and
                seek new ways to reduce our environmental impact and support our communities.
              </P>
              <P>
                By choosing ORYZA, you're not just buying clothes—you're supporting a movement toward
                more ethical and sustainable fashion.
              </P>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SustainabilityPage;
