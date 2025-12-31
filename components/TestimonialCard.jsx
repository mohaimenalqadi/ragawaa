/**
 * TestimonialCard Component - Arabic
 * 
 * بطاقة شهادة العميل مع الكاروسيل
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronRight, HiChevronLeft, HiStar } from 'react-icons/hi';

// بطاقة الشهادة الفردية
export function TestimonialCard({ name, role, quote, rating = 5, image }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-soft p-8 h-full flex flex-col"
        >
            {/* التقييم */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <HiStar
                        key={i}
                        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
                    />
                ))}
            </div>

            {/* الاقتباس */}
            <blockquote className="text-gray-700 leading-relaxed flex-grow text-lg">
                "{quote}"
            </blockquote>

            {/* معلومات العميل */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 
                        flex items-center justify-center text-white font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}

// كاروسيل الشهادات
export default function TestimonialCarousel({ testimonials = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // التدوير التلقائي
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    // التنقل
    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToIndex = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // حركات الانتقال
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    if (!testimonials.length) return null;

    return (
        <div className="relative">
            {/* الشهادات */}
            <div className="relative overflow-hidden min-h-[300px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="w-full max-w-2xl mx-auto"
                    >
                        <TestimonialCard {...testimonials[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* أزرار التنقل */}
            <div className="flex items-center justify-center gap-4 mt-8">
                {/* زر السابق */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center 
                     justify-center text-gray-600 hover:text-primary-600 
                     hover:shadow-xl transition-all"
                    aria-label="الشهادة التالية"
                >
                    <HiChevronRight className="w-6 h-6" />
                </motion.button>

                {/* مؤشرات النقاط */}
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`الشهادة ${index + 1}`}
                        />
                    ))}
                </div>

                {/* زر التالي */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToPrevious}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center 
                     justify-center text-gray-600 hover:text-primary-600 
                     hover:shadow-xl transition-all"
                    aria-label="الشهادة السابقة"
                >
                    <HiChevronLeft className="w-6 h-6" />
                </motion.button>
            </div>
        </div>
    );
}
