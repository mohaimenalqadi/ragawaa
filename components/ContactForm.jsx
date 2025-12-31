/**
 * ContactForm Component - Arabic
 * 
 * نموذج التواصل مع التحقق من المدخلات
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { HiCheck, HiExclamation, HiPaperAirplane } from 'react-icons/hi';

// مخطط التحقق
const contactFormSchema = yup.object().shape({
    name: yup
        .string()
        .required('الاسم مطلوب')
        .min(3, 'الاسم يجب أن يكون 3 أحرف على الأقل')
        .max(50, 'الاسم طويل جداً'),
    phone: yup
        .string()
        .required('رقم الهاتف مطلوب')
        .matches(
            /^(09[0-9]{8}|[0-9]{10})$/,
            'يرجى إدخال رقم هاتف ليبي صحيح (مثال: 0920006270)'
        ),
    email: yup
        .string()
        .email('يرجى إدخال بريد إلكتروني صحيح'),
    service: yup
        .string()
        .required('يرجى اختيار نوع الخدمة'),
    message: yup
        .string()
        .required('الرسالة مطلوبة')
        .min(10, 'الرسالة قصيرة جداً')
        .max(1000, 'الرسالة طويلة جداً'),
});

// خيارات الخدمات
const serviceOptions = [
    { value: '', label: 'اختر نوع الخدمة' },
    { value: 'home-cleaning', label: 'تنظيف المنازل والشقق' },
    { value: 'carpet-cleaning', label: 'غسيل السجاد والمفروشات' },
    { value: 'car-wash', label: 'غسيل السيارات - لوادجو' },
    { value: 'laundry', label: 'غسيل وصباغة الملابس' },
    { value: 'facade-cleaning', label: 'تنظيف الواجهات' },
    { value: 'other', label: 'خدمة أخرى' },
];

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactFormSchema),
        mode: 'onBlur',
    });

    // معالجة الإرسال
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('فشل إرسال الرسالة');
            }

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // حركات الرسوم المتحركة
    const errorVariants = {
        hidden: { opacity: 0, y: -10, height: 0 },
        visible: { opacity: 1, y: 0, height: 'auto' },
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* رسائل النجاح/الخطأ */}
            <AnimatePresence>
                {submitStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`p-4 rounded-xl flex items-center gap-3 ${submitStatus === 'success'
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'bg-red-50 text-red-700 border border-red-200'
                            }`}
                    >
                        {submitStatus === 'success' ? (
                            <>
                                <HiCheck className="w-5 h-5 flex-shrink-0" />
                                <span>تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
                            </>
                        ) : (
                            <>
                                <HiExclamation className="w-5 h-5 flex-shrink-0" />
                                <span>حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر الهاتف.</span>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* حقول النموذج */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* الاسم */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className={`input-field ${errors.name ? 'input-error' : ''}`}
                        placeholder="أدخل اسمك"
                    />
                    <AnimatePresence>
                        {errors.name && (
                            <motion.p
                                variants={errorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="error-message"
                            >
                                {errors.name.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* رقم الهاتف */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className={`input-field ${errors.phone ? 'input-error' : ''}`}
                        placeholder="0920006270"
                        style={{ direction: 'ltr', textAlign: 'right' }}
                    />
                    <AnimatePresence>
                        {errors.phone && (
                            <motion.p
                                variants={errorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="error-message"
                            >
                                {errors.phone.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* البريد الإلكتروني */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني (اختياري)
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={`input-field ${errors.email ? 'input-error' : ''}`}
                        placeholder="example@email.com"
                        style={{ direction: 'ltr', textAlign: 'right' }}
                    />
                    <AnimatePresence>
                        {errors.email && (
                            <motion.p
                                variants={errorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="error-message"
                            >
                                {errors.email.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* نوع الخدمة */}
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        نوع الخدمة <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="service"
                        {...register('service')}
                        className={`input-field ${errors.service ? 'input-error' : ''}`}
                    >
                        {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <AnimatePresence>
                        {errors.service && (
                            <motion.p
                                variants={errorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="error-message"
                            >
                                {errors.service.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* الرسالة */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    رسالتك <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                    placeholder="اكتب تفاصيل طلبك هنا... (مثال: تنظيف شقة 3 غرف في عين زارة)"
                />
                <AnimatePresence>
                    {errors.message && (
                        <motion.p
                            variants={errorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="error-message"
                        >
                            {errors.message.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            {/* زر الإرسال */}
            <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-primary py-4 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        جاري الإرسال...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <HiPaperAirplane className="w-5 h-5 rotate-180" />
                        إرسال الرسالة
                    </span>
                )}
            </motion.button>

            {/* ملاحظة */}
            <p className="text-sm text-gray-500 text-center">
                أو تواصل معنا مباشرة على{' '}
                <a href="tel:+218920006270" className="text-primary-600 hover:underline" style={{ direction: 'ltr', display: 'inline-block' }}>
                    0920006270
                </a>
            </p>
        </form>
    );
}
