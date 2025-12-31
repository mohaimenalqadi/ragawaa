/**
 * Home Page - تصميم بسيط ونظيف وتسويقي
 * مع شعار "لا مساومة على النظافة" وقسم "لماذا رغوة؟"
 */

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
    HiPhone,
    HiShieldCheck,
    HiOutlineSparkles,
    HiStar,
    HiSparkles,
    HiCheck,
    HiArrowLeft,
    HiCalendar
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesCarousel from '../components/ServicesCarousel';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';
import AnimatedCounter from '../components/AnimatedCounter';


// الخدمات الرئيسية
const services = [
    {
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
        title: 'تنظيف المنازل',
        description: 'تنظيف شامل بعاملات محترفات',
        price: '65 د.ل',
    },
    {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        title: 'غسيل المفروشات',
        description: 'سجاد، صالونات، وجلسات',
        price: 'من 30 د.ل',
    },
    {
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
        title: 'غسيل السيارات',
        description: 'لوادجو - غسيل ثلج جاف',
        price: 'من 50 د.ل',
    },
];

// لماذا رغوة؟ - المميزات التسويقية
const whyRaghwa = [
    {
        slogan: 'أسعار منافسة',
        icon: '💰',
        description: 'نوفر أفضل عروض التنظيف في طرابلس بأعلى جودة وأقل تكلفة تناسب ميزانيتك.',
        color: 'from-blue-600 to-blue-400',
    },
    {
        slogan: 'جودة عالمية',
        icon: '🏆',
        description: 'نستخدم أحدث المعدات والمواد الآمنة والفعالة لضمان نتائج مبهرة في كل مرة.',
        color: 'from-blue-700 to-blue-500',
    },
    {
        slogan: 'فريق محترف',
        icon: '🤝',
        description: 'عمالة مدربة وموثوقة تضمن لك الاتقان التام والأمانة والسرعة في الإنجاز.',
        color: 'from-blue-800 to-blue-600',
    },
];

// المميزات
const features = [
    { icon: '🏆', text: '#1 في ليبيا' },
    { icon: '✅', text: 'جودة مضمونة' },
    { icon: '🚀', text: 'خدمة سريعة' },
    { icon: '💰', text: 'أسعار منافسة' },
];

// صور الأعمال
const gallery = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
    'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
    'https://images.unsplash.com/photo-1765970101654-337b573142fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
];

// بيانات العملاء (حقيقية)
const clients = [
    { name: 'كافي افيرو', logo: '/images/avero-caffe.jpg' },
    { name: 'منتجع HT', logo: '/images/ht-group.jpg' },
    { name: 'الهاني مول', logo: '/images/Hani-Mall.jpg' },
    { name: 'Cinyps Station', logo: '/images/cinyps-station.jpg' },
];


export default function Home() {
    const [stats, setStats] = useState({ clients: 12304, experience: 8 });

    useEffect(() => {
        // حساب العداد الديناميكي: 12304 أساسي + 35 لكل يوم منذ الآن
        const startDate = new Date('2025-12-31');
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        setStats({
            clients: 12304 + (diffDays * 35),
            experience: 8
        });
    }, []);

    return (
        <>
            <Head>
                <title>رغوة | تنظيف وغسيل - طرابلس، ليبيا</title>
                <meta
                    name="description"
                    content="شركة رغوة للتنظيف والغسيل في طرابلس. لا مساومة على النظافة! تنظيف منازل، غسيل سجاد، غسيل سيارات."
                />
            </Head>

            {/* Hero */}
            <HeroSection />

            {/* ======= شريط الشعار الرئيسي ======= */}
            <section className="slogan-banner pb-40 pt-20 relative overflow-hidden">
                <BubbleDecoration count={12} color="bubble" />
                <div className="container-custom relative z-10 ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                    >

                        {/* Slogan */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center">
                            #لا_مساومة_على_النظافة
                        </h2>
                    </motion.div>
                </div>
                {/* Wavy bottom divider transition to Why Raghwa (White) */}
                <ShapeDivider type="wave" position="bottom" color="#ffffff" height="150px" />
            </section>



            {/* ======= قسم لماذا رغوة؟ - التصميم المطور ======= */}
            <section className="section-padding bg-white relative overflow-hidden pt-32 pb-48">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* الجانب الأيمن: المحتوى التسويقي */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                         bg-blue-50 text-[#1565C0] font-bold mb-6">
                                <HiSparkles className="animate-pulse" />
                                <span>لماذا نحن الأفضل في ليبيا؟</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                                الجودة التي <span className="text-[#1565C0]">تستحقها</span>،
                                <br /> الاحترافية التي <span className="text-[#1565C0]">تلمسها</span>
                            </h2>

                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                                في رغوة، لا نقدم مجرد تنظيف عادي. نحن نصنع بيئة صحية ومريحة لك ولعائلتك باستخدام أحدث التقنيات وأفضل الكوادر المدربة، لنضمن لك تجربة نظافة تفوق التوقعات.
                            </p>

                            {/* Trust Pillars Grid */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {whyRaghwa.map((item, index) => (
                                    <motion.div
                                        key={item.slogan}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${item.color} shadow-lg text-white shrink-0`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{item.slogan}</h3>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-12 py-10 border-t border-gray-100">
                                <div>
                                    <div className="text-4xl md:text-5xl font-black text-[#1565C0] flex items-center gap-1">
                                        <AnimatedCounter value={stats.clients} suffix="+" />
                                    </div>
                                    <p className="text-gray-500 font-bold mt-2">عميل سعيد يثق بنا</p>
                                </div>
                                <div className="w-px h-16 bg-gray-200 hidden sm:block" />
                                <div>
                                    <div className="text-4xl md:text-5xl font-black text-[#1565C0] flex items-center gap-1">
                                        <AnimatedCounter value={stats.experience} suffix="+" />
                                    </div>
                                    <p className="text-gray-500 font-bold mt-2">سنوات من الإتقان</p>
                                </div>
                                <div className="w-px h-16 bg-gray-200 hidden lg:block" />
                                <div>
                                    <div className="text-4xl md:text-5xl font-black text-[#1565C0] flex items-center gap-1">
                                        <span className="font-black">24/7</span>
                                    </div>
                                    <p className="text-gray-500 font-bold mt-2">دعم فني مباشر</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* الجانب الأيسر: الصورة والرسومات */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Decorative Background Circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse" />
                                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
                            </div>

                            {/* Main Image with Frame */}
                            <div className="relative z-10 p-4">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1742483359033-13315b247c74?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="احترافية رغوة في التنظيف"
                                        className="w-full h-full object-cover aspect-[4/5]"
                                    />
                                </div>

                                {/* Floating Card 1 */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -right-8 top-1/4 glass p-4 rounded-2xl shadow-xl z-20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                            <HiCheck />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">نظافة مضمونة</p>
                                            <p className="text-[10px] text-gray-500">جودة لا تضاهى</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Card 2 */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    className="absolute -left-8 bottom-1/4 glass p-4 rounded-2xl shadow-xl z-20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                            <HiSparkles />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">أحدث التقنيات</p>
                                            <p className="text-[10px] text-gray-500">معدات عالمية</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Wave transition to next section */}
                <ShapeDivider type="wave" position="bottom" color="#F8FAFC" height="150px" />
            </section>

            {/* ======= قسم الخدمات التفاعلي ======= */}
            <div className="bg-[#F8FAFC] relative pt-32">
                <ServicesCarousel />
                {/* Wave transition to Gallery */}
            </div>

            {/* Gallery */}
            <section className="section-padding bg-white relative pt-32 pb-48">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            من أعمالنا
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">نفتخر بتقديم أفضل خدمات النظافة في جميع أنحاء طرابلس</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm"
                            >
                                <img
                                    src={image}
                                    alt={`عمل ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/portfolio" className="text-[#1565C0] font-bold hover:underline">
                            شاهد المزيد ←
                        </Link>
                    </div>
                </div>
                {/* Wave transition to next section */}
                <ShapeDivider type="wave" position="bottom" color="#F8FAFC" height="150px" />
            </section>

            {/* ======= قسم عملاؤنا ======= */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
                        >
                            نعتز بثقتهم
                        </motion.h2>
                        <p className="text-gray-600 font-medium">شركاء النجاح وأبرز عملائنا في طرابلس</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="group transition-all duration-500 text-center"
                            >
                                <div className="w-40 h-40 md:w-56 md:h-56 mb-6 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center p-8 md:p-12 group-hover:shadow-[0_40px_80px_rgba(21,101,192,0.15)] group-hover:border-blue-100 transition-all duration-500 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 relative z-10"
                                    />
                                </div>
                                <span className="text-base md:text-xl font-black text-gray-800 group-hover:text-[#1565C0] block transition-colors tracking-tight">
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-[#0D47A1] slogan-banner relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#0D47A1] opacity-50" />
                <BubbleDecoration count={15} color="bubble" />

                {/* Top Divider */}
                <ShapeDivider type="foam" position="top" color="#F8FAFC" height="120px" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative background icon */}
                        <div className="absolute -bottom-10 -left-10 text-white/5 text-[15rem] rotate-12 pointer-events-none">
                            <HiCalendar />
                        </div>

                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-400/20 text-blue-200 text-sm font-black mb-8 border border-blue-400/30 shadow-xl"
                            >
                                <HiSparkles className="text-xl" />
                                <span>ابدأ رحلة التميز الآن</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                                جاهز لتجربة <br className="md:hidden" />
                                <span className="text-blue-300">نظافة لا تبارى؟</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                انضم إلى آلاف العملاء الراضين في طرابلس واستمتع بخدمة تنظيف احترافية تليق بمقامك.
                            </p>

                            <div className="flex flex-wrap gap-6 justify-center mt-12">
                                <motion.a
                                    href="https://wa.me/218920006270"
                                    target="_blank"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-3 px-12 py-5 rounded-full 
                               bg-green-500 text-white font-black text-2xl
                               shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:shadow-green-500/50
                               transition-all duration-300 group"
                                >
                                    <FaWhatsapp className="text-3xl group-hover:rotate-12 transition-transform" />
                                    <span>احجز عبر واتساب</span>
                                </motion.a>

                                <motion.a
                                    href="tel:+218920006270"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-3 px-12 py-5 rounded-full 
                               bg-white/10 backdrop-blur-md text-white font-black text-2xl
                               border-2 border-white/20 shadow-xl hover:bg-white hover:text-[#0D47A1] transition-all duration-300"
                                >
                                    <HiPhone className="text-2xl" />
                                    <span style={{ direction: 'ltr' }}>0920006270</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Location Bar */}
            <section className="py-8 bg-gray-900 text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
                        <div className="flex items-center gap-4">
                            {/* Logo in footer bar */}
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1">
                                <img
                                    src="/images/logo.png"
                                    alt="شعار رغوة"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-lg">📍 طرابلس، عين زارة - المشتل</p>
                                <p className="text-gray-400">@ragawaa.ly</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-green-400 font-medium">متوفرين الآن</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
