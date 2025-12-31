/**
 * Portfolio Page - معرض الأعمال بسيط
 */

import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';

const portfolio = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
        title: 'تنظيف شقة',
        category: 'تنظيف',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1765970101654-337b573142fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'غسيل سجاد',
        category: 'غسيل',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
        title: 'غسيل سيارة',
        category: 'لوادجو',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'تنظيف مطبخ',
        category: 'تنظيف',
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'تنظيف فيلا',
        category: 'تنظيف',
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
        title: 'غسيل صالون',
        category: 'غسيل',
    },
];

const categories = ['الكل', 'تنظيف', 'غسيل', 'لوادجو'];

export default function Portfolio() {
    const [filter, setFilter] = useState('الكل');
    const [selected, setSelected] = useState(null);

    const filtered = filter === 'الكل'
        ? portfolio
        : portfolio.filter(item => item.category === filter);

    return (
        <>
            <Head>
                <title>أعمالنا | رغوة - تنظيف وغسيل</title>
                <meta name="description" content="شاهد نماذج من أعمال شركة رغوة للتنظيف والغسيل." />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-16 bg-[#1565C0] relative overflow-hidden">
                <BubbleDecoration count={5} />
                <div className="container-custom text-center mb-7 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#FFD700] drop-shadow-md">أعمالنا</h1>
                    <p className="text-xl text-white/80">شوف الفرق بعينك</p>
                </div>
                {/* Wavy transition to content */}
                <ShapeDivider type="wave" position="bottom" color="#ffffff" height="120px" />
            </section>

            {/* Filter & Gallery */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all ${filter === cat
                                    ? 'bg-[#1565C0] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        <AnimatePresence>
                            {filtered.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setSelected(item)}
                                    className="aspect-square rounded-xl overflow-hidden cursor-pointer 
                             shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    >
                        <button
                            className="absolute top-4 left-4 p-2 text-white hover:text-gray-300"
                            onClick={() => setSelected(null)}
                        >
                            <HiX className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={selected.image}
                            alt={selected.title}
                            className="max-w-full max-h-[85vh] rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute bottom-8 text-center text-white">
                            <h3 className="text-xl font-bold">{selected.title}</h3>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
