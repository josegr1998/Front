import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactElement, JSX } from 'react';
import { createElement, cloneElement, isValidElement } from 'react';
import { cn } from '@/ui/utils/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      tag: 'bg-[var(--primary)]/10 text-[var(--primary)] inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      'ag-regular': 'text-[var(--muted-foreground)] text-sm leading-relaxed',
      'ag-small': 'text-sm text-[var(--muted-foreground)]',
      'ag-medium':
        'text-base font-medium leading-4 text-[var(--color-muted-foreground)]',
      'ag-bold':
        'font-bold text-base leading-4 text-[var(--color-muted-foreground)] tracking-normal',
      'lg-regular': 'text-lg text-[var(--muted-foreground)] max-w-3xl',
      'lg-bold': 'text-lg font-semibold text-[var(--foreground)]',
      'xl-regular':
        'text-[var(--color-foreground)] font-normal text-2xl leading-7 tracking-wide',
      'xl-bold':
        'text-[var(--color-foreground)] font-bold text-xl leading-6 tracking-wide',
      'area-normal':
        'text-[var(--color-primary)] font-bold text-2xl leading-6 tracking-wide',
      '2xl-bold':
        'text-[var(--color-foreground)] font-bold text-2xl leading-7 lg:text-4xl lg:leading-10 tracking-wide',
      '2xl-semi-bold': 'text-2xl font-semibold text-[var(--foreground)]',
      '3xl-bold':
        'text-[var(--color-foreground)] font-bold text-4xl leading-10 tracking-wide',
      '4xl-bold':
        'text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl',
    },
  },
  defaultVariants: {
    variant: 'ag-regular',
  },
});

export type Props = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: keyof JSX.IntrinsicElements;
    asChild?: boolean;
  };

export const Typography = ({
  as: Tag = 'p',
  className,
  variant,
  asChild = false,
  children,
  ...props
}: Props) => {
  const classes = cn(typographyVariants({ variant }), className);

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ className?: string }>, {
      className: cn(
        classes,
        (children as ReactElement<{ className?: string }>).props?.className
      ),
      ...props,
    });
  }

  return createElement(
    Tag,
    {
      className: classes,
      ...props,
    },
    children
  );
};
