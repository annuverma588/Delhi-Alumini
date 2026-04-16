import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const sessions = [
  {
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85',
    enTitle: 'Career Guidance Sessions',
    hiTitle: 'करियर मार्गदर्शन सत्र',
    enDesc: 'Alumni professionals share real pathways, practical decisions, and confidence-building advice.',
    hiDesc: 'पूर्व छात्र पेशेवर विद्यार्थियों को सही दिशा, practical decisions और confidence-building guidance देते हैं।',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=85',
    enTitle: 'Networking and Community Circles',
    hiTitle: 'नेटवर्किंग और सामुदायिक सर्कल',
    enDesc: 'Meaningful connections between alumni, schools, and volunteers create long-term support systems.',
    hiDesc: 'पूर्व छात्र, विद्यालय और volunteers के बीच meaningful connections लंबे समय का support system बनाते हैं।',
  },
  {
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1000&q=85',
    enTitle: 'Mentorship for Young Leaders',
    hiTitle: 'युवा नेताओं के लिए मेंटरशिप',
    enDesc: 'Students receive one-on-one guidance, exposure, and motivation from people who have walked similar journeys.',
    hiDesc: 'विद्यार्थियों को ऐसे लोगों से one-on-one guidance, exposure और motivation मिलता है जिन्होंने वैसी ही यात्रा तय की है।',
  },
  {
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=85',
    enTitle: 'School Pride and Legacy Events',
    hiTitle: 'विद्यालय गौरव और विरासत कार्यक्रम',
    enDesc: 'We celebrate school identity, alumni stories, and shared achievements in a positive public space.',
    hiDesc: 'हम school identity, alumni stories और shared achievements को एक सकारात्मक सार्वजनिक मंच पर celebrate करते हैं।',
  },
];

export default function Sessions() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  return (
    <section className="min-h-screen bg-[var(--color-bg)] px-6 pt-32 pb-24 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra)]">{t('Our Sessions', 'हमारे सत्र')}</div>
            <h1 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.12] text-[var(--color-text-main)]">
              {t('Programs designed to keep students connected and inspired', 'ऐसे कार्यक्रम जो विद्यार्थियों को जोड़े रखें और प्रेरित करें')}
            </h1>
            <p className="mt-5 max-w-[620px] text-[1rem] leading-8 text-[var(--color-mid)]">
              {t('Our sessions are practical, warm, and purpose-driven. They strengthen belonging, improve visibility of opportunities, and connect students with alumni who genuinely care.', 'हमारे सत्र practical, warm और purpose-driven हैं। ये अपनापन बढ़ाते हैं, अवसरों की visibility बढ़ाते हैं और विद्यार्थियों को ऐसे alumni से जोड़ते हैं जो सच में उनकी परवाह करते हैं।')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-[var(--color-terra)] px-7 py-3.5 text-[0.86rem] font-bold text-white no-underline transition-all hover:-translate-y-1 hover:bg-[var(--color-terra-2)]">{t('Book a Session', 'सत्र बुक करें')}</Link>
              <Link to="/gallery" className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-2)] px-7 py-3.5 text-[0.86rem] font-bold text-[var(--color-text-main)] no-underline transition-all hover:border-[var(--color-terra)] hover:text-[var(--color-terra)]">{t('See Event Photos', 'कार्यक्रम की तस्वीरें देखें')}</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="overflow-hidden rounded-[34px] shadow-[0_24px_60px_rgba(44,31,20,0.14)]">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85" alt={t('Collaborative alumni session', 'सहयोगी alumni सत्र')} className="h-[420px] w-full object-cover" />
            </div>
            <div className="absolute right-5 bottom-5 rounded-[22px] bg-white p-5 shadow-[0_14px_36px_rgba(44,31,20,0.15)]">
              <div className="font-serif text-[2rem] font-black leading-none text-[var(--color-terra)]">300+</div>
              <div className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--color-mid)]">{t('Schools Engaged', 'विद्यालय जुड़े')}</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sessions.map((item, index) => (
            <motion.div key={item.enTitle} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-[0_14px_36px_rgba(44,31,20,0.08)]">
              <img src={item.img} alt={t(item.enTitle, item.hiTitle)} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 h-1.5 w-12 rounded-full bg-[var(--color-terra)]" />
                <h3 className="font-serif text-[1.28rem] font-bold leading-[1.28] text-[var(--color-text-main)]">{t(item.enTitle, item.hiTitle)}</h3>
                <p className="mt-3 text-[0.92rem] leading-8 text-[var(--color-mid)]">{t(item.enDesc, item.hiDesc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}