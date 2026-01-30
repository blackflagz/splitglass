// Add missing React import to provide access to the React namespace
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

export interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export type ThemeColors = {
  bgPrimary: string;
  bgSecondary: string;
  accentPrimary: string;
  accentSecondary: string;
  textPrimary: string;
  textSecondary: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
        delay?: string | number;
        colors?: string;
        style?: React.CSSProperties;
      };
      [elemName: string]: any;
    }
  }
}
