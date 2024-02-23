import * as React from 'react';

import { cn } from '../lib/utils';
import { ColorValues } from '../types/Colors';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

interface CardContainerProps extends CardProps {
  isFliped?: boolean;
  decoration?: 'none' | 'full' | 'top' | 'bottom' | 'left' | 'right' | null;
  decorationColor?: ColorValues | string;
  bgColor?: ColorValues | string;
}

const Card = React.forwardRef<HTMLDivElement, CardContainerProps>(
  (
    {
      className,
      rounded = 'none',
      decoration = null,
      decorationColor = 'black',
      bgColor = 'white',
      ...props
    },
    ref
  ) => {
    const decorationClasses = {
      none: 'border-none',
      full: 'border-4',
      top: 'border-t-4',
      bottom: 'border-b-4',
      left: 'border-l-4',
      right: 'border-r-4',
    };

    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'p-4',
          roundedClasses[rounded],
          decorationClasses && decorationClasses[decoration || 'none'],
          className
        )}
        style={{ borderColor: decorationColor, backgroundColor: bgColor }}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
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
