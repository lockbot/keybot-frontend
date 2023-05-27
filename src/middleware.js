import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from '/src/i18n-config'

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders = { 'accept-language': 'en-US,en;q=0.5' };
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    return match(languages, i18n.locales, i18n.defaultLocale); // -> 'en-US'
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
          new URL(`/${locale}/${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}