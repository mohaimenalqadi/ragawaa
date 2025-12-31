/**
 * _document.jsx
 * 
 * Custom Document component for Next.js.
 * Adds custom HTML structure with RTL support for Arabic.
 */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ar" dir="rtl">
            <Head>
                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

                {/* Google Fonts - Arabic fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap"
                    rel="stylesheet"
                />

                {/* Manifest */}
                <link rel="manifest" href="/site.webmanifest" />

                {/* Microsoft Tiles */}
                <meta name="msapplication-TileColor" content="#1e40af" />

                {/* Schema.org markup for organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            'name': 'شركة رغوة للتنظيف والغسيل',
                            'description': 'الشركة رقم 1 في ليبيا لخدمات التنظيف والغسيل - تنظيف المنازل، غسيل السجاد والمفروشات، غسيل السيارات',
                            'url': 'https://ragawaa.ly',
                            'telephone': '+218920006270',
                            'email': 'info@ragawaa.ly',
                            'address': {
                                '@type': 'PostalAddress',
                                'streetAddress': 'عين زارة - المشتل',
                                'addressLocality': 'طرابلس',
                                'addressCountry': 'LY',
                            },
                            'geo': {
                                '@type': 'GeoCoordinates',
                                'latitude': '32.8872',
                                'longitude': '13.1913',
                            },
                            'openingHours': 'Sa-Th 08:00-20:00',
                            'priceRange': '$$',
                            'image': 'https://ragawaa.ly/images/logo.png',
                            'sameAs': [
                                'https://facebook.com/ragawaa.ly',
                                'https://instagram.com/ragawaa.ly',
                                'https://tiktok.com/@ragawaa.ly',
                            ],
                            'serviceArea': {
                                '@type': 'GeoCircle',
                                'geoMidpoint': {
                                    '@type': 'GeoCoordinates',
                                    'latitude': '32.8872',
                                    'longitude': '13.1913',
                                },
                                'geoRadius': '50000',
                            },
                            'hasOfferCatalog': {
                                '@type': 'OfferCatalog',
                                'name': 'خدمات التنظيف والغسيل',
                                'itemListElement': [
                                    {
                                        '@type': 'Offer',
                                        'itemOffered': {
                                            '@type': 'Service',
                                            'name': 'تنظيف المنازل والشقق',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        'itemOffered': {
                                            '@type': 'Service',
                                            'name': 'غسيل السجاد والمفروشات',
                                        },
                                    },
                                    {
                                        '@type': 'Offer',
                                        'itemOffered': {
                                            '@type': 'Service',
                                            'name': 'غسيل السيارات - لوادجو',
                                        },
                                    },
                                ],
                            },
                        }),
                    }}
                />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
