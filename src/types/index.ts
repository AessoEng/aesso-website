/**
 * Type definitions for Aesso website components
 */

// Layout Props
export interface BaseLayoutProps {
  title: string;
  description?: string;
  ogImage?: string;
}

export interface PageLayoutProps extends BaseLayoutProps {
  variant?: 'default' | 'fullwidth';
}

// Component Props
export interface HeaderProps {
  class?: string;
}

export interface FooterProps {
  showPreFooter?: boolean;
  class?: string;
}

// Project-specific types
export interface ProjectInfo {
  title: string;
  description: string;
  link: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'low' | 'auto';
}

// Design tokens
export type SpacingScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type TextScale = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

// Utility types
export type ClassName = string | undefined;