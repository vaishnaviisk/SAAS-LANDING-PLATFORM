'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

/* =========================
   Button Variants
========================= */
const buttonClasses = cva(
  'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95',
  {
    variants: {
      variant: {
        primary:
          'bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] text-white hover:opacity-90',
        dark:
          'bg-black text-white hover:bg-[#111111]',
        outline:
          'border border-[#2a2a2f] text-white hover:bg-[#17171b]',
      },
      size: {
        sm: 'text-xs px-4 py-2',
        md: 'text-sm px-6 py-2.5',
        lg: 'text-base px-8 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

/* =========================
   Props
========================= */
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  text?: string;
  children?: ReactNode;
}

/* =========================
   Component
========================= */
const Button = ({
  text,
  children,
  variant,
  size,
  className,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(buttonClasses({ variant, size }), className)}
      {...props}
    >
      {children ?? text}
    </button>
  );
};

export default Button;
