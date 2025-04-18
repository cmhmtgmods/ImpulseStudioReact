import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiChevronDown, FiGlobe } from 'react-icons/fi';
import { getLocaleUrl } from '../../lib/i18n';

const LanguageSwitcher = ({ translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Определяем текущий язык из URL
  const currentLocale = router.locale || router.defaultLocale || 'ru';

  // Получение названия языка на основе локали
  const getLanguageName = (locale) => {
    const names = {
      ru: translations?.language?.ru || 'Русский',
      bg: translations?.language?.bg || 'Български',
      en: translations?.language?.en || 'English',
    };
    return names[locale] || locale;
  };

  // Получение кода флага на основе локали
  const getFlagCode = (locale) => {
    return locale.toLowerCase();
  };

  // Переключение языка
  const switchLanguage = (locale) => {
    const path = router.asPath;
    router.push(path, path, { locale });
    setIsOpen(false);
  };

  // Закрытие выпадающего меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Массив доступных языков
  const languages = [
    { locale: 'ru', name: translations?.language?.ru || 'Русский' },
    { locale: 'bg', name: translations?.language?.bg || 'Български' },
    { locale: 'en', name: translations?.language?.en || 'English' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-dark-surface/50 transition-colors dark:hover:bg-dark-surface/50 light:hover:bg-light-surface-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Выбрать язык"
        title="Выбрать язык"
      >
        <span className="flex items-center">
          <span className={`fi fi-${getFlagCode(currentLocale)} w-5 h-3 rounded-sm`}></span>
          <span className="ml-2 text-sm hidden sm:inline-block">
            {currentLocale.toUpperCase()}
          </span>
        </span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 w-40 bg-dark-surface rounded-lg shadow-lg dark:bg-dark-surface light:bg-light-surface z-50 border border-dark-surface-2/50 dark:border-dark-surface-2/50 light:border-light-gray/10">
          {languages.map((lang) => (
            <button
              key={lang.locale}
              className={`flex items-center w-full px-4 py-2 text-left hover:bg-dark-surface-2/50 transition-colors dark:hover:bg-dark-surface-2/50 light:hover:bg-light-surface-2/70 ${
                currentLocale === lang.locale ? 'text-primary' : 'text-dark-white dark:text-dark-white light:text-light-black'
              }`}
              onClick={() => switchLanguage(lang.locale)}
            >
              <span className={`fi fi-${getFlagCode(lang.locale)} w-5 h-3 rounded-sm mr-2`}></span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;