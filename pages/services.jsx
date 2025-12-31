/**
 * Services Page - خدماتنا
 */

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheck, HiSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';

const services = [
    {
        id: 'home',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
        title: 'تنظيف المنازل والشقق',
        slogan: 'جودة عالمية وإتقان تام',
        description: 'تنظيف شامل للمنازل والشقق بعاملات محترفات ومدربات.',
        price: '65 د.ل',
        features: ['تنظيف جميع الغرف', 'تنظيف الحمامات والمطابخ', 'تنظيف الأرضيات', 'ترتيب كامل'],
    },
    {
        id: 'carpet',
        image: 'https://images.unsplash.com/photo-1765970101654-337b573142fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'غسيل السجاد والمفروشات',
        slogan: 'أسعار منافسة وجودة مضمونة',
        description: 'غسيل احترافي للسجاد والصالونات والجلسات بأحدث المعدات.',
        price: 'من 30 د.ل',
        features: ['غسيل السجاد', 'غسيل الصالونات', 'غسيل الجلسات', 'إزالة البقع'],
    },
    {
        id: 'car',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
        title: 'غسيل السيارات - لوادجو',
        slogan: 'أقوى لوادجو في ليبيا 🚗',
        description: 'غسيل ثلج جاف، باقات VIP، غسيل داخلي وخارجي.',
        price: 'من 50 د.ل',
        features: ['غسيل ثلج جاف', 'باقات VIP', 'غسيل داخلي وخارجي', 'نانو سيراميك'],
    },
    {
        id: 'pest',
        image: '/images/pest-control.png',
        title: 'مكافحة الحشرات والآفات',
        slogan: 'فريق محترف ونتائج أكيدة',
        description: 'مع رغوة وداعاً لجميع الآفات! مواد آمنة للأطفال والبيئة.',
        price: 'اتصل للسعر',
        features: ['صراصير', 'بق الفراش', 'نمل', 'ذباب وبعوض'],
        isNew: true,
    },
];

export default function Services() {
    return (
        <>
            <Head>
                <title>خدماتنا | رغوة - لا مساومة على النظافة</title>
                <meta name="description" content="خدمات شركة رغوة: تنظيف المنازل، غسيل السجاد، غسيل السيارات، مكافحة الحشرات." />
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
                        <HiSparkles className="text-xl" />
                        <span>معايير عالمية</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
                        خدماتنا <span className="text-blue-300">الاحترافية</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        نقدم لكم باقة متكاملة من خدمات التنظيف والغسيل التي تلبي كافة احتياجاتكم بأعلى مستويات الإتقان.
                    </p>
                </div>

                <ShapeDivider type="foam" position="bottom" color="#ffffff" height="150px" />
            </section>

            {/* Services */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid lg:grid-cols-2 gap-10 items-center"
                            >
                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover"
                                        />
                                        {service.isNew && (
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full 
                                     bg-green-500 text-white text-sm font-bold">
                                                جديد! 🆕
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 px-4 py-2 rounded-full 
                                   bg-[#1565C0] text-white font-bold">
                                            {service.price}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <p className="text-[#1565C0] font-bold mb-2">{service.slogan}</p>
                                    <h2 className="text-3xl font-black text-gray-900 mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-gray-700">
                                                <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="https://wa.me/218920006270"
                                        target="_blank"
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
                               bg-green-500 text-white font-bold hover:bg-green-600 
                               transition-colors shadow-lg shadow-green-500/30"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        احجز الآن
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}
