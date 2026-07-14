'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-lg border border-stone/20 overflow-hidden',
        hover && 'transition-shadow duration-300 hover:shadow-lg',
        className
      )}
      {...props}
    />
  )
);

Card.displayName = 'Card';
export default Card;
