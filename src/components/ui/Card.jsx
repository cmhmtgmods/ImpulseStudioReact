import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverable = true,
  padding = 'default',
  withShadow = true,
  ...props
}) => {
  // Варианты стилей
  const variants = {
    default: 'bg-dark-surface border-white/5 dark:bg-dark-surface dark:border-white/5 light:bg-light-surface light:border-black/5',
    gradient: 'bg-gradient-to-br from-dark-surface/80 to-dark-surface-2/60 border-white/10 dark:from-dark-surface/80 dark:to-dark-surface-2/60 dark:border-white/10 light:from-light-surface light:to-light-surface-2/60 light:border-black/5',
    transparent: 'bg-transparent',
  };

  // Варианты отступов
  const paddings = {
    none: 'p-0',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  };

  // Базовые классы
  const baseClasses = 'rounded-lg border transition-all duration-300';
  
  // Hover эффект
  const hoverClasses = hoverable 
    ? 'hover:border-primary/20 hover:shadow-highlight hover:-translate-y-1 group/card' 
    : '';
  
  // Shadow эффект
  const shadowClasses = withShadow 
    ? 'shadow-sm dark:shadow-sm light:shadow-sm' 
    : '';

  const classes = twMerge(
    baseClasses,
    variants[variant],
    paddings[padding],
    hoverClasses,
    shadowClasses,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;