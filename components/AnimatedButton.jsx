/**
 * AnimatedButton Component - Arabic
 * 
 * زر متحرك قابل لإعادة الاستخدام
 */

import Link from 'next/link';
import { motion } from 'framer-motion';

// أنماط الأزرار
const variants = {
    primary: `bg-primary-600 text-white hover:bg-primary-700 
            focus:ring-4 focus:ring-primary-300 shadow-lg hover:shadow-xl`,
    secondary: `bg-white text-primary-600 border-2 border-primary-600 
              hover:bg-primary-50 focus:ring-4 focus:ring-primary-100`,
    outline: `bg-transparent text-primary-600 border-2 border-primary-600 
            hover:bg-primary-600 hover:text-white focus:ring-4 focus:ring-primary-100`,
    outlineWhite: `bg-transparent text-white border-2 border-white 
                 hover:bg-white hover:text-primary-600`,
    ghost: `bg-transparent text-primary-600 hover:bg-primary-50`,
    dark: `bg-gray-900 text-white hover:bg-gray-800 
         focus:ring-4 focus:ring-gray-300 shadow-lg`,
};

// أحجام الأزرار
const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
};

export default function AnimatedButton({
    children,
    href,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className = '',
    disabled = false,
    onClick,
    ...props
}) {
    // الأنماط المجمعة
    const buttonClasses = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 gap-2
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

    // المحتوى
    const content = (
        <>
            {icon && iconPosition === 'right' && icon}
            {children}
            {icon && iconPosition === 'left' && icon}
        </>
    );

    // مكون الحركة
    const MotionComponent = href ? motion.div : motion.button;

    if (href) {
        const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');

        return (
            <motion.div
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
            >
                <Link
                    href={href}
                    className={buttonClasses}
                    target={isExternal && !href.startsWith('tel:') && !href.startsWith('mailto:') ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    {...props}
                >
                    {content}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {content}
        </motion.button>
    );
}

// زر CTA محسن
export function CTAButton({ children, href = '/contact', ...props }) {
    return (
        <AnimatedButton
            href={href}
            variant="primary"
            size="lg"
            className="shadow-xl hover:shadow-2xl"
            {...props}
        >
            {children}
        </AnimatedButton>
    );
}

// زر أيقونة
export function IconButton({ icon, onClick, className = '', ...props }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className={`w-12 h-12 rounded-full flex items-center justify-center 
                  bg-white shadow-lg hover:shadow-xl transition-all ${className}`}
            {...props}
        >
            {icon}
        </motion.button>
    );
}
