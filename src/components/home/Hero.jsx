'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const Hero = ({ translations }) => {
  const heroBgRef = useRef(null);

  // Эффект параллакса при движении мыши
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroBgRef.current) return;
      
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      // Анимируем элементы фона
      const shapes = heroBgRef.current.querySelectorAll('.hero-shape');
      shapes.forEach((shape, index) => {
        const factor = (index + 1) * 0.2;
        shape.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Анимация прокрутки вниз при клике на индикатор
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Фоновые градиенты и формы */}
      <div ref={heroBgRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-background dark:bg-dark-background light:bg-light-background"></div>
        
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60 dark:opacity-60 light:opacity-40"></div>
        
        {/* Анимированные формы */}
        <div className="hero-shape absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] dark:bg-primary/10 light:bg-primary/5"></div>
        <div className="hero-shape absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-secondary/10 blur-[70px] dark:bg-secondary/10 light:bg-secondary/5"></div>
        <div className="hero-shape absolute top-[40%] right-[25%] w-[150px] h-[150px] rounded-full bg-accent/5 blur-[60px] dark:bg-accent/5 light:bg-accent/3"></div>
        
        {/* Сетка (опционально) */}
        <div className="absolute inset-0 bg-grid opacity-5 dark:opacity-5 light:opacity-3"></div>
      </div>
      
      <Container>
        <div className="relative z-10 py-20 md:py-32">
          {/* Основной контент */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-dark-white dark:text-dark-white light:text-light-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {translations?.hero?.title || 'Создаем сайты, которые продают!'}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-dark-gray mb-10 max-w-3xl mx-auto dark:text-dark-gray light:text-light-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {translations?.hero?.subtitle || 'Мы разрабатываем веб-сайты и приложения, которые выделяются среди конкурентов и приносят результаты.'}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button 
                variant="primary" 
                size="lg"
                href="/contact"
                icon={FiArrowRight}
              >
                {translations?.hero?.cta || 'Начать проект'}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                href="/services"
              >
                {translations?.hero?.secondary || 'О наших услугах'}
              </Button>
            </motion.div>
            
            {/* Технологическая полоса */}
            <motion.div
              className="mt-24 py-6 border-t border-dark-surface-2/50 dark:border-dark-surface-2/50 light:border-light-gray/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="flex justify-center flex-wrap gap-8 md:gap-12 items-center text-dark-gray dark:text-dark-gray light:text-light-gray">
                <div className="flex items-center">
                  <span className="text-sm mr-1">React</span>
                  <span className="text-primary">•</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-1">Next.js</span>
                  <span className="text-primary">•</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-1">Vue</span>
                  <span className="text-primary">•</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-1">Node.js</span>
                  <span className="text-primary">•</span>
                </div>
                <div className="flex items-center">
                <span className="text-sm mr-1">WordPress</span>
                  <span className="text-primary">•</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm mr-1">Figma</span>
                  <span className="text-primary">•</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm">Tailwind</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Индикатор прокрутки вниз */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            onClick={scrollToNextSection}
          >
            <span className="text-dark-gray dark:text-dark-gray light:text-light-gray text-sm mb-2">Прокрутите вниз</span>
            <div className="w-8 h-12 rounded-full border-2 border-dark-gray/30 dark:border-dark-gray/30 light:border-light-gray/40 flex justify-center">
              <motion.div
                className="mt-2"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              >
                <FiChevronDown className="text-lg text-dark-gray dark:text-dark-gray light:text-light-gray" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;