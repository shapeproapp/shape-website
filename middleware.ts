import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['fr', 'en'];
const defaultLocale = 'fr';
const englishSpeakingCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE'];

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip Open Graph image file explicitly
    if (pathname.includes('opengraph-image')) {
        return NextResponse.next();
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // Allow overriding country for testing purposes via ?test_country=US
        const testCountry = request.nextUrl.searchParams.get('test_country');

        const rawCountry = testCountry ||
            request.headers.get('x-vercel-ip-country') ||
            request.geo?.country ||
            'FR';
        const country = rawCountry.toUpperCase();

        const locale = englishSpeakingCountries.includes(country) ? 'en' : 'fr';

        // e.g. incoming request is /products
        // The new URL is now /en/products
        const url = new URL(
            `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
            request.url
        );

        // Preserve other search params but remove test_country to clean up URL
        request.nextUrl.searchParams.forEach((value, key) => {
            if (key !== 'test_country') url.searchParams.set(key, value);
        });

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
        '/((?!_next|assets|favicon.ico|robots.txt|opengraph-image.*).*)',
    ],
};
