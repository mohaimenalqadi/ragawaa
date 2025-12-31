import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

/**
 * AnimatedCounter - عداد متحرك احترافي
 * @param {number} value - القيمة النهائية للعداد
 * @param {string} suffix - لاحقة اختيارية (مثل + أو %)
 */
export default function AnimatedCounter({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
        duration: 2000
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className="inline-flex items-center">
            <motion.span>{displayValue}</motion.span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
}
