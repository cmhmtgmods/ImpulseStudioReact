import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { 
  FiMenu, 
  FiX,
  FiUser,
  FiPhone 
} from 'react-icons/fi';

const Header = ({ translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Отслеживание скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие мобильного меню при переходе на другую страницу
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Массив навигационных ссылок
  const navLinks = [
    { title: translations?.nav?.home || 'Главная', href: '/' },
    { title: translations?.nav?.services || 'Услуги', href: '/services' },
    { title: translations?.nav?.projects || 'Проекты', href: '/projects' },
    { title: translations?.nav?.about || 'О нас', href: '/about' },
    { title: translations?.nav?.contact || 'Контакты', href: '/contact' },
  ];

  // Класс для хедера в зависимости от скролла
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-dark-background/90 py-3 shadow-md backdrop-blur-lg dark:bg-dark-background/90 light:bg-light-surface/90 light:shadow-lg' 
      : 'bg-transparent py-5'
  }`;

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-dark-white hover:text-primary transition-colors dark:text-dark-white light:text-light-black ${
                  router.pathname === link.href ? 'text-primary font-medium' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Правая часть с контролами */}
          <div className="flex items-center space-x-4">
            {/* Переключение языка */}
            <LanguageSwitcher />
            
            {/* Переключение темы */}
            <ThemeToggle />

            {/* Контактная кнопка (только на десктопе) */}
            <div className="hidden md:block">
              <Button 
                variant="primary" 
                size="sm" 
                href="/contact"
                icon={FiPhone}
                iconPosition="left"
              >
                {translations?.nav?.contact || 'Контакты'}
              </Button>
            </div>

            {/* Мобильное меню */}
            <button 
              className="p-2 md:hidden rounded-full hover:bg-dark-surface/50 transition-colors dark:hover:bg-dark-surface/50 light:hover:bg-light-surface-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </Container>

      {/* Мобильное меню */}
      <div 
        className={`fixed inset-0 z-50 bg-dark-background dark:bg-dark-background light:bg-light-background transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-5">
            <Logo />
            <button 
              className="p-2 rounded-full hover:bg-dark-surface/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          <nav className="flex flex-col mt-10 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-xl font-heading font-medium text-dark-white hover:text-primary transition-colors dark:text-dark-white light:text-light-black ${
                  router.pathname === link.href ? 'text-primary' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <div className="flex flex-col space-y-6">
              <Button 
                variant="primary" 
                fullWidth 
                href="/contact"
                icon={FiPhone}
                iconPosition="left"
              >
                {translations?.nav?.contact || 'Связаться с нами'}
              </Button>
              
              <Button 
                variant="outline" 
                fullWidth 
                href="/about"
                icon={FiUser}
                iconPosition="left"
              >
                {translations?.nav?.about || 'О нас'}
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-dark-surface-2 dark:border-dark-surface-2 light:border-light-gray/10">
              <div className="flex flex-col space-y-4">
                <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
                  {translations?.contact?.info?.burgas || 'Бургас, Болгария'}
                </p>
                <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
                  hello@impulse.studio
                </p>
                <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
                  +359 87 629 4914
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;