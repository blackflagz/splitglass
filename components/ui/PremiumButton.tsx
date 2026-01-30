
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PremiumButtonProps extends HTMLMotionProps<'a'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center select-none rounded-2xl disabled:cursor-not-allowed ease-in-out transition-all duration-200 focus-visible:ring-4 outline-hidden font-semibold whitespace-nowrap overflow-hidden group";
  
  const variants = {
    // Updated to Blue gradient
    primary: "text-white border-[2px] border-blue-500/20 backdrop-blur-[25px] bg-origin-border bg-[linear-gradient(104deg,rgba(41,121,255,0.2)_5%,rgba(59,130,246,0.4)_100%)] shadow-[0_0_20px_rgba(41,121,255,0.3)] hover:bg-[#2979FF] hover:text-white focus-visible:ring-blue-500/30",
    secondary: "bg-transparent border-transparent text-gray-400 hover:text-white focus-visible:ring-blue-500/20"
  };

  const sizes = {
    sm: "h-10 px-4 text-sm gap-1",
    md: "h-12 px-6 text-base gap-2",
    lg: "h-14 px-8 text-lg gap-2"
  };

  const Content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    // Filter out props that are not valid for anchor tags
    const { disabled, type, ...anchorProps } = props;
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...anchorProps}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...(props as any)}
    >
      {Content}
    </motion.button>
  );
};
