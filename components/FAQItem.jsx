/**
 * FAQItem Component - Arabic
 * 
 * عنصر الأسئلة الشائعة مع حركة الأكورديون
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronLeft } from 'react-icons/hi';

// عنصر السؤال الفردي
export default function FAQItem({
    question,
    answer,
    isOpen: controlledIsOpen,
    onToggle,
    index = 0
}) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    // دعم الوضع المتحكم وغير المتحكم
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
    const handleToggle = onToggle || (() => setInternalIsOpen(!internalIsOpen));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl overflow-hidden"
        >
            {/* رأس السؤال */}
            <button
                onClick={handleToggle}
                className="w-full flex items-center justify-between p-5 text-right
                   bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-900 pl-4">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <HiChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
            </button>

            {/* محتوى الإجابة */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-5 pb-5 pt-0">
                            <div className="pt-2 border-t border-gray-100">
                                <p className="text-gray-600 leading-relaxed pt-4">{answer}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// قائمة الأسئلة الشائعة
export function FAQList({ faqs = [], allowMultiple = true }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        if (allowMultiple) {
            return; // في حالة السماح بفتح متعدد، نستخدم الوضع غير المتحكم
        }
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                    {...(!allowMultiple && {
                        isOpen: openIndex === index,
                        onToggle: () => handleToggle(index),
                    })}
                />
            ))}
        </div>
    );
}

// قسم الأسئلة الشائعة الكامل
export function FAQSection({
    title = 'الأسئلة الشائعة',
    subtitle,
    faqs = [],
    allowMultiple = true
}) {
    return (
        <section className="section-padding">
            <div className="container-custom">
                {/* الرأس */}
                <div className="text-center mb-12">
                    <h2 className="section-heading">{title}</h2>
                    {subtitle && <p className="section-subheading">{subtitle}</p>}
                </div>

                {/* قائمة الأسئلة */}
                <div className="max-w-3xl mx-auto">
                    <FAQList faqs={faqs} allowMultiple={allowMultiple} />
                </div>
            </div>
        </section>
    );
}
