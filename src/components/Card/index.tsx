import { CardProps } from '@/interfaces/CardProps';
import { cn } from '@/lib/utils';
import { ColorValues } from '@/types/Colors';
import * as React from 'react';
import { Card } from './Container';
import CardHeader from './Header';

interface CardTitleProps extends CardProps {
  textSizes?: 'sm' | 'md' | 'lg' | 'xl';
  fontWeight?:
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
  color?: ColorValues | string;
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  (
    { className, textSizes = 'lg', fontWeight = 'semibold', color, ...props },
    ref
  ) => {
    const textSizesClasses = {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    };

    const fontWeightClasses = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    };

    return (
      <h3
        ref={ref}
        className={cn(
          'leading-none tracking-tight',
          textSizesClasses[textSizes],
          fontWeightClasses[fontWeight],
          className
        )}
        style={{ color: color }}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
