import { CardProps } from '@/interfaces/CardProps';
import { ColorValues } from '@/types/Colors';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Decoration,
  Radius,
  applyDecoration,
  applyPadding,
  applyRadius,
} from './types';

interface CardContainerProps extends CardProps {
  // TODO: isFliped?: boolean;
  rounded?: Radius;
  decoration?: Decoration | null;
  fullWidth?: boolean;
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
      padding = 'sm',
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          fullWidth && 'w-full',
          applyPadding(padding),
          applyRadius(rounded),
          decoration && applyDecoration(decoration),
          className
        )}
        style={{
          borderColor: decorationColor,
          backgroundColor: bgColor,
          padding: padding + 'px',
        }}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export { Card };
