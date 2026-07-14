'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'w-full px-4 py-3 bg-background border border-stone/20 rounded-lg',
      'text-foreground placeholder-stone/50',
      'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
      'transition-all duration-300',
      className
    )}
    {...props}
  />
));

Input.displayName = 'Input';
export default Input;
