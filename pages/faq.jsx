/**
 * FAQ Page - Arabic
 * 
 * صفحة الأسئلة الشائعة - شركة رغوة للتنظيف والغسيل
 */

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiSparkles, HiPhone, HiArrowLeft } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { FAQList } from '../components/FAQItem';
import AnimatedButton from '../components/AnimatedButton';
import ShapeDivider from '../components/ShapeDivider';
import BubbleDecoration from '../components/BubbleDecoration';

// بيانات الأسئلة الشائعة مصنفة
const faqCategories = [
    {
        title: 'أسئلة عامة',
        faqs: [
            {
                question: 'ما هي الخدمات اللي تقدمونها؟',
                answer: 'نقدم مجموعة شاملة من الخدمات: تنظيف المنازل والشقق، غسيل السجاد والمفروشات (الصالونات، الجلسات، فرش السرير، الستائر)، غسيل السيارات (لوادجو بالثلج الجاف)، غسيل وصباغة الملابس، وتنظيف الواجهات بالحبال.',
            },
            {
                question: 'وين موقعكم؟',
                answer: 'مقرنا الرئيسي في طرابلس، عين زارة - المشتل. والمغسلة في السراج طريق المشتل. نوفر خدمة التوصيل لجميع أنحاء طرابلس والمناطق المجاورة.',
            },
            {
                question: 'هل المواد المستخدمة آمنة؟',
                answer: 'نعم! نستخدم مواد تنظيف عالية الجودة وآمنة للعائلة والأطفال. إذا كان عندك حساسية معينة، أخبرنا وسنستخدم مواد خاصة.',
            },
            {
                question: 'هل الفريق مدرب ومؤمن؟',
                answer: 'نعم، جميع العاملين والعاملات مدربين على أعلى مستوى. نوفر النقل ذهاباً وإياباً للعاملات، ونحرص على أمان وخصوصية عملائنا.',
            },
        ],
    },
    {
        title: 'الحجز والمواعيد',
        faqs: [
            {
                question: 'كيف أقدر أحجز خدمة؟',
                answer: 'الحجز سهل جداً! اتصل على 0920006270 أو راسلنا واتساب أو أرسل رسالة لصفحتنا على فيسبوك @ragawaa.ly. بنتفق على الموعد المناسب.',
            },
            {
                question: 'كم قبل لازم أحجز؟',
                answer: 'ننصح بالحجز قبل 24-48 ساعة للخدمات العادية. للتنظيف العميق أو المشاريع الكبيرة، يفضل الحجز قبل أسبوع. في الحالات الطارئة، تواصل معنا وبنحاول نساعدك.',
            },
            {
                question: 'هل فيه خدمة في مناطق خارج طرابلس؟',
                answer: 'نعم! ندعم الطلبيات في مناطق خارج طرابلس مثل مصراتة وزلتن. نوفر السيارات والمعدات للوصول إليكم.',
            },
        ],
    },
    {
        title: 'الأسعار والدفع',
        faqs: [
            {
                question: 'كم سعر تنظيف المنزل؟',
                answer: 'تنظيف المنازل والشقق يبدأ من 65 دينار ليبي للجلسة الواحدة. السعر يختلف حسب حجم المكان ونوع التنظيف المطلوب. تواصل معنا للحصول على عرض سعر دقيق.',
            },
            {
                question: 'ما هي طرق الدفع المتوفرة؟',
                answer: 'نقبل الدفع نقداً أو بالبطاقة المصرفية. الدفع يكون بعد إتمام الخدمة ورضاك عن النتيجة.',
            },
            {
                question: 'هل فيه عروض وتخفيضات؟',
                answer: 'نعم! نقدم تخفيضات موسمية وعروض خاصة مثل "اغسل مفروشات حوشك بأقل تكلفة". تابع صفحاتنا على السوشيال ميديا للاطلاع على آخر العروض.',
            },
        ],
    },
    {
        title: 'تفاصيل الخدمات',
        faqs: [
            {
                question: 'كم تاخذ جلسة التنظيف؟',
                answer: 'جلسة تنظيف شقة متوسطة تاخذ من 2-4 ساعات. التنظيف العميق يحتاج وقت أكثر حسب الحالة. نحرص على إنجاز العمل بجودة عالية.',
            },
            {
                question: 'هل لازم أكون موجود أثناء التنظيف؟',
                answer: 'مو ضروري. كثير من عملائنا يتركون المفتاح أو يوفرون طريقة دخول ونحن ننجز الشغل باحترافية. أمانتنا مضمونة.',
            },
            {
                question: 'هل تجيبون المعدات والمواد؟',
                answer: 'نعم، نجيب كل شي معنا: المعدات الاحترافية ومواد التنظيف. ما تحتاج تجهز أي شي، بس استقبلنا وبنتولى الباقي.',
            },
            {
                question: 'ما هي خدمة لوادجو؟',
                answer: 'لوادجو هي خدمة غسيل السيارات المتطورة. نوفر غسيل ثلج جاف (دراي واش)، باقات VIP، غسيل داخلي وخارجي، بولش، ونانو سيراميك. متوفرة في طريق المشتل.',
            },
        ],
    },
    {
        title: 'الضمان والجودة',
        faqs: [
            {
                question: 'ماذا لو ما عجبتني النتيجة؟',
                answer: 'رضاك هو هدفنا الأول! إذا ما كنت راضي عن أي جزء من الخدمة، تواصل معنا خلال 24 ساعة وبنرجع نعالج المشكلة مجاناً.',
            },
            {
                question: 'هل تضمنون جودة الخدمة؟',
                answer: 'نعم! نحن الشركة رقم 1 في ليبيا من حيث الخدمات والأسعار. نفتخر بثقة آلاف العملاء ونحرص على المحافظة عليها.',
            },
        ],
    },
];

export default function FAQ() {
    return (
        <>
            <Head>
                <title>الأسئلة الشائعة - شركة رغوة للتنظيف والغسيل | طرابلس، ليبيا</title>
                <meta
                    name="description"
                    content="إجابات على الأسئلة الشائعة عن خدمات شركة رغوة للتنظيف والغسيل: الأسعار، الحجز، طرق الدفع، ومناطق الخدمة في طرابلس، ليبيا."
                />
                <meta property="og:title" content="الأسئلة الشائعة - شركة رغوة" />
                <meta property="og:description" content="كل ما تحتاج تعرفه عن خدماتنا." />
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
                        <HiSparkles className="text-xl" />
                        <span>إجابات وافية</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
                        الأسئلة <span className="text-blue-300">الشائعة</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        كل ما تود معرفته عن خدمات رغوة، جمعناه لك هنا لتسهيل تجربتك معنا.
                    </p>
                </div>

                <ShapeDivider type="foam" position="bottom" color="#ffffff" height="150px" />
            </section>

            {/* فئات الأسئلة */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    {faqCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="mb-12 last:mb-0"
                        >
                            {/* رأس الفئة */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 
                                flex items-center justify-center font-bold">
                                    {categoryIndex + 1}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                            </div>

                            {/* قائمة الأسئلة */}
                            <FAQList faqs={category.faqs} allowMultiple={false} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* هل لازال عندك سؤال؟ */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-padding bg-gray-50"
            >
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">ما لقيت جوابك؟</h2>
                        <p className="text-gray-600 mb-8">
                            تواصل معنا مباشرة وبنرد على كل أسئلتك. فريقنا جاهز لمساعدتك!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <AnimatedButton href="https://wa.me/218920006270" variant="outline" size="lg">
                                <FaWhatsapp className="w-5 h-5 ml-2" />
                                واتساب
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* روابط مفيدة */}
            <section className="py-16">
                <div className="container-custom">
                    <h3 className="text-xl font-bold text-center mb-8">روابط مفيدة</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { title: 'خدماتنا', href: '/services', desc: 'تعرف على كل خدماتنا' },
                            { title: 'من نحن', href: '/about', desc: 'قصتنا وقيمنا' },
                            { title: 'أعمالنا', href: '/portfolio', desc: 'شوف نتائج عملنا' },
                            { title: 'احجز الآن', href: '/contact', desc: 'تواصل معنا للحجز' },
                        ].map((link, index) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="block p-4 bg-white rounded-xl border border-gray-200 
                             hover:border-primary-300 hover:shadow-lg transition-all group"
                                >
                                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 
                                 transition-colors mb-1">
                                        {link.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">{link.desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
