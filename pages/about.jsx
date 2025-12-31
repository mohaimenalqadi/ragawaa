import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiShieldCheck, HiCurrencyDollar, HiOutlineSparkles, HiEmojiHappy } from 'react-icons/hi';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About() {
    const [clientCount, setClientCount] = useState(12304);

    useEffect(() => {
        // حساب العداد الديناميكي: 12304 أساسي + 35 لكل يوم منذ الآن
        const startDate = new Date('2025-12-31');
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setClientCount(12304 + (diffDays * 35));
    }, []);

    const values = [
        {
            icon: <HiShieldCheck />,
            title: 'الأمانة والموثوقية',
            desc: 'نحن نعتبر دخولنا لمنزلك أمانة غالية، لذا نختار فريقنا بعناية فائقة لضمان راحتك التامة.',
            color: 'blue'
        },
        {
            icon: <HiOutlineSparkles />,
            title: 'إتقان التفاصيل',
            desc: 'نؤمن أن الفرق يكمن في التفاصيل الصغيرة؛ لذا لا نترك زاوية إلا ونعيدها بلمعانها الأصلي.',
            color: 'amber'
        },
        {
            icon: <HiCurrencyDollar />,
            title: 'القيمة الحقيقية',
            desc: 'نقدم أفضل جودة تنظيف في ليبيا بأسعار عادلة ومنافسة تناسب تطلعاتكم وميزانيتكم.',
            color: 'emerald'
        }
    ];

    return (
        <>
            <Head>
                <title>من نحن | رغوة - قصة التميز في ليبيا</title>
                <meta name="description" content="تعرف على شركة رغوة للتنظيف، الشركة الليبية الرائدة التي وضعت مفاهيم جديدة للنظافة الاحترافية." />
            </Head>

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-[#0D47A1] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#0D47A1] opacity-50" />
                <BubbleDecoration count={12} color="bubble" />

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-400/20 text-blue-200 text-sm font-black mb-6 border border-blue-400/30 shadow-xl"
                    >
                        <HiShieldCheck className="text-xl" />
                        <span>منذ عام 2017</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
                        قصة <span className="text-blue-300">رغوة</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        نحن لا ننظف الأماكن فحسب، بل نصنع بيئة تليق بأسلوب حياتكم الراقي.
                    </p>
                </div>

                <ShapeDivider type="foam" position="bottom" color="#ffffff" height="150px" />
            </section>

            {/* Brand Story Section */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Interactive Image Frame */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group pr-4"
                        >
                            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
                            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl h-[600px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                                    alt="احترافية فريق رغوة"
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>

                            {/* Floating Quote Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -left-10 bottom-20 glass p-8 rounded-3xl shadow-2xl max-w-[280px] border border-white/40 z-20"
                            >
                                <p className="text-gray-900 font-black italic text-lg leading-snug">
                                    "نسعى لأن نكون المعيار الذهبي للنظافة في كل بيت ليبي."
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                نضع <span className="text-[#1565C0]">الجودة</span> أولاً، <br className="hidden md:block" />
                                في كل زاوية وكل تفصيل.
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                بدأت رغوة في قلب طرابلس كحلم لتحويل مفهوم خدمات التنظيف من مجرد "عمل" إلى "فن وإتقان". اليوم، نفتخر بأننا الوجهة الأولى لآلاف العائلات والشركات التي تبحث عن الجودة الفائقة.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 shadow-sm">
                                    <div className="text-4xl font-black text-[#1565C0] mb-2">
                                        <AnimatedCounter value={clientCount} suffix="+" />
                                    </div>
                                    <p className="text-gray-900 font-bold">عميل نعتز بخدمتهم</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="text-4xl font-black text-gray-900 mb-2">
                                        <AnimatedCounter value={8} suffix="+" />
                                    </div>
                                    <p className="text-gray-500 font-bold">سنوات من الخبرة</p>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/218920006270"
                                target="_blank"
                                className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-green-500 text-white font-black text-xl shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-2xl" />
                                <span>تحدث مع فريقنا</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Executive Values Section */}
            <section className="section-padding bg-slate-50 relative overflow-hidden">
                <ShapeDivider type="foam" position="top" color="#ffffff" height="100px" />

                <div className="container-custom relative z-10 py-20">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
                            قيمنا <span className="text-[#1565C0]">الراسخة</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-medium">
                            المبادئ التي تقودنا في كل مهمة تنظيف نقوم بها، لنبقى دائماً عند حسن ظنكم.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((val, idx) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(21,101,192,0.1)] transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Decorative Icon BG */}
                                <div className="absolute -top-10 -right-10 text-[10rem] opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                    {val.icon}
                                </div>

                                <div className={`w-16 h-16 rounded-3xl mb-8 flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                                    ${val.color === 'blue' ? 'bg-blue-500 text-white' :
                                        val.color === 'amber' ? 'bg-amber-500 text-white' :
                                            'bg-emerald-500 text-white'}`}>
                                    {val.icon}
                                </div>

                                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#1565C0] transition-colors">
                                    {val.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <ShapeDivider type="wave" position="bottom" color="#0D47A1" height="120px" />
            </section>
        </>
    );
}
