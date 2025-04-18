import { loadTranslations, defaultLocale } from '../../lib/i18n';
import Hero from '../../components/home/Hero';
import Services from '../../components/home/Services';
import FeaturedProjects from '../../components/home/FeaturedProjects';
import Process from '../../components/home/Process';
import Testimonials from '../../components/home/Testimonials';
import CallToAction from '../../components/home/CallToAction';

export default async function HomePage({ params }) {
  // Загружаем переводы для текущей локали
  const translations = await loadTranslations(params.locale || defaultLocale);
  
  return (
    <>
      {/* Героический раздел */}
      <Hero translations={translations} />
      
      {/* Услуги */}
      <Services translations={translations} />
      
      {/* Избранные проекты */}
      <FeaturedProjects translations={translations} />
      
      {/* Как мы работаем */}
      <Process translations={translations} />
      
      {/* Отзывы клиентов */}
      <Testimonials translations={translations} />
      
      {/* Призыв к действию */}
      <CallToAction translations={translations} />
    </>
  );
}