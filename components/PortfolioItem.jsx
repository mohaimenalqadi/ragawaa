/**
 * PortfolioItem Component
 * 
 * Displays portfolio/gallery items with hover effects,
 * category labels, and lightbox-ready functionality.
 */

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiZoomIn, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

/**
 * Single Portfolio Item Card
 */
export default function PortfolioItem({
    image,
    title,
    category,
    description,
    index = 0,
    onClick,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden shadow-soft 
                 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={image || '/images/placeholder.jpg'}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Zoom Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-14 h-14 rounded-full bg-white/90 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <HiZoomIn className="w-6 h-6 text-primary-600" />
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-600 text-white 
                        text-sm font-medium opacity-0 group-hover:opacity-100 
                        transform -translate-y-2 group-hover:translate-y-0
                        transition-all duration-300">
                    {category}
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white
                      transform translate-y-full group-hover:translate-y-0
                      transition-transform duration-300">
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{description}</p>
            </div>
        </motion.div>
    );
}

/**
 * Portfolio Lightbox Modal
 */
export function PortfolioLightbox({
    isOpen,
    onClose,
    items,
    currentIndex,
    onNavigate
}) {
    if (!isOpen || !items.length) return null;

    const currentItem = items[currentIndex];

    const handlePrevious = () => {
        onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        onNavigate((currentIndex + 1) % items.length);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={onClose}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 
                       flex items-center justify-center text-white hover:bg-white/20
                       transition-colors z-10"
                        aria-label="Close lightbox"
                    >
                        <HiX className="w-6 h-6" />
                    </motion.button>

                    {/* Navigation Buttons */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                       bg-white/10 flex items-center justify-center text-white 
                       hover:bg-white/20 transition-colors"
                        aria-label="Previous image"
                    >
                        <HiChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                       bg-white/10 flex items-center justify-center text-white 
                       hover:bg-white/20 transition-colors"
                        aria-label="Next image"
                    >
                        <HiChevronRight className="w-6 h-6" />
                    </motion.button>

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative max-w-5xl max-h-[80vh] mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentItem.image || '/images/placeholder.jpg'}
                            alt={currentItem.title}
                            width={1200}
                            height={800}
                            className="object-contain max-h-[70vh] rounded-lg"
                        />

                        {/* Caption */}
                        <div className="text-center mt-4 text-white">
                            <h3 className="text-xl font-bold">{currentItem.title}</h3>
                            <p className="text-white/70 mt-1">{currentItem.category}</p>
                        </div>

                        {/* Counter */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 
                            text-white/60 text-sm">
                            {currentIndex + 1} / {items.length}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/**
 * Portfolio Grid - Grid layout for portfolio items
 */
export function PortfolioGrid({ items, columns = 3 }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const gridCols = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    };

    return (
        <>
            <div className={`grid ${gridCols[columns]} gap-6`}>
                {items.map((item, index) => (
                    <PortfolioItem
                        key={item.id || index}
                        {...item}
                        index={index}
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>

            <PortfolioLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                items={items}
                currentIndex={currentIndex}
                onNavigate={setCurrentIndex}
            />
        </>
    );
}
