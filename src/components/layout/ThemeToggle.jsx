"use client";

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ translations }) => {
  const [theme, setTheme] = useState('dark');

  // Инициализация темы при загрузке страницы
  useEffect(() => {
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    
    // Применяем сохраненную тему или системные настройки
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Проверяем системные настройки
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('light', !prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Обновляем классы и сохраняем в localStorage
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-dark-surface/50 transition-colors dark:hover:bg-dark-surface/50 light:hover:bg-light-surface-2"
      aria-label={
        theme === 'dark'
          ? translations?.theme?.light || 'Переключить на светлую тему'
          : translations?.theme?.dark || 'Переключить на темную тему'
      }
      title={
        theme === 'dark'
          ? translations?.theme?.light || 'Переключить на светлую тему'
          : translations?.theme?.dark || 'Переключить на темную тему'
      }
    >
      {theme === 'dark' ? (
        <FiSun className="text-xl text-dark-white dark:text-dark-white light:text-light-black" />
      ) : (
        <FiMoon className="text-xl text-dark-white dark:text-dark-white light:text-light-black" />
      )}
    </button>
  );
};

export default ThemeToggle;