'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  isHero?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, isHero = false, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'w-full py-16 md:py-24 lg:py-32',
        isHero && 'min-h-screen flex items-center justify-center',
        className
      )}
      {...props}
    />
  )
);

Section.displayName = 'Section';
export default Section;
