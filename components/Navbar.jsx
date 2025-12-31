/**
 * Navbar - تصميم بسيط ونظيف
 * أزرق وأبيض فقط
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'من نحن', href: '/about' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'تواصل معنا', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [router.pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md py-3'
                : 'bg-transparent py-4'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-[#1565C0] shadow-md' : 'bg-white/10'
                            }`}>
                            <img
                                src="/images/logo.png"
                                alt="شعار رغوة"
                                className="w-full h-full object-contain p-1"
                            />
                        </div>
                        <div>
                            <h1 className={`text-xl font-black transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                                }`}>
                                رغوة
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${router.pathname === link.href
                                    ? isScrolled
                                        ? 'text-[#1565C0] bg-blue-50'
                                        : 'text-white bg-white/20'
                                    : isScrolled
                                        ? 'text-gray-600 hover:text-[#1565C0] hover:bg-gray-50'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <motion.a
                            href="https://wa.me/218920006270"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full 
                         bg-green-500 text-white font-bold text-sm"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>واتساب</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'
                            }`}
                    >
                        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden bg-white rounded-xl mt-4 shadow-lg"
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`block px-4 py-3 rounded-lg font-medium ${router.pathname === link.href
                                            ? 'text-[#1565C0] bg-blue-50'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href="https://wa.me/218920006270"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 mt-4 px-4 py-3 
                             rounded-lg bg-green-500 text-white font-bold"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    واتساب
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
