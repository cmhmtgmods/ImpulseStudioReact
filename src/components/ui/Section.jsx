import React from 'react';
import { twMerge } from 'tailwind-merge';
import Container from './Container';

const Section = ({
  children,
  className = '',
  background = 'default',
  containerSize = 'default',
  id,
  withPattern = false,
  withGrid = false,
  spacing = 'default',
  ...props
}) => {
  // Варианты фона
  const backgrounds = {
    default: 'bg-dark-background dark:bg-dark-background light:bg-light-background',
    surface: 'bg-dark-surface dark:bg-dark-surface light:bg-light-surface',
    surface2: 'bg-dark-surface-2 dark:bg-dark-surface-2 light:bg-light-surface-2',
    primary: 'bg-primary/10',
    secondary: 'bg-secondary/10',
    accent: 'bg-accent/10',
    transparent: 'bg-transparent',
  };

  // Варианты отступов
  const spacings = {
    none: 'py-0',
    small: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    large: 'py-16 md:py-24 lg:py-32',
  };

  const classes = twMerge(
    backgrounds[background],
    spacings[spacing],
    withPattern ? 'relative overflow-hidden' : '',
    className
  );

  return (
    <section id={id} className={classes} {...props}>
      {withPattern && (
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full noise-bg"></div>
        </div>
      )}
      
      {withGrid && (
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="w-full h-full bg-grid"></div>
        </div>
      )}
      
      <Container size={containerSize} className="relative z-10">
        {children}
      </Container>
    </section>
  );
};

export default Section;