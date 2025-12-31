/**
 * Contact Page - تواصل معنا بسيط
 */

import Head from 'next/head';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';

export default function Contact() {
    return (
        <>
            <Head>
                <title>تواصل معنا | رغوة - تنظيف وغسيل</title>
                <meta name="description" content="تواصل مع شركة رغوة للتنظيف والغسيل. اتصل على 0920006270." />
            </Head>

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-[#0D47A1] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#0D47A1] opacity-50" />
                <BubbleDecoration count={12} color="bubble" />

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-400/20 text-blue-200 text-sm font-black mb-6 border border-blue-400/30 shadow-xl"
                    >
                        <HiPhone className="text-xl" />
                        <span>دعم مباشر 24/7</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
                        تواصل <span className="text-blue-300">معنا</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        نحن دائماً هنا للاستماع لطلباتكم وتقديم الدعم اللازم لضمان أفضل خدمة تنظيف.
                    </p>
                </div>

                <ShapeDivider type="foam" position="bottom" color="#ffffff" height="150px" />
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        {/* Main CTA - WhatsApp */}
                        <motion.a
                            href="https://wa.me/218920006270"
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-between p-6 bg-green-500 rounded-2xl 
                         text-white mb-8 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                    <FaWhatsapp className="text-3xl" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">واتساب</p>
                                    <p className="text-white/80">أسرع طريقة للتواصل</p>
                                </div>
                            </div>
                            <span className="text-2xl">←</span>
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            href="tel:+218920006270"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-between p-6 bg-white rounded-2xl 
                         border-2 border-gray-100 mb-4 hover:border-[#1565C0] 
                         transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <HiPhone className="text-2xl text-[#1565C0]" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-gray-900">اتصل بنا</p>
                                    <p className="text-gray-500" style={{ direction: 'ltr' }}>0920006270</p>
                                </div>
                            </div>
                            <span className="text-2xl text-gray-400">←</span>
                        </motion.a>

                        {/* Second Phone */}
                        <motion.a
                            href="tel:+218934999035"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-between p-6 bg-white rounded-2xl 
                         border-2 border-gray-100 mb-8 hover:border-[#1565C0] 
                         transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <HiPhone className="text-2xl text-[#1565C0]" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-gray-900">الرقم الثاني</p>
                                    <p className="text-gray-500" style={{ direction: 'ltr' }}>0934999035</p>
                                </div>
                            </div>
                            <span className="text-2xl text-gray-400">←</span>
                        </motion.a>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 bg-gray-50 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <HiLocationMarker className="text-2xl text-[#1565C0]" />
                                    <h3 className="font-bold text-gray-900">الموقع</h3>
                                </div>
                                <p className="text-gray-600">المقر الرئيسي: طرابلس، عين زارة - المشتل</p>
                                <p className="text-gray-600 mt-1">المغسلة: السراج، طريق المشتل</p>
                            </motion.div>

                            {/* Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="p-6 bg-gray-50 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <HiClock className="text-2xl text-[#1565C0]" />
                                    <h3 className="font-bold text-gray-900">ساعات العمل</h3>
                                </div>
                                <p className="text-gray-600">السبت - الخميس: 8 ص - 8 م</p>
                                <p className="text-gray-600 mt-1">الجمعة: 2 م - 8 م</p>
                            </motion.div>
                        </div>

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <p className="text-gray-500 mb-4">تابعنا على</p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://facebook.com/ragawaa.ly"
                                    target="_blank"
                                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center 
                             text-white hover:bg-blue-700 transition-colors"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://instagram.com/ragawaa.ly"
                                    target="_blank"
                                    className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center 
                             text-white hover:bg-pink-600 transition-colors"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
