import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  // Базовые классы кнопки
  const baseClasses = 'font-medium rounded-full transition-all duration-300 flex items-center justify-center';
  
  // Варианты стилей
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg',
    accent: 'bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg',
    outline: 'border border-dark-gray/20 text-dark-white hover:border-primary hover:text-primary dark:border-dark-gray/20 dark:text-dark-white light:border-light-gray/20 light:text-light-black',
    ghost: 'bg-transparent text-dark-white hover:bg-dark-surface/50 dark:text-dark-white light:text-light-black',
    link: 'bg-transparent text-primary hover:underline p-0 shadow-none',
  };
  
  // Размеры кнопок
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Иконка
  const IconComponent = icon;
  const iconClasses = iconPosition === 'left' ? 'mr-2' : 'ml-2';
  
  // Итоговые классы
  const classes = twMerge(
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className
  );
  
  // Рендеринг ссылки или кнопки
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {icon && iconPosition === 'left' && <IconComponent className={iconClasses} />}
        {children}
        {icon && iconPosition === 'right' && <IconComponent className={iconClasses} />}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <IconComponent className={iconClasses} />}
      {children}
      {icon && iconPosition === 'right' && <IconComponent className={iconClasses} />}
    </button>
  );
};

export default Button;