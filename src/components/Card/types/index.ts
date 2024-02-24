export type Justify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type Radius = 'none' | 'full' | 'sm' | 'md' | 'lg' | 'xl';
export type Align = 'start' | 'center' | 'end';
export type Padding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type Decoration = 'none' | 'full' | 'top' | 'bottom' | 'left' | 'right';

const justifyConfig: Record<Justify, string> = {
  ['start']: 'justify-start',
  ['center']: 'justify-center',
  ['end']: 'justify-end',
  ['between']: 'justify-between',
  ['around']: 'justify-around',
  ['evenly']: 'justify-evenly',
};

const radiusConfig: Record<Radius, string> = {
  ['none']: 'rounded-none',
  ['full']: 'rounded-full',
  ['sm']: 'rounded-sm',
  ['md']: 'rounded-md',
  ['lg']: 'rounded-lg',
  ['xl']: 'rounded-xl',
};

const itemsConfig: Record<Align, string> = {
  ['start']: 'items-start',
  ['center']: 'items-center',
  ['end']: 'items-end',
};

const paddingConfig: Record<Padding, string> = {
  ['none']: 'p-0',
  ['sm']: 'p-2',
  ['md']: 'p-4',
  ['lg']: 'p-6',
  ['xl']: 'p-8',
};

const decorationConfig = {
  none: 'border-none',
  full: 'border-4',
  top: 'border-t-4',
  bottom: 'border-b-4',
  left: 'border-l-4',
  right: 'border-r-4',
};

export const applyJustify = (
  justify: Justify | undefined
): string | undefined => {
  return justify ? justifyConfig[justify] : undefined;
};

export const applyRadius = (radius: Radius | undefined): string | undefined => {
  return radius ? radiusConfig[radius] : undefined;
};

export const applyAling = (items: Align | undefined): string | undefined => {
  return items ? itemsConfig[items] : undefined;
};

export const applyPadding = (
  padding: Padding | number | undefined
): string | number | undefined => {
  if (typeof padding === 'number') {
    return padding + 'px';
  } else if (padding !== undefined) {
    return paddingConfig[padding];
  } else {
    return undefined;
  }
};

export const applyDecoration = (
  decoration: Decoration | undefined
): string | undefined => {
  return decoration ? decorationConfig[decoration] : undefined;
};
