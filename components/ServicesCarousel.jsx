/**
 * ServicesCarousel - قسم الخدمات التفاعلي
 * كاروسيل متحرك مع تأثير التنظيف التفاعلي
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight, HiCheck, HiSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

// بيانات الخدمات
const servicesData = [
    {
        id: 'home-cleaning',
        title: 'تنظيف المنازل والشقق',
        slogan: 'جودة عالمية وإتقان تام 🏠',
        description: 'نقدم خدمة تنظيف شاملة للمنازل والشقق بعاملات محترفات ومدربات. نتولى جميع الأسطح والأرضيات والحمامات والمطابخ. خدمة نجي لعندك مع توصيل العاملات.',
        features: [
            'تنظيف جميع الأسطح والأثاث',
            'تنظيف الأرضيات والسيراميك',
            'تنظيف الحمامات والمطابخ',
            'ترتيب الغرف والصالات',
            'تنظيف النوافذ من الداخل',
            'إزالة الغبار والأوساخ',
        ],
        price: '65 د.ل',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
        cleanText: 'جودة عالمية في بيتك! 🏠',
        color: '#1565C0',
        cursorIcon: '🧽', // Sponge for home
    },
    {
        id: 'sofa-cleaning',
        title: 'غسيل الصالونات والمفروشات',
        slogan: 'أسعار منافسة وجودة مضمونة ✨',
        description: 'غسيل احترافي للصالونات والجلسات وفرش السرير والستائر. نستخدم أحدث المعدات والمواد الآمنة لإزالة البقع والأوساخ العنيدة.',
        features: [
            'غسيل الصالونات والكنب',
            'غسيل الجلسات العربية',
            'غسيل فرش السرير',
            'غسيل الستائر والبطانيات',
            'إزالة البقع الصعبة',
            'تعقيم وتعطير',
        ],
        price: 'من 50 د.ل',
        image: '/images/sofa.png',
        cleanText: 'صالونك يرجع جديد! 🛋️',
        color: '#1565C0',
        cursorIcon: '🧹', // Towel/Cleaning cursor
    },
    {
        id: 'carpet-cleaning',
        title: 'غسيل السجاد والموكيت',
        slogan: 'تنظيف عميق وتجفيف سريع 🧹',
        description: 'غسيل السجاد بجميع الأحجام والأنواع. إزالة البقع والأوساخ العميقة مع التجفيف السريع والتعقيم الكامل.',
        features: [
            'غسيل جميع أنواع السجاد',
            'إزالة البقع العنيدة',
            'تجفيف سريع',
            'تعقيم وتعطير',
            'توصيل للمنزل مجاناً',
            'ضمان الجودة',
        ],
        price: 'من 30 د.ل',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
        cleanText: 'أفضل تنظيف لسجادك! 🧹',
        color: '#1565C0',
        cursorIcon: '🧼',
    },
    {
        id: 'car-wash',
        title: 'غسيل السيارات - لوادجو',
        slogan: 'أقوى لوادجو في ليبيا! 🚗',
        description: 'غسيل ثلج جاف احترافي للسيارات. باقات VIP، غسيل داخلي وخارجي، بولش وتلميع، ونانو سيراميك لحماية طويلة الأمد.',
        features: [
            'غسيل ثلج جاف',
            'باقات VIP متعددة',
            'غسيل داخلي وخارجي',
            'بولش وتلميع',
            'نانو سيراميك',
            'نجي لعندك!',
        ],
        price: 'من 50 د.ل',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
        cleanText: 'سيارتك تلمع معنا! 🚗',
        color: '#1565C0',
        cursorIcon: '🧽',
    },
    {
        id: 'pest-control',
        title: 'مكافحة الحشرات والآفات',
        slogan: 'فريق محترف ونتائج أكيدة 🛡️',
        description: 'مع رغوة وداعاً لجميع الآفات! نستخدم أحدث المبيدات الآمنة والفعالة للقضاء على جميع أنواع الحشرات.',
        features: [
            'صراصير وبق الفراش',
            'نمل وذباب',
            'بعوض وناموس',
            'عقارب وثعابين',
            'مواد آمنة للأطفال',
            'ضمان النتيجة',
        ],
        price: 'اتصل للسعر',
        image: '/images/pest-control.png',
        cleanText: 'وداعاً للحشرات! 🛡️',
        color: '#1565C0',
        cursorIcon: '🛡️',
    },
];

export default function ServicesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [cleanProgress, setCleanProgress] = useState(0);
    const [sparkles, setSparkles] = useState([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const currentService = servicesData[currentIndex];

    // التبديل التلقائي
    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % servicesData.length);
            setCleanProgress(0);
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovering]);

    // الانتقال للخدمة التالية
    const nextService = () => {
        setCurrentIndex((prev) => (prev + 1) % servicesData.length);
        setCleanProgress(0);
    };

    // الانتقال للخدمة السابقة
    const prevService = () => {
        setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
        setCleanProgress(0);
    };

    // تأثير التنظيف عند تحريك الماوس
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePos({ x: e.clientX, y: e.clientY });

        // زيادة التقدم في التنظيف
        setCleanProgress((prev) => Math.min(prev + 0.5, 100));

        // إضافة لمعان
        if (Math.random() > 0.7) {
            const newSparkle = {
                id: Date.now(),
                x,
                y,
            };
            setSparkles((prev) => [...prev.slice(-10), newSparkle]);
        }
    };

    // إزالة اللمعان بعد فترة
    useEffect(() => {
        if (sparkles.length > 0) {
            const timeout = setTimeout(() => {
                setSparkles((prev) => prev.slice(1));
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [sparkles]);

    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-blue-100 text-[#1565C0] font-bold mb-4"
                    >
                        <HiSparkles />
                        خدماتنا المميزة
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                        اكتشف خدماتنا
                    </h2>
                    <p className="text-gray-600 text-lg">اسحب أو اضغط الأسهم للتنقل</p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevService}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       w-14 h-14 rounded-full bg-white shadow-xl 
                       flex items-center justify-center text-gray-700
                       hover:bg-[#1565C0] hover:text-white transition-all
                       -mr-7 hidden lg:flex"
                    >
                        <HiArrowRight className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextService}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       w-14 h-14 rounded-full bg-white shadow-xl 
                       flex items-center justify-center text-gray-700
                       hover:bg-[#1565C0] hover:text-white transition-all
                       -ml-7 hidden lg:flex"
                    >
                        <HiArrowLeft className="w-6 h-6" />
                    </button>

                    {/* Main Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentService.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white 
                         rounded-3xl shadow-xl overflow-hidden"
                        >
                            {/* Right Side - Service Info */}
                            <div className="p-8 lg:p-12 order-2 lg:order-1">
                                {/* Price Badge */}
                                <div
                                    className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4"
                                    style={{ backgroundColor: currentService.color }}
                                >
                                    {currentService.price}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                                    {currentService.title}
                                </h3>

                                {/* Slogan */}
                                <p
                                    className="text-xl font-bold mb-4"
                                    style={{ color: currentService.color }}
                                >
                                    {currentService.slogan}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {currentService.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {currentService.features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <HiCheck
                                                className="w-5 h-5 flex-shrink-0"
                                                style={{ color: currentService.color }}
                                            />
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.a
                                    href="https://wa.me/218920006270"
                                    target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
                             bg-green-500 text-white font-bold text-lg
                             shadow-lg shadow-green-500/30 hover:shadow-green-500/50
                             transition-all"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    احجز الآن
                                </motion.a>
                            </div>

                            {/* Left Side - Interactive Image */}
                            <div
                                ref={containerRef}
                                className="relative h-80 lg:h-[500px] order-1 lg:order-2 overflow-hidden cursor-none"
                                style={{
                                    background: `linear-gradient(135deg, ${currentService.color}20, ${currentService.color}10)`
                                }}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => {
                                    setIsHovering(false);
                                    setCleanProgress(0);
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                {/* Custom Cursor - Towel/Sponge Icon */}
                                {isHovering && (
                                    <motion.div
                                        className="fixed pointer-events-none z-[100] flex items-center justify-center p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-xl"
                                        style={{
                                            left: mousePos.x,
                                            top: mousePos.y,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <div className="text-4xl filter drop-shadow-lg animate-bounce">
                                            {currentService.cursorIcon}
                                        </div>
                                    </motion.div>
                                )}
                                {/* Clean Text Overlay */}
                                <div className="absolute top-6 left-6 right-6 z-10">
                                    <p
                                        className="text-lg font-bold text-center py-3 px-4 rounded-xl 
                               bg-white/90 backdrop-blur-sm shadow-lg"
                                        style={{ color: currentService.color }}
                                    >
                                        {currentService.cleanText}
                                        <span className="block text-sm text-gray-500 font-normal mt-1">
                                            حرّك الماوس للتنظيف! 🧽
                                        </span>
                                    </p>
                                </div>

                                {/* Progress Bar */}
                                {isHovering && (
                                    <div className="absolute bottom-6 left-6 right-6 z-10">
                                        <div className="bg-white/80 rounded-full p-1">
                                            <div
                                                className="h-2 rounded-full transition-all duration-100"
                                                style={{
                                                    width: `${cleanProgress}%`,
                                                    backgroundColor: currentService.color
                                                }}
                                            />
                                        </div>
                                        {cleanProgress >= 100 && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-center mt-2 font-bold text-green-600"
                                            >
                                                ✨ ممتاز! صار نظيف!
                                            </motion.p>
                                        )}
                                    </div>
                                )}

                                {/* Main Image */}
                                <motion.img
                                    src={currentService.image}
                                    alt={currentService.title}
                                    className="w-full h-full object-cover"
                                    style={{
                                        filter: `brightness(${0.7 + (cleanProgress / 100) * 0.5}) 
                             saturate(${0.8 + (cleanProgress / 100) * 0.4})`
                                    }}
                                />

                                {/* Sparkle Effects */}
                                {sparkles.map((sparkle) => (
                                    <motion.div
                                        key={sparkle.id}
                                        initial={{ scale: 0, opacity: 1 }}
                                        animate={{ scale: 1.5, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute pointer-events-none"
                                        style={{
                                            left: sparkle.x,
                                            top: sparkle.y,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <HiSparkles
                                            className="w-6 h-6"
                                            style={{ color: currentService.color }}
                                        />
                                    </motion.div>
                                ))}

                                {/* Cleaning Overlay Effect */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at center, transparent 0%, ${currentService.color}10 100%)`,
                                        opacity: cleanProgress / 100,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {servicesData.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setCleanProgress(0);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-10'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                style={{
                                    backgroundColor: index === currentIndex ? currentService.color : undefined,
                                }}
                            />
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-6 lg:hidden">
                        <button
                            onClick={prevService}
                            className="w-12 h-12 rounded-full bg-gray-100 flex items-center 
                         justify-center text-gray-700 hover:bg-[#1565C0] 
                         hover:text-white transition-all"
                        >
                            <HiArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextService}
                            className="w-12 h-12 rounded-full bg-gray-100 flex items-center 
                         justify-center text-gray-700 hover:bg-[#1565C0] 
                         hover:text-white transition-all"
                        >
                            <HiArrowLeft className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
