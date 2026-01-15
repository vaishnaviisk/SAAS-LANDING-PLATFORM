'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { TextareaHTMLAttributes, CSSProperties, forwardRef } from 'react';

const textAreaClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical min-h-[100px]',
  {
    variants: {
      variant: {
        default: 'bg-bg-input-background text-text-input-text border border-border-primary',
        outline: 'bg-transparent text-text-primary border-2 border-border-primary',
        filled: 'bg-bg-secondary-background text-text-primary border-0',
      },
      size: {
        small: 'text-xs px-3 py-2',
        medium: 'text-xs px-4 py-3',
        large: 'text-sm px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, VariantProps<typeof textAreaClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  position?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  // Required parameters with defaults
  placeholder = "Name",
  text_font_size = "text-xs",
  text_font_family = "Poppins",
  text_font_weight = "font-normal",
  text_line_height = "leading-tight",
  text_text_align = "left",
  text_color = "text-text-muted",
  fill_background_color = "bg-input-background",
  border_border_radius = "rounded-xs",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  rows = 4,
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    fill_background_color,
    border_border_radius,
  ].filter(Boolean).join(' ')

  return (
    <textarea
      ref={ref}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      style={customStyles}
      className={twMerge(
        textAreaClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
})

TextArea.displayName = 'TextArea'

export default TextArea

// 'use client';

// import { cva, type VariantProps } from 'class-variance-authority';
// import { twMerge } from 'tailwind-merge';
// import { TextareaHTMLAttributes, forwardRef } from 'react';

// const textAreaClasses = cva(
//   'w-full resize-y transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed',
//   {
//     variants: {
//       variant: {
//         default: 'bg-[#17171b] text-white border border-[#2a2a2f]',
//         outline: 'bg-transparent text-white border-2 border-[#2a2a2f]',
//         filled: 'bg-[#222228] text-white border-0',
//       },
//       size: {
//         small: 'text-xs px-3 py-2',
//         medium: 'text-sm px-4 py-3',
//         large: 'text-base px-6 py-4',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'medium',
//     },
//   }
// );

// interface TextAreaProps
//   extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
//     VariantProps<typeof textAreaClasses> {}

// const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
//   (
//     {
//       variant,
//       size,
//       rows = 4,
//       className,
//       disabled,
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <textarea
//         ref={ref}
//         rows={rows}
//         disabled={disabled}
//         className={twMerge(
//           textAreaClasses({ variant, size }),
//           'rounded-[8px] placeholder:text-[#9e9e9e]',
//           className
//         )}
//         {...props}
//       />
//     );
//   }
// );

// TextArea.displayName = 'TextArea';

// export default TextArea;
