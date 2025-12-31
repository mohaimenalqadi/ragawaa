import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp, FaPlay } from 'react-icons/fa';
import { HiStar, HiLocationMarker, HiHeart, HiCurrencyDollar, HiSparkles, HiPhone } from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';
import ShapeDivider from './ShapeDivider';
import AnimatedCounter from './AnimatedCounter';
import BubbleDecoration from './BubbleDecoration';

const heroImages = [
    'https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1765970101654-337b573142fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1694678505383-676d78ea3b96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [clientCount, setClientCount] = useState(12304);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        // حساب العداد الديناميكي: 12304 أساسي + 35 لكل يوم منذ الآن
        const startDate = new Date('2025-12-31');
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setClientCount(12304 + (diffDays * 35));

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#0D47A1]">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Professional Cleaning Service Background"
                            fill
                            priority={true}
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Overlay أزرق متدرج */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/95 via-[#1565C0]/85 to-transparent z-10" />
            </div>

            {/* Bubbles decoration */}
            <BubbleDecoration count={8} />

            {/* Content */}
            <div className="container-custom relative z-30 pt-32 pb-48">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            متوفرين الآن • طرابلس، ليبيا
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white 
                       leading-tight mb-8"
                    >
                        نظافة تبهرك
                        <br />
                        <div className="flex items-center gap-4">
                            <span className="text-blue-400 drop-shadow-2xl">بمعايير عالمية</span>
                            <HiSparkles className="text-yellow-400 animate-pulse hidden md:block" />
                        </div>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed font-medium"
                    >
                        تنظيف منازل • غسيل سجاد • غسيل سيارات • مكافحة آفات
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/218920006270"
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-12 py-5 rounded-full 
                         bg-green-500 text-white font-black text-xl
                         shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:shadow-green-500/50
                         transition-all duration-300 group"
                        >
                            <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
                            <span>احجز عبر واتساب</span>
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            href="tel:+218920006270"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-12 py-5 rounded-full 
                         bg-white/10 backdrop-blur-md text-white font-black text-xl
                         border-2 border-white/20 shadow-xl hover:bg-white hover:text-[#0D47A1] transition-all duration-300"
                        >
                            <HiPhone className="text-xl" />
                            <span>تواصل معنا فوراً</span>
                        </motion.a>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-20 flex flex-wrap items-stretch gap-6"
                    >
                        {/* Stat Card 1 */}
                        <div className="group bg-white/10 backdrop-blur-xl p-7 rounded-[2.5rem] border border-white/20 flex flex-col gap-3 min-w-[240px] hover:bg-white/20 transition-all duration-500 shadow-2xl overflow-hidden relative">
                            {/* Decorative Icon Background */}
                            <div className="absolute -top-4 -right-4 p-4 opacity-5 bg-white/20 rounded-full scale-[3] group-hover:scale-[3.5] group-hover:rotate-12 transition-transform duration-700">
                                <HiHeart />
                            </div>

                            <div className="flex items-center gap-4 mb-1 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-500 shadow-lg">
                                    <HiHeart className="text-2xl" />
                                </div>
                                <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                                    <AnimatedCounter value={clientCount} suffix="+" />
                                </span>
                            </div>
                            <span className="text-white/80 font-bold text-lg relative z-10">ثقة متجددة من عملائنا</span>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="group bg-white/10 backdrop-blur-xl p-7 rounded-[2.5rem] border border-white/20 flex flex-col gap-3 min-w-[240px] hover:bg-white/20 transition-all duration-500 shadow-2xl overflow-hidden relative">
                            {/* Decorative Icon Background */}
                            <div className="absolute -top-4 -right-4 p-4 opacity-5 bg-white/20 rounded-full scale-[3] group-hover:scale-[3.5] group-hover:rotate-12 transition-transform duration-700">
                                <HiLocationMarker />
                            </div>

                            <div className="flex items-center gap-4 mb-1 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 backdrop-blur-md flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-white transition-colors duration-500 shadow-lg">
                                    <HiLocationMarker className="text-2xl" />
                                </div>
                                <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                                    <AnimatedCounter value={1} suffix="#" />
                                </span>
                            </div>
                            <span className="text-white/80 font-bold text-lg relative z-10">الوجهة الأولى في ليبيا</span>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="group bg-white/10 backdrop-blur-xl p-7 rounded-[2.5rem] border border-white/20 flex flex-col gap-3 min-w-[240px] hover:bg-white/20 transition-all duration-500 shadow-2xl overflow-hidden relative">
                            {/* Decorative Icon Background */}
                            <div className="absolute -top-4 -right-4 p-4 opacity-5 bg-white/20 rounded-full scale-[3] group-hover:scale-[3.5] group-hover:rotate-12 transition-transform duration-700">
                                <HiCurrencyDollar />
                            </div>

                            <div className="flex items-center gap-4 mb-1 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400 group-hover:text-white transition-colors duration-500 shadow-lg">
                                    <HiCurrencyDollar className="text-2xl" />
                                </div>
                                <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                                    <AnimatedCounter value={65} suffix=" د.ل" />
                                </span>
                            </div>
                            <span className="text-white/80 font-bold text-lg relative z-10">استثمار في راحتكم</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
