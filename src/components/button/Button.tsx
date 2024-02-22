import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { sizeConfig } from './ButtonSizeConfig';
import { Size } from '../../types/Size';
import styles from './styles.module,css';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClick?: () => void;
  gradientColors?: GradientColor[];
  gradientDirection?: number;
  children?: React.ReactNode;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  textSize?: Size;
}

export interface GradientColor {
  hue?: number;
  saturation?: number;
  lightness?: number;
  opacity?: number;
  hex?: string;
  percentage: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      onClick,
      gradientColors = [],
      gradientDirection,
      variant,
      size,
      rightSection,
      leftSection,
      children,
      radius = 'md',
      textSize = 'md',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
      setIsClicked(true);
      onClick && onClick();
    };

    const handleAnimationEnd = () => {
      setIsClicked(false);
    };

    const gradientStyle =
      gradientColors.length > 0
        ? {
            backgroundImage: `linear-gradient(${gradientDirection}deg, ${gradientColors
              .map(
                ({ hue, saturation, lightness, opacity, hex, percentage }) =>
                  hex
                    ? `${hex} ${percentage}%`
                    : `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity}) ${percentage}%`
              )
              .join(', ')})`,
          }
        : {};

    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        style={{ ...gradientStyle, ...props.style }}
        className={cn(buttonVariants({ variant, size, className, radius }), {
          [styles.clicked]: isClicked,
        })}
        ref={ref}
        {...props}
      >
        {' '}
        {leftSection && leftSection}
        {children && (
          <span
            className={cn(
              sizeConfig.text[
                textSize === 'none' || textSize === 'full' ? 'md' : textSize
              ]
            )}
          >
            {children}
          </span>
        )}
        {rightSection && rightSection}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
