import { loadTranslations, defaultLocale } from '../../lib/i18n';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export async function generateMetadata({ params }) {
  // Загружаем переводы для правильного отображения метаданных
  const translations = await loadTranslations(params.locale || defaultLocale);
  
  return {
    title: translations?.site?.title || 'Impulse Studio | Качественные решения, Умные цены',
    description: translations?.site?.description || 'Impulse Studio создает инновационные цифровые решения с использованием современных технологий веб-разработки.',
  };
}

export default async function LocaleLayout({ children, params }) {
  // Загружаем переводы для текущей локали
  const translations = await loadTranslations(params.locale || defaultLocale);
  
  return (
    <>
      <Header translations={translations} />
      
      <main className="pt-20">
        {children}
      </main>
      
      <Footer translations={translations} />
      
      {/* Кнопка возврата наверх страницы */}
      <button 
        id="backToTop"
        aria-label="Наверх"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all opacity-0 translate-y-10 pointer-events-none z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
      
      {/* Модальные окна и оверлеи */}
      <div id="modal-root"></div>
      
      {/* Скрипт для кнопки возврата наверх */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const backToTopButton = document.getElementById('backToTop');
              
              if (backToTopButton) {
                // Показать кнопку при прокрутке
                window.addEventListener('scroll', function() {
                  if (window.scrollY > 300) {
                    backToTopButton.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                    backToTopButton.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                  } else {
                    backToTopButton.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                    backToTopButton.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                  }
                });
                
                // Прокрутка наверх при клике
                backToTopButton.addEventListener('click', function() {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                });
              }
            });
          `,
        }}
      />
    </>
  );
}