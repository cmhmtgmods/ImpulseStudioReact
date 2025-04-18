'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { 
  FiCode, 
  FiLayout, 
  FiImage, 
  FiFileText, 
  FiTrendingUp, 
  FiTarget,
  FiArrowRight
} from 'react-icons/fi';

const ServiceCard = ({ icon, title, description, features, cta, index, translations }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const Icon = icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className="h-full flex flex-col">
        {/* Иконка сервиса */}
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
          <Icon className="text-2xl" />
        </div>
        
        {/* Заголовок и описание */}
        <h3 className="text-xl font-heading font-semibold mb-3 text-dark-white dark:text-dark-white light:text-light-black">
          {title}
        </h3>
        
        <p className="text-dark-gray mb-5 dark:text-dark-gray light:text-light-gray">
          {description}
        </p>
        
        {/* Список возможностей */}
        <ul className="mb-6 space-y-2 flex-grow">
          {features && features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-primary text-xl">•</span>
              <span className="text-dark-gray dark:text-dark-gray light:text-light-gray">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Кнопка */}
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-primary hover:bg-primary/5 px-0 py-2"
            icon={FiArrowRight}
          >
            {cta || translations?.services?.cta || 'Узнать больше'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Services = ({ translations }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Данные об услугах
  const services = [
    {
      icon: FiCode,
      title: translations?.services?.web?.title || 'Разработка сайтов',
      description: translations?.services?.web?.description || 'От простых лендингов до сложных корпоративных порталов с индивидуальным дизайном.',
      features: translations?.services?.web?.features || [
        'Адаптивный дизайн',
        'SEO-оптимизация',
        'Высокая скорость загрузки',
        'Совместимость со всеми устройствами'
      ]
    },
    {
      icon: FiLayout,
      title: translations?.services?.design?.title || 'UI/UX Дизайн',
      description: translations?.services?.design?.description || 'Создаем интуитивно понятные и визуально привлекательные интерфейсы для сайтов и приложений.',
      features: translations?.services?.design?.features || [
        'Прототипирование',
        'Пользовательские исследования',
        'Дизайн-системы',
        'Анимации и эффекты'
      ]
    },
    {
      icon: FiImage,
      title: translations?.services?.logo?.title || 'Разработка логотипов',
      description: translations?.services?.logo?.description || 'Уникальные запоминающиеся логотипы, отражающие ценности и характер вашего бренда.',
      features: translations?.services?.logo?.features || [
        'Уникальный дизайн',
        'Несколько вариантов на выбор',
        'Файлы в различных форматах',
        'Руководство по использованию'
      ]
    },
    {
      icon: FiFileText,
      title: translations?.services?.branding?.title || 'Визитки и брендинг',
      description: translations?.services?.branding?.description || 'Полный комплекс услуг по разработке фирменного стиля для вашего бизнеса.',
      features: translations?.services?.branding?.features || [
        'Фирменный стиль',
        'Визитки и бланки',
        'Брендбук',
        'Маркетинговые материалы'
      ]
    },
    {
      icon: FiTrendingUp,
      title: translations?.services?.marketing?.title || 'Продвижение бизнеса',
      description: translations?.services?.marketing?.description || 'Комплексное продвижение в поисковых системах, социальных сетях и контент-маркетинг.',
      features: translations?.services?.marketing?.features || [
        'SEO-оптимизация',
        'Контент-стратегия',
        'Социальные сети',
        'Аналитика и отчеты'
      ]
    },
    {
      icon: FiTarget,
      title: translations?.services?.advertising?.title || 'Настройка рекламы',
      description: translations?.services?.advertising?.description || 'Эффективная настройка контекстной и таргетированной рекламы для привлечения клиентов.',
      features: translations?.services?.advertising?.features || [
        'Google Ads',
        'Яндекс.Директ',
        'Таргетированная реклама',
        'Ретаргетинг'
      ]
    },
  ];

  return (
    <Section 
      id="services" 
      background="surface" 
      withPattern={true}
      spacing="large"
    >
      <div className="text-center mb-12" ref={ref}>
        <motion.span 
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {translations?.services?.title || 'Наши услуги'}
        </motion.span>
        
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-white dark:text-dark-white light:text-light-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {translations?.services?.subtitle || 'Современные решения для вашего бизнеса по доступным ценам'}
        </motion.h2>
        
        <motion.p 
          className="max-w-3xl mx-auto text-dark-gray dark:text-dark-gray light:text-light-gray text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {translations?.services?.description || 'Наша команда сочетает творческий подход и техническую экспертизу для создания исключительных цифровых решений, которые помогают вашему бизнесу процветать.'}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            translations={translations}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;