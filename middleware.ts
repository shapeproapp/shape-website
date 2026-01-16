import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['fr', 'en'];
const defaultLocale = 'fr';
const englishSpeakingCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE'];

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const rawCountry = request.headers.get('x-vercel-ip-country') ||
            request.geo?.country ||
            'FR';
        const country = rawCountry.toUpperCase();

        const locale = englishSpeakingCountries.includes(country) ? 'en' : 'fr';

        // e.g. incoming request is /products
        // The new URL is now /en/products?debug_country=US
        const url = new URL(
            `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
            request.url
        );
        url.searchParams.set('debug_country', country);

        const response = NextResponse.redirect(url);

        // Add debug headers
        response.headers.set('X-Debug-Country', country);
        response.headers.set('X-Debug-Locale', locale);

        return response;
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|assets|favicon.ico|robots.txt).*)',
    ],
};
