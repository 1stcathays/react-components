import type { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type TypographyVariant = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TypographyProps = {
  component?: TypographyVariant;
  variant?: TypographyVariant;
  className?: string;
  children?: ReactNode;
};

const variantClasses: Record<TypographyVariant, HTMLAttributes<HTMLElement>['className']> = {
  span: 'text-base',
  p: 'text-base',
  h1: 'text-8xl font-light',
  h2: 'text-6xl font-light',
  h3: 'text-5xl font-normal',
  h4: 'text-4xl font-normal',
  h5: 'text-2xl font-normal',
  h6: 'text-1xl font-medium',
};

export function Typography({ component: Tag = 'p', variant = 'p', className, children }: TypographyProps) {
  return <Tag className={cn(variantClasses[variant], className)}>{children}</Tag>;
}
