import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const Logo = ({
  className = '',
  size = 'default',
  variant = 'default',
  href = '/',
}) => {
  // Размеры
  const sizes = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl',
  };
  
  // Варианты
  const variants = {
    default: 'text-dark-white dark:text-dark-white light:text-light-black',
    light: 'text-white',
    dark: 'text-light-black',
  };
  
  const logoClasses = twMerge(
    'font-heading font-bold transition-colors duration-300 flex items-center',
    sizes[size],
    variants[variant],
    className
  );
  
  const bracketClasses = "font-mono bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text transition-all duration-300";
  
  return (
    <Link href={href} className={logoClasses}>
      <div className="flex items-center">
        <span className={`${bracketClasses} transform group-hover:-translate-x-1 mr-0.5`}>&lt;/</span>
        <span className="transform group-hover:translate-y-[-2px]">Impulse</span>
        <span className={`${bracketClasses} transform group-hover:translate-x-1 ml-0.5`}>&gt;</span>
      </div>
    </Link>
  );
};

export default Logo;