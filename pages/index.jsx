/**
 * Home Page - تصميم بسيط ونظيف وتسويقي
 * مع شعار "لا مساومة على النظافة" وقسم "لماذا رغوة؟"
 */

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiPhone, HiCheck, HiSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ServicesCarousel from '../components/ServicesCarousel';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';

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
    { name: 'ليبيانا للهاتف المحمول', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Libyana_Logo.svg/2560px-Libyana_Logo.svg.png' },
    { name: 'شركة المدار الجديد', logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/0/0d/Al-Madar_Al-Jadeed_logo.svg/1200px-Al-Madar_Al-Jadeed_logo.svg.png' },
    { name: 'مصرف ليبيا المركزي', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Central_Bank_of_Libya_Logo.svg/1200px-Central_Bank_of_Libya_Logo.svg.png' },
    { name: 'شركة البريقة لتسويق النفط', logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/6/6f/Brega_Petroleum_Marketing_Company_Logo.png/220px-Brega_Petroleum_Marketing_Company_Logo.png' },
    { name: 'جامعة طرابلس', logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/8/8e/Tripoli_University_logo.png/220px-Tripoli_University_logo.png' },
    { name: 'الشركة العامة للكهرباء', logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/1/19/GECOL_logho.png/220px-GECOL_logho.png' },
];


export default function Home() {
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
                            <div className="flex flex-wrap gap-8 py-8 border-t border-gray-100">
                                <div>
                                    <p className="text-3xl font-black text-[#1565C0]">+1000</p>
                                    <p className="text-gray-500 font-medium">زبون سعيد</p>
                                </div>
                                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                                <div>
                                    <p className="text-3xl font-black text-[#1565C0]">+5</p>
                                    <p className="text-gray-500 font-medium">سنين خبرة</p>
                                </div>
                                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                                <div>
                                    <p className="text-3xl font-black text-[#1565C0]">24/7</p>
                                    <p className="text-gray-500 font-medium">دعم فني</p>
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

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                                className="group grayscale opacity-50 hover:opacity-100 transition-all duration-300 text-center"
                            >
                                <div className="w-24 h-24 mb-3 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 group-hover:shadow-md transition-shadow">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <span className="text-xs font-bold text-gray-600 group-hover:text-[#1565C0] block transition-colors">
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0D47A1] relative overflow-hidden">
                <BubbleDecoration count={10} />
                {/* Foam effect at the top of CTA - Matching the slate-50 background of the section above */}
                <ShapeDivider type="foam" position="top" color="#F8FAFC" height="100px" />

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                            جاهز تحجز؟
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                            تواصل معنا الآن واحصل على مكان نظيف ومتألق
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://wa.me/218920006270"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full 
                           bg-green-500 text-white font-bold text-lg
                           shadow-lg shadow-green-500/30 hover:shadow-green-500/50
                           transition-all duration-300"
                            >
                                <FaWhatsapp className="text-2xl" />
                                <span>واتساب</span>
                            </motion.a>

                            <motion.a
                                href="tel:+218920006270"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full 
                           bg-white text-[#1565C0] font-bold text-lg
                           shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <HiPhone className="text-xl" />
                                <span style={{ direction: 'ltr' }}>0920006270</span>
                            </motion.a>
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
