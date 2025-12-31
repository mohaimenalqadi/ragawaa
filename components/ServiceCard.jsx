/**
 * ServiceCard Component - Premium Design
 * 
 * بطاقة خدمة فاخرة مع تأثيرات متقدمة
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiStar } from 'react-icons/hi';

// ألوان البطاقات المتدرجة
const colorVariants = {
    primary: {
        gradient: 'from-blue-500 via-indigo-500 to-purple-600',
        shadow: 'shadow-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-600',
    },
    secondary: {
        gradient: 'from-teal-500 via-cyan-500 to-blue-500',
        shadow: 'shadow-teal-500/30',
        bg: 'bg-teal-500/10',
        text: 'text-teal-600',
    },
    accent: {
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        shadow: 'shadow-amber-500/30',
        bg: 'bg-amber-500/10',
        text: 'text-amber-600',
    },
    teal: {
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        shadow: 'shadow-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-600',
    },
    blue: {
        gradient: 'from-sky-500 via-blue-500 to-indigo-500',
        shadow: 'shadow-sky-500/30',
        bg: 'bg-sky-500/10',
        text: 'text-sky-600',
    },
    purple: {
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        shadow: 'shadow-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-600',
    },
};

export default function ServiceCard({
    icon,
    title,
    description,
    href = '#',
    color = 'primary',
    price,
    featured = false,
    index = 0
}) {
    const colors = colorVariants[color] || colorVariants.primary;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group h-full"
        >
            <Link href={href} className="block h-full">
                <div className={`relative h-full bg-white rounded-3xl p-8 transition-all duration-500
                        overflow-hidden border border-gray-100
                        hover:border-transparent hover:shadow-2xl ${colors.shadow}`}>
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 
                          group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Featured badge */}
                    {featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full 
                            bg-gradient-to-r from-amber-500 to-orange-500 
                            text-white text-xs font-bold flex items-center gap-1">
                            <HiStar className="w-3 h-3" />
                            مميز
                        </div>
                    )}

                    {/* Price badge */}
                    {price && (
                        <div className={`absolute top-4 ${featured ? 'left-20' : 'left-4'} px-4 py-1.5 
                            rounded-full bg-gradient-to-r ${colors.gradient} 
                            text-white text-sm font-bold shadow-lg ${colors.shadow}`}>
                            {price}
                        </div>
                    )}

                    {/* Icon */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center 
                       bg-gradient-to-br ${colors.gradient} text-white mb-6 
                       shadow-xl ${colors.shadow} group-hover:shadow-2xl 
                       transition-all duration-500`}
                    >
                        {icon}
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} 
                            blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-black text-gray-900 mb-3 
                        group-hover:text-transparent group-hover:bg-clip-text
                        group-hover:bg-gradient-to-r group-hover:from-purple-600 
                        group-hover:to-pink-600 transition-all duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {description}
                    </p>

                    {/* Link */}
                    <div className={`flex items-center ${colors.text} font-bold 
                         group-hover:gap-4 transition-all duration-300`}>
                        <span>اكتشف المزيد</span>
                        <motion.div
                            animate={{ x: [0, -5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mr-2"
                        >
                            <HiArrowLeft className="w-5 h-5" />
                        </motion.div>
                    </div>

                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}
                          transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-500 origin-right`} />
                </div>
            </Link>
        </motion.div>
    );
}

// Premium compact version
export function ServiceCardCompact({ icon, title, href = '#', color = 'primary' }) {
    const colors = colorVariants[color] || colorVariants.primary;

    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
        >
            <Link
                href={href}
                className={`flex items-center gap-4 p-5 bg-white rounded-2xl 
                   border border-gray-100 hover:border-transparent
                   shadow-sm hover:shadow-xl ${colors.shadow}
                   transition-all duration-300 group`}
            >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center 
                        bg-gradient-to-br ${colors.gradient} text-white
                        shadow-lg ${colors.shadow} group-hover:scale-110
                        transition-transform duration-300`}>
                    {icon}
                </div>
                <span className="font-bold text-gray-900 group-hover:text-purple-600 
                        transition-colors flex-grow">
                    {title}
                </span>
                <HiArrowLeft className={`w-5 h-5 ${colors.text} 
                                group-hover:-translate-x-2 transition-transform`} />
            </Link>
        </motion.div>
    );
}
