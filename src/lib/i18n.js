import { createIntl } from 'next-intl';

export const locales = ['ru', 'bg', 'en'];
export const defaultLocale = 'ru';

// Автоопределение языка пользователя
export function getLocaleFromPath(path) {
  // Извлечь локаль из URL
  for (const locale of locales) {
    if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
      return locale;
    }
  }
  return defaultLocale;
}

// Загрузка переводов
export async function loadTranslations(locale) {
  try {
    return (await import(`../../public/locales/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Возвращаем пустой объект, чтобы избежать ошибок
    return {};
  }
}

// Создаем экземпляр интернационализации
export async function createTranslator(locale = defaultLocale) {
  const messages = await loadTranslations(locale);
  
  return createIntl({
    locale,
    messages,
  });
}

// Получение URL для переключения на другой язык
export function getLocaleUrl(currentPath, newLocale) {
  // Определить текущую локаль в пути
  const currentLocale = getLocaleFromPath(currentPath);
  
  // Если текущий путь содержит локаль, заменить ее
  if (currentLocale) {
    return currentPath.replace(`/${currentLocale}`, `/${newLocale}`);
  }
  
  // Иначе добавить новую локаль к пути
  return `/${newLocale}${currentPath}`;
}