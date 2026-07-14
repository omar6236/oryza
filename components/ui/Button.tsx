'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300';

    const variants = {
      primary: 'bg-accent text-white hover:bg-opacity-90',
      secondary: 'bg-stone text-foreground hover:bg-opacity-90',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
      ghost: 'text-foreground hover:bg-background',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {isLoading ? <span className="animate-spin mr-2">⚡</span> : null}
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
