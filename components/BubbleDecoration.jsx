import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * BubbleDecoration - A hydration-safe component for floating bubbles.
 * Ensures Math.random() is only called on the client side after mounting.
 */
export default function BubbleDecoration({ count = 8, color = 'rgba(255,255,255,0.1)' }) {
    const [bubbles, setBubbles] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const newBubbles = [...Array(count)].map((_, i) => ({
            id: i,
            size: 20 + Math.random() * 60,
            right: Math.random() * 100,
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 5,
            drift: Math.random() * 50 - 25,
        }));
        setBubbles(newBubbles);
    }, [count]);

    if (!isMounted) return null;

    return (
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        right: `${bubble.right}%`,
                        bottom: `-50px`,
                        backgroundColor: color,
                        background: color.includes('rgba') ? undefined : 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2))',
                        boxShadow: color.includes('rgba') ? undefined : 'inset 0 0 10px rgba(255,255,255,0.5)',
                    }}
                    animate={{
                        y: [0, -800],
                        x: [0, bubble.drift],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.8],
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        delay: bubble.delay,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
}
