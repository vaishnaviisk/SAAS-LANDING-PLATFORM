'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef } from 'react';

/* =========================
   Variants
========================= */
const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder:text-[#9e9e9e]',
  {
    variants: {
      variant: {
        default: 'bg-[#17171b] border border-[#2a2a2f]',
        outline: 'bg-transparent border-2 border-[#2a2a2f]',
        filled: 'bg-[#222228] border-0',
      },
      size: {
        sm: 'text-xs px-3 py-2 rounded-[6px]',
        md: 'text-sm px-4 py-3 rounded-[8px]',
        lg: 'text-base px-6 py-4 rounded-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/* =========================
   Props
========================= */
interface EditTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof editTextClasses> {}

/* =========================
   Component
========================= */
const EditText = forwardRef<HTMLInputElement, EditTextProps>(
  ({ className, variant, size, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={twMerge(editTextClasses({ variant, size }), className)}
        {...props}
      />
    );
  }
);

EditText.displayName = 'EditText';

export default EditText;
