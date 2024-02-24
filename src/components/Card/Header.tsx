import { CardProps } from '@/interfaces/CardProps';
import React from 'react';
import { cn } from '@/lib/utils';
import { applyAling, applyJustify, applyPadding } from './types';

interface CardHeaderProps extends CardProps {
  flexDirection?: 'row' | 'column';
  gap?: number;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      className,
      justifyContent = 'center',
      alignItems = 'center',
      padding = 'md',
      flexDirection = 'row',
      gap = 5,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-1.5',
          flexDirection === 'column' ? 'flex-col' : 'flex-row',
          applyPadding(padding),
          applyJustify(justifyContent),
          applyAling(alignItems),
          className
        )}
        style={{ gap: gap + 'px' }}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

export default CardHeader;
