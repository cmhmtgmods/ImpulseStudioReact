import React, { useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiClock,
  FiSend,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiGithub,
  FiArrowRight
} from 'react-icons/fi';

const Footer = ({ translations }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Обработка подписки на рассылку
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // В реальном проекте здесь был бы запрос к API
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  // Текущий год для копирайта
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface pt-16 pb-6 dark:bg-dark-surface light:bg-light-surface border-t border-dark-surface-2/50 dark:border-dark-surface-2/50 light:border-light-gray/10">
      <Container>
        {/* Верхняя часть футера с сеткой */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Колонка с информацией о компании */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-dark-gray dark:text-dark-gray light:text-light-gray mb-6">
              {translations?.site?.description || 'Мы создаем инновационные цифровые решения с использованием современных технологий веб-разработки.'}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary" />
                <div>
                  <p className="text-dark-white dark:text-dark-white light:text-light-black font-medium">
                    {translations?.contact?.info?.burgas || 'Бургас, Болгария'}
                  </p>
                  <p className="text-dark-gray dark:text-dark-gray light:text-light-gray text-sm">
                    {translations?.contact?.info?.meeting || 'Возможность личных встреч в Бургасе'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary" />
                <div>
                  <p className="text-dark-white dark:text-dark-white light:text-light-black font-medium">
                    +359 87 629 4914
                  </p>
                  <p className="text-dark-gray dark:text-dark-gray light:text-light-gray text-sm">
                    {translations?.contact?.info?.hours || 'Понедельник - Пятница, 9:00 - 18:00'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary" />
                <p className="text-dark-white dark:text-dark-white light:text-light-black font-medium">
                  hello@impulse.studio
                </p>
              </div>
            </div>
          </div>

          {/* Колонка с навигацией */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-dark-white dark:text-dark-white light:text-light-black">
              {translations?.footer?.company || 'Компания'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.nav?.home || 'Главная'}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.nav?.services || 'Услуги'}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.nav?.projects || 'Проекты'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.nav?.about || 'О нас'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.nav?.contact || 'Контакты'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка с услугами */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-dark-white dark:text-dark-white light:text-light-black">
              {translations?.footer?.services || 'Услуги'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.services?.web?.title || 'Разработка сайтов'}
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux-design" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.services?.design?.title || 'UI/UX Дизайн'}
                </Link>
              </li>
              <li>
                <Link href="/services#logo-design" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.services?.logo?.title || 'Разработка логотипов'}
                </Link>
              </li>
              <li>
                <Link href="/services#branding" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.services?.branding?.title || 'Визитки и брендинг'}
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.services?.marketing?.title || 'Продвижение бизнеса'}
                </Link>
              </li>
              <li>
                <Link href="/services#advertising" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  {translations?.services?.advertising?.title || 'Настройка рекламы'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка с подпиской на рассылку */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-dark-white dark:text-dark-white light:text-light-black">
              {translations?.footer?.newsletter?.title || 'Подпишитесь на нашу рассылку'}
            </h3>
            <p className="text-dark-gray dark:text-dark-gray light:text-light-gray mb-4">
              {translations?.footer?.newsletter?.description || 'Будьте в курсе наших последних проектов и новостей'}
            </p>

            {subscribed ? (
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-primary font-medium">
                  {translations?.footer?.newsletter?.success || 'Спасибо за подписку!'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder={translations?.footer?.newsletter?.placeholder || 'Ваш email'}
                  className="w-full px-4 py-3 bg-dark-surface-2/50 border border-dark-surface-2 rounded-lg placeholder:text-dark-gray/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-dark-surface-2/50 dark:border-dark-surface-2 light:bg-light-surface-2/50 light:border-light-gray/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                  aria-label={translations?.footer?.newsletter?.button || 'Подписаться'}
                >
                  <FiSend className="text-lg" />
                </button>
              </form>
            )}

            {/* Социальные сети */}
            <div className="mt-6">
              <p className="text-dark-gray dark:text-dark-gray light:text-light-gray mb-3">
                {translations?.contact?.social?.follow || 'Подписывайтесь на нас'}
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black"
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="pt-6 mt-6 border-t border-dark-surface-2/50 dark:border-dark-surface-2/50 light:border-light-gray/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-gray dark:text-dark-gray light:text-light-gray text-sm mb-4 md:mb-0">
              {translations?.footer?.copyright?.replace('2025', currentYear) || `© ${currentYear} Impulse Studio. Все права защищены.`}
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-dark-gray hover:text-primary transition-colors text-sm dark:text-dark-gray light:text-light-gray">
                {translations?.footer?.privacy || 'Политика конфиденциальности'}
              </Link>
              <Link href="/terms" className="text-dark-gray hover:text-primary transition-colors text-sm dark:text-dark-gray light:text-light-gray">
                {translations?.footer?.terms || 'Условия использования'}
              </Link>
              <Link href="/cookies" className="text-dark-gray hover:text-primary transition-colors text-sm dark:text-dark-gray light:text-light-gray">
                {translations?.footer?.cookies || 'Политика использования файлов cookie'}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;