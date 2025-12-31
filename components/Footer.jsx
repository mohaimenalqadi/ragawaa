/**
 * Footer - تصميم بسيط ونظيف
 */

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiClock } from 'react-icons/hi';

const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'من نحن', href: '/about' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'تواصل معنا', href: '/contact' },
];

const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/218920006270', label: 'واتساب' },
    { icon: FaFacebookF, href: 'https://facebook.com/ragawaa.ly', label: 'فيسبوك' },
    { icon: FaInstagram, href: 'https://instagram.com/ragawaa.ly', label: 'إنستغرام' },
    { icon: FaTiktok, href: 'https://tiktok.com/@ragawaa.ly', label: 'تيك توك' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo & About */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#1565C0] flex items-center justify-center">
                                <span className="text-white font-black text-xl">ر</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-black">رغوة</h3>
                                <p className="text-xs text-gray-400">للتنظيف والغسيل</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            الشركة رقم 1 في ليبيا لخدمات التنظيف والغسيل.
                            جودة عالية وأسعار منافسة.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400">
                                <HiLocationMarker className="w-5 h-5 text-[#1565C0] mt-0.5" />
                                <span>طرابلس، عين زارة - المشتل</span>
                            </li>
                            <li>
                                <a
                                    href="tel:+218920006270"
                                    className="flex items-center gap-3 text-gray-400 
                             hover:text-white transition-colors"
                                >
                                    <HiPhone className="w-5 h-5 text-[#1565C0]" />
                                    <span style={{ direction: 'ltr' }}>0920006270</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <HiClock className="w-5 h-5 text-[#1565C0]" />
                                <span>السبت - الخميس: 8 ص - 8 م</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">تابعنا</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center 
                             text-gray-400 hover:bg-[#1565C0] hover:text-white 
                             transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6 flex flex-col md:flex-row items-center 
                       justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} رغوة. جميع الحقوق محفوظة 🇱🇾</p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>متوفرين الآن</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
