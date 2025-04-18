import React from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({
  children,
  className = '',
  as: Component = 'div',
  size = 'default',
  ...props
}) => {
  // Размеры контейнера
  const sizes = {
    small: 'max-w-3xl',
    default: 'max-w-7xl',
    wide: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const classes = twMerge(
    'w-full mx-auto px-4 sm:px-6 lg:px-8',
    sizes[size],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Container;