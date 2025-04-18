'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { FiMessageSquare } from 'react-icons/fi';

const CallToAction = ({ translations }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Section
      background="surface"
      spacing="large"
      className="relative overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 dark:opacity-5 light:opacity-3"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-[30%] -left-[20%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] dark:bg-primary/8 light:bg-primary/5"></div>
          <div className="absolute -bottom-[30%] -right-[20%] w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[100px] dark:bg-secondary/8 light:bg-secondary/5"></div>
        </div>
      </div>
      
      {/* Содержимое */}
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-white dark:text-dark-white light:text-light-black"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {translations?.cta?.title || 'Готовы начать свой проект?'}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-dark-gray mb-8 dark:text-dark-gray light:text-light-gray"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {translations?.cta?.subtitle || 'Давайте сотрудничать, чтобы воплотить вашу идею в жизнь и создать цифровой опыт, который выделяется'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Button 
              variant="primary" 
              size="lg"
              href="/contact"
              icon={FiMessageSquare}
              iconPosition="left"
            >
              {translations?.cta?.button || 'Связаться с нами'}
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;