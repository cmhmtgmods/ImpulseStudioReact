import { loadTranslations, defaultLocale } from '../../../lib/i18n';
import Section from '../../../components/ui/Section';
import ContactForm from '../../../components/contact/ContactForm';
import Map from '../../../components/contact/Map';

export async function generateMetadata({ params }) {
  // Загружаем переводы для правильного отображения метаданных
  const translations = await loadTranslations(params.locale || defaultLocale);
  
  return {
    title: `${translations?.contact?.title || 'Связаться с нами'} | Impulse Studio`,
    description: translations?.contact?.subtitle || 'Мы будем рады обсудить ваш проект. Отправьте нам сообщение, и мы свяжемся с вами как можно скорее.',
  };
}

export default async function ContactPage({ params }) {
  // Загружаем переводы для текущей локали
  const translations = await loadTranslations(params.locale || defaultLocale);
  
  return (
    <>
      <Section 
        background="default" 
        spacing="large"
        withPattern={true}
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {translations?.contact?.title || 'Связаться с нами'}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark-white dark:text-dark-white light:text-light-black">
            {translations?.contact?.title || 'Связаться с нами'}
          </h1>
          
          <p className="max-w-3xl mx-auto text-dark-gray dark:text-dark-gray light:text-light-gray text-lg">
            {translations?.contact?.subtitle || 'Мы будем рады обсудить ваш проект. Отправьте нам сообщение, и мы свяжемся с вами как можно скорее.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Форма обратной связи */}
          <ContactForm translations={translations} />
          
          {/* Контактная информация и карта */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="bg-dark-surface p-6 rounded-lg border border-dark-surface-2/50 dark:bg-dark-surface dark:border-dark-surface-2/50 light:bg-light-surface light:border-light-gray/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                  {translations?.contact?.info?.email || 'Email'}
                </h3>
                <a href="mailto:hello@impulse.studio" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  hello@impulse.studio
                </a>
              </div>
              
              {/* Телефон */}
              <div className="bg-dark-surface p-6 rounded-lg border border-dark-surface-2/50 dark:bg-dark-surface dark:border-dark-surface-2/50 light:bg-light-surface light:border-light-gray/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                  {translations?.contact?.info?.phone || 'Телефон'}
                </h3>
                <a href="tel:+359876294914" className="text-dark-gray hover:text-primary transition-colors dark:text-dark-gray light:text-light-gray">
                  +359 87 629 4914
                </a>
                <p className="text-dark-gray text-sm mt-2 dark:text-dark-gray light:text-light-gray">
                  {translations?.contact?.info?.hours || 'Понедельник - Пятница, 9:00 - 18:00'}
                </p>
              </div>
              
              {/* Адрес */}
              <div className="bg-dark-surface p-6 rounded-lg border border-dark-surface-2/50 dark:bg-dark-surface dark:border-dark-surface-2/50 light:bg-light-surface light:border-light-gray/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                  {translations?.contact?.info?.address || 'Адрес'}
                </h3>
                <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
                  {translations?.contact?.info?.burgas || 'Бургас, Болгария'}
                </p>
                <p className="text-dark-gray text-sm mt-2 dark:text-dark-gray light:text-light-gray">
                  {translations?.contact?.info?.meeting || 'Возможность личных встреч в Бургасе'}
                </p>
              </div>
              
              {/* Социальные сети */}
              <div className="bg-dark-surface p-6 rounded-lg border border-dark-surface-2/50 dark:bg-dark-surface dark:border-dark-surface-2/50 light:bg-light-surface light:border-light-gray/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                  {translations?.contact?.social?.title || 'Мы в социальных сетях'}
                </h3>
                <div className="flex space-x-3 mt-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-dark-surface-2/50 flex items-center justify-center text-dark-white hover:bg-primary hover:text-white transition-colors dark:bg-dark-surface-2/50 dark:text-dark-white light:bg-light-surface-2/50 light:text-light-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Карта */}
            <Map 
              location={{ 
                name: translations?.contact?.info?.burgas || 'Бургас, Болгария',
                center: { lat: 42.5048, lng: 27.4626 } // координаты Бургаса
              }} 
            />
          </div>
        </div>
      </Section>
    </>
  );
}