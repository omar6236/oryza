'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {}

export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('text-4xl md:text-6xl font-bold tracking-tight leading-tight', className)}
      {...props}
    />
  )
);
H1.displayName = 'H1';

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-3xl md:text-5xl font-bold tracking-tight leading-tight', className)}
      {...props}
    />
  )
);
H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl md:text-3xl font-semibold tracking-tight', className)}
      {...props}
    />
  )
);
H3.displayName = 'H3';

export const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-base md:text-lg leading-relaxed text-foreground/80', className)}
      {...props}
    />
  )
);
P.displayName = 'P';
