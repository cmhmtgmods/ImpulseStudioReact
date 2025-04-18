'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../ui/Section';

const ProcessStep = ({ step, index, translations, totalSteps }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });
  
  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
    >
      <div className="flex">
        {/* Номер шага */}
        <div className="mr-6 md:mr-8">
          <div className="relative">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg font-semibold z-10 dark:bg-primary/10 light:bg-primary/20">
              {step.number}
            </div>
            
            {/* Соединяющая линия */}
            {index < totalSteps - 1 && (
              <div className="absolute top-12 left-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-primary/5 -translate-x-1/2"></div>
            )}
          </div>
        </div>
        
        {/* Содержимое шага */}
        <div className="flex-1 pb-16">
          <h3 className="text-xl font-heading font-semibold mb-3 text-dark-white dark:text-dark-white light:text-light-black">
            {step.title}
          </h3>
          <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Process = ({ translations }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Шаги процесса работы
  const steps = translations?.process?.steps || [
    {
      number: "01",
      title: "Обсуждение",
      description: "Мы начинаем с понимания вашего бизнеса, целей и видения через детальную консультацию. Этот этап включает исследование рынка, анализ пользователей и определение целей проекта."
    },
    {
      number: "02",
      title: "Стратегия",
      description: "Мы разрабатываем комплексный план, адаптированный к вашим конкретным потребностям, включая стратегию контента, планирование пользовательского опыта, выбор технологий и дорожную карту проекта."
    },
    {
      number: "03",
      title: "Дизайн",
      description: "Наши дизайнеры создают макеты и прототипы, соответствующие вашему бренду и ожиданиям пользователей. Мы вносим изменения на основе ваших отзывов, пока дизайн не станет идеальным."
    },
    {
      number: "04",
      title: "Разработка",
      description: "Наша команда разработчиков воплощает дизайн в жизнь с чистым, эффективным кодом. Мы следуем лучшим практикам для обеспечения производительности, безопасности и удобства обслуживания."
    },
    {
      number: "05",
      title: "Тестирование и запуск",
      description: "Мы тщательно тестируем на разных устройствах и браузерах, исправляем все проблемы и готовимся к плавному запуску. После развертывания мы предоставляем необходимую поддержку и обучение."
    }
  ];

  return (
    <Section 
      id="process" 
      background="surface"
      spacing="large"
    >
      <div className="text-center mb-16" ref={ref}>
        <motion.span 
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {translations?.process?.title || 'Как мы работаем'}
        </motion.span>
        
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-white dark:text-dark-white light:text-light-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {translations?.process?.subtitle || 'Наш отлаженный процесс работы обеспечивает эффективное сотрудничество и превосходные результаты для каждого проекта'}
        </motion.h2>
      </div>
      
      {/* Шаги процесса */}
      <div className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <ProcessStep 
            key={index}
            step={step}
            index={index}
            translations={translations}
            totalSteps={steps.length}
          />
        ))}
      </div>
    </Section>
  );
};

export default Process;
