import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

/**
 * AnimatedCounter - عداد متحرك فاخر
 * @param {number} value - القيمة النهائية للعداد
 * @param {string} suffix - لاحقة اختيارية (مثل + أو %)
 * @param {string} className - فئات CSS إضافية
 */
export default function AnimatedCounter({ value, suffix = "", className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 70, // Slower, more rhythmic movement
        damping: 30,
        restDelta: 0.001
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString('en-US')
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className={`inline-flex items-center font-black ${className}`}>
            <motion.span>{displayValue}</motion.span>
            {suffix && <span className="mr-1">{suffix}</span>}
        </span>
    );
}
