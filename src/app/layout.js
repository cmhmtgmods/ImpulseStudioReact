import '../styles/globals.css';
import { loadTranslations } from '../lib/i18n';
import Script from 'next/script';

export const metadata = {
  title: 'Impulse Studio | Качественные решения, Умные цены',
  description: 'Impulse Studio создает инновационные цифровые решения с использованием современных технологий веб-разработки.',
};

export default async function RootLayout({ children, params }) {
  return (
    <html lang="ru">
      <head>
        {/* Добавляем API для флагов стран */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </head>
      <body className="dark">
        {/* Шаблон для добавления флеш-сообщений */}
        <div id="flash-messages"></div>
        
        {/* Основное содержимое */}
        <main>{children}</main>
        
        {/* Дополнительные скрипты */}
        <Script 
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.body.classList.remove('dark');
                    document.body.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.body.classList.add('dark');
                    document.body.classList.remove('light');
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}