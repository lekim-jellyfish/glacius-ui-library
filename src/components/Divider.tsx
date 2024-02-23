import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '../lib/utils';
import { ColorValues } from '../types/Colors';

interface DividerProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  color?: ColorValues | string;
  opacity?: 100 | 75 | 50 | 25;
}

const Divider: React.FC<DividerProps> = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  DividerProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      color,
      opacity = 100,
      ...props
    },
    ref
  ) => {
    const opacityClasses = {
      100: 'opacity-100',
      75: 'opacity-75',
      50: 'opacity-50',
      25: 'opacity-25',
    };
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'shrink-0 bg-border my-1',
          opacityClasses[opacity],
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className
        )}
        style={{
          borderColor: color,
        }}
        {...props}
      />
    );
  }
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

export { Divider };
