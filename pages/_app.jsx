/**
 * _app.jsx - Arabic
 * 
 * مكون التطبيق الرئيسي مع التخطيط العام
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    // التمرير للأعلى عند تغيير الصفحة
    useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    // حركات انتقال الصفحة
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <>
            <Head>
                {/* الوسوم الافتراضية */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                {/* العنوان والوصف الافتراضي */}
                <title>شركة رغوة للتنظيف والغسيل | طرابلس، ليبيا</title>
                <meta
                    name="description"
                    content="شركة رغوة للتنظيف والغسيل - الشركة رقم 1 في ليبيا. تنظيف المنازل، غسيل السجاد والمفروشات، غسيل السيارات (لوادجو). طرابلس، عين زارة."
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ar_LY" />
                <meta property="og:site_name" content="شركة رغوة للتنظيف والغسيل" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* لون الثيم */}
                <meta name="theme-color" content="#2563eb" />

                {/* Favicon */}
                <link rel="icon" href="/images/logo.png" />
            </Head>

            {/* رابط التخطي للوصول */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 
                   focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white 
                   focus:rounded-lg"
            >
                تخطي إلى المحتوى الرئيسي
            </a>

            {/* شريط التنقل */}
            <Navbar />

            {/* المحتوى الرئيسي */}
            <AnimatePresence mode="wait">
                <motion.main
                    id="main-content"
                    key={router.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    <Component {...pageProps} />
                </motion.main>
            </AnimatePresence>

            {/* التذييل */}
            <Footer />
        </>
    );
}
