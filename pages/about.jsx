/**
 * About Page - من نحن بسيط
 */

import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';

const stats = [
    { value: '5000+', label: 'خدمة منجزة' },
    { value: '10+', label: 'سنوات خبرة' },
    { value: '1000+', label: 'عميل سعيد' },
    { value: '#1', label: 'في ليبيا' },
];

export default function About() {
    return (
        <>
            <Head>
                <title>من نحن | رغوة - تنظيف وغسيل</title>
                <meta name="description" content="شركة رغوة للتنظيف والغسيل - الشركة رقم 1 في ليبيا. تعرف على قصتنا." />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-16 bg-[#1565C0] relative overflow-hidden">
                <BubbleDecoration count={5} />
                <div className="container-custom text-center mb-7 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#FFD700] drop-shadow-md">من نحن</h1>
                    <p className="text-xl text-white/80 font-bold">قصة رغوة</p>
                </div>
                {/* Wavy transition to content */}
                <ShapeDivider type="wave" position="bottom" color="#ffffff" height="120px" />
            </section>

            {/* Story */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                                alt="فريق رغوة"
                                className="rounded-2xl shadow-lg"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-black text-gray-900 mb-6">
                                الشركة رقم 1 في ليبيا
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                شركة رغوة للتنظيف والغسيل، تأسست في طرابلس بهدف تقديم خدمات
                                تنظيف وغسيل بمعايير عالمية وأسعار منافسة.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                نفتخر بفريق محترف ومدرب، ومعدات حديثة، ومواد آمنة.
                                نسعى دائماً لإرضاء عملائنا وتقديم الأفضل.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="text-2xl font-black text-[#1565C0]">{stat.value}</div>
                                        <div className="text-gray-600 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
                        قيمنا
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🏆', title: 'الجودة', desc: 'نلتزم بأعلى معايير الجودة' },
                            { icon: '💪', title: 'الاحترافية', desc: 'فريق محترف ومدرب' },
                            { icon: '💰', title: 'الأسعار', desc: 'أسعار منافسة ومعقولة' },
                        ].map((value) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center p-8 bg-white rounded-2xl shadow-sm"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#1565C0]">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-black text-white mb-6">
                        جاهز تجرب خدماتنا؟
                    </h2>
                    <a
                        href="https://wa.me/218920006270"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full 
                       bg-white text-[#1565C0] font-bold text-lg 
                       hover:shadow-xl transition-shadow"
                    >
                        <FaWhatsapp className="text-2xl text-green-500" />
                        تواصل معنا
                    </a>
                </div>
            </section>
        </>
    );
}
