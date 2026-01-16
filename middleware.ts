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
        // @ts-ignore
        const country = request.geo?.country || 'FR';
        const locale = englishSpeakingCountries.includes(country) ? 'en' : 'fr';

        // e.g. incoming request is /products
        // The new URL is now /en/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|assets|favicon.ico|robots.txt).*)',
    ],
};
