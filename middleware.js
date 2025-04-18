import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './src/lib/i18n';

export function middleware(request) {
  // Получаем текущий путь
  const pathname = request.nextUrl.pathname;
  
  // Проверяем если путь уже содержит локаль
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // Если путь не содержит локали
  if (!pathnameHasLocale) {
    // Перенаправляем на путь с локалью по умолчанию
    return NextResponse.redirect(
      new URL(
        pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`,
        request.url
      )
    );
  }
  
  return NextResponse.next();
}

// Укажите, для каких маршрутов работает middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};