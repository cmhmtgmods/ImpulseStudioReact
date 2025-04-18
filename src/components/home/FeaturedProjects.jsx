'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { FiArrowRight, FiExternalLink, FiPlus } from 'react-icons/fi';

// Компонент карточки проекта
const ProjectCard = ({ project, index, setActiveProject, translations }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });
  
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setActiveProject(project)}
    >
      <div className="h-full overflow-hidden rounded-lg group cursor-pointer border border-dark-surface-2/30 dark:border-dark-surface-2/30 light:border-light-gray/10 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
        {/* Изображение проекта */}
        <div className="relative h-64 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              width={600}
              height={400}
            />
          ) : (
            <div className="w-full h-full bg-dark-surface-2/50 flex items-center justify-center dark:bg-dark-surface-2/50 light:bg-light-surface-2/70">
              <span className="text-dark-gray dark:text-dark-gray light:text-light-gray">Изображение отсутствует</span>
            </div>
          )}
          
          {/* Оверлей при наведении */}
          <div className={`absolute inset-0 bg-dark-black/80 backdrop-blur-sm flex flex-col justify-between p-6 transition-opacity duration-300 dark:bg-dark-black/80 light:bg-light-black/80 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-1">
              {project.tags && project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-block bg-dark-surface/30 text-dark-white px-3 py-1 text-xs rounded-full mr-2 mb-2 dark:bg-dark-surface/30 dark:text-dark-white light:bg-light-surface/30 light:text-light-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 px-0"
                icon={FiPlus}
              >
                {translations?.works?.viewProject || 'Посмотреть проект'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Информация о проекте */}
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold mb-2 text-dark-white dark:text-dark-white light:text-light-black group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Компонент модального окна проекта
const ProjectModal = ({ project, isOpen, onClose, translations }) => {
  if (!isOpen || !project) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Затемнение фона */}
      <div 
        className="fixed inset-0 bg-dark-black/80 backdrop-blur-sm dark:bg-dark-black/80 light:bg-light-black/80"
        onClick={onClose}
      ></div>
      
      {/* Содержимое модального окна */}
      <div className="relative z-10 bg-dark-surface w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl dark:bg-dark-surface light:bg-light-surface">
        {/* Кнопка закрытия */}
        <button 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/70 light:text-light-black"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ✕
        </button>
        
        {/* Изображение проекта */}
        <div className="relative h-64 sm:h-80 md:h-96">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
              width={1200}
              height={675}
            />
          ) : (
            <div className="w-full h-full bg-dark-surface-2/50 flex items-center justify-center dark:bg-dark-surface-2/50 light:bg-light-surface-2/70">
              <span className="text-dark-gray dark:text-dark-gray light:text-light-gray">Изображение отсутствует</span>
            </div>
          )}
        </div>
        
        {/* Информация о проекте */}
        <div className="p-6 md:p-8">
          <div className="mb-4">
            {project.tags && project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-dark-white dark:text-dark-white light:text-light-black">
            {project.title}
          </h2>
          
          <p className="text-dark-gray mb-6 dark:text-dark-gray light:text-light-gray">
            {project.fullDescription || project.description}
          </p>
          
          {/* Детали проекта */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-dark-gray mb-2 dark:text-dark-gray light:text-light-gray">Клиент</h4>
              <p className="text-dark-white dark:text-dark-white light:text-light-black">{project.client || 'Конфиденциально'}</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-dark-gray mb-2 dark:text-dark-gray light:text-light-gray">Услуги</h4>
              <p className="text-dark-white dark:text-dark-white light:text-light-black">{project.services || 'Веб-разработка, Дизайн'}</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-dark-gray mb-2 dark:text-dark-gray light:text-light-gray">Год</h4>
              <p className="text-dark-white dark:text-dark-white light:text-light-black">{project.year || '2025'}</p>
            </div>
          </div>
          
          {/* Кнопка для посещения проекта */}
          {project.url && (
            <Button 
              variant="primary" 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              icon={FiExternalLink}
            >
              Посетить проект
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = ({ translations }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Состояние для модального окна
  const [activeProject, setActiveProject] = useState(null);
  
  // Примеры проектов
  const projects = [
    {
      id: 1,
      title: 'Интерактивная школа языков Britlex',
      description: 'Разработка современного сайта для языковой школы с интерактивными функциями и адаптивным дизайном.',
      fullDescription: 'Разработали полнофункциональный сайт для языковой школы Britlex с интерактивными инструментами обучения, системой управления курсами и личными кабинетами для студентов и преподавателей. Сайт полностью адаптивен и оптимизирован для SEO, что позволило увеличить органический трафик на 40% в первые три месяца после запуска.',
      image: '/images/projects/britlex.jpg',
      tags: ['Веб-разработка', 'UI/UX Дизайн'],
      client: 'Britlex',
      services: 'Веб-разработка, UI/UX Дизайн, SEO',
      year: '2024',
      url: '#'
    },
    {
      id: 2,
      title: 'Фитнес-приложение TrackFit',
      description: 'Разработка мобильного приложения для отслеживания тренировок и питания с персонализированными рекомендациями.',
      fullDescription: 'Создали комплексное фитнес-приложение с функциями отслеживания тренировок, питания и прогресса. Приложение включает библиотеку упражнений с видео-инструкциями, планы тренировок, дневник питания и аналитику прогресса. Особое внимание уделили персонализации, разработав алгоритмы, адаптирующие программы под индивидуальные цели и возможности пользователей.',
      image: '/images/projects/trackfit.jpg',
      tags: ['Мобильное приложение', 'UI/UX Дизайн'],
      client: 'TrackFit',
      services: 'Разработка приложений, UI/UX Дизайн',
      year: '2024',
      url: '#'
    },
    {
      id: 3,
      title: 'Банковский интерфейс FinHub',
      description: 'Редизайн пользовательского интерфейса для финтех-компании с улучшенной навигацией и визуализацией данных.',
      fullDescription: 'Провели полный редизайн пользовательского интерфейса для финтех-компании, создав интуитивную систему навигации и улучшенную визуализацию финансовых данных. Новый дизайн упростил сложные финансовые операции, сделав их доступными для пользователей с разным уровнем финансовой грамотности. Результатом стало увеличение времени, проводимого пользователями в приложении, на 35% и сокращение количества обращений в службу поддержки на 42%.',
      image: '/images/projects/finhub.jpg',
      tags: ['UI/UX Дизайн', 'Финтех'],
      client: 'FinHub',
      services: 'UI/UX Дизайн, Прототипирование',
      year: '2023',
      url: '#'
    }
  ];

  return (
    <Section 
      id="works" 
      background="default" 
      withGrid={true}
      spacing="large"
    >
      <div className="text-center mb-12" ref={ref}>
        <motion.span 
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {translations?.works?.title || 'Наши проекты'}
        </motion.span>
        
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-white dark:text-dark-white light:text-light-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {translations?.works?.subtitle || 'Познакомьтесь с нашими последними работами'}
        </motion.h2>
      </div>

      {/* Фильтры проектов (опционально) */}
      {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
        <Button variant="ghost" className="bg-dark-surface/50 hover:bg-primary hover:text-white dark:bg-dark-surface/50 light:bg-light-surface/70">Все</Button>
        <Button variant="ghost" className="bg-dark-surface/50 hover:bg-primary hover:text-white dark:bg-dark-surface/50 light:bg-light-surface/70">Веб-сайты</Button>
        <Button variant="ghost" className="bg-dark-surface/50 hover:bg-primary hover:text-white dark:bg-dark-surface/50 light:bg-light-surface/70">Дизайн</Button>
        <Button variant="ghost" className="bg-dark-surface/50 hover:bg-primary hover:text-white dark:bg-dark-surface/50 light:bg-light-surface/70">Брендинг</Button>
      </div> */}

      {/* Сетка проектов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            setActiveProject={setActiveProject}
            translations={translations}
          />
        ))}
      </div>
      
      {/* Кнопка "Показать все проекты" */}
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          href="/projects"
          icon={FiArrowRight}
        >
          {translations?.works?.showMore || 'Смотреть все проекты'}
        </Button>
      </div>
      
      {/* Модальное окно для проекта */}
      <ProjectModal 
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        translations={translations}
      />
    </Section>
  );
};

export default FeaturedProjects;