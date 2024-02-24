import { Align, Justify, Padding } from '@/components/Card/types';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // isExpanded?: boolean;
  justifyContent?: Justify;
  alignItems?: Align;
  padding?: Padding | number;
}
