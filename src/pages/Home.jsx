import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

// Helper component for animating numbers
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}</span>;
};

export default function Home() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const slides = [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=85',
    'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1800&q=85',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1800&q=85'
  ];
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const int = setInterval(() => setSlideIdx((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="bg-[var(--color-bg)] w-full relative">
      {/* HERO SECTION */}
      <section className="h-screen relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slides.map((src, i) => (
            <div
              key={i}
              className={cn("absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms] ease-in-out", slideIdx === i ? "opacity-100" : "opacity-0")}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(253,248,242,0.96)_0%,rgba(253,248,242,0.85)_40%,rgba(253,248,242,0.15)_100%)]" />
        
        <div className="relative z-[2] w-full px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-[0.6rem] bg-[rgba(193,68,14,0.1)] border border-[rgba(193,68,14,0.2)] rounded-full py-[0.45rem] px-[1.2rem] mb-8">
              <span className="w-[7px] h-[7px] bg-[var(--color-terra)] rounded-full animate-pulse" />
              <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--color-terra)]">
                {t("Raise Your Helping Hand For", "मदद का हाथ बढ़ाएं")}
              </span>
            </div>
            <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.05] mb-6 text-[var(--color-text-main)]">
              {t("Helpless", "असहाय")}<br />
              <span className="text-[var(--color-terra)] italic">{t("Children", "बच्चों")}</span><br />
              <span className="text-[var(--color-sage)]">{t("Need You", "की ज़रूरत है")}</span>
            </h1>
            <p className="text-[1rem] font-normal text-[var(--color-mid)] leading-[1.8] max-w-[460px] mb-10">
              {t("Together we can bring change and build a better future — creating safe, nurturing aangans (courtyards) where every child can grow, dream, and belong.", "मिलकर हम बदलाव ला सकते हैं और एक बेहतर भविष्य बना सकते हैं — सुरक्षित, पोषण भरे आँगन बनाना जहाँ हर बच्चा बढ़ सके, सपने देख सके और अपनापन महसूस करे।")}
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <Link to="/donate" className="bg-[var(--color-terra)] text-white py-4 px-10 rounded-full text-[0.88rem] font-bold no-underline shadow-[0_6px_20px_rgba(193,68,14,0.35)] transition-all duration-300 hover:bg-[var(--color-terra-2)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(193,68,14,0.4)] inline-block">
                {t("Donate Now", "अभी दान करें")}
              </Link>
              <Link to="/about" className="bg-transparent text-[var(--color-sage)] border-2 border-[var(--color-sage)] py-[0.9rem] px-10 rounded-full text-[0.88rem] font-bold no-underline transition-all duration-300 hover:bg-[var(--color-sage)] hover:text-white inline-block">
                {t("Our Story", "हमारी कहानी")}
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="flex">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&q=80" className="w-[36px] h-[36px] rounded-full border-2 border-white object-cover" alt="" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" className="w-[36px] h-[36px] rounded-full border-2 border-white object-cover -ml-2.5 relative z-10" alt="" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" className="w-[36px] h-[36px] rounded-full border-2 border-white object-cover -ml-2.5 relative z-20" alt="" />
              </div>
              <span className="text-[0.82rem] text-[var(--color-mid)]" dangerouslySetInnerHTML={{ __html: t("Trusted by <strong class='text-[var(--color-terra)]'>8,400+ donors</strong> across India", "पूरे भारत में <strong class='text-[var(--color-terra)]'>8,400+ दानदाताओं</strong> का विश्वास") }} />
            </div>
          </motion.div>
          
          <div className="hidden md:block relative">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=85" alt="Happy children" className="w-full h-[570px] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(44,31,20,0.2)]" />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute -bottom-6 -left-8 bg-white rounded-2xl py-5 px-6 shadow-[0_12px_40px_rgba(44,31,20,0.15)] min-w-[160px]">
              <span className="font-serif text-[2rem] font-black text-[var(--color-terra)] block">18K+</span>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">{t("LIVES CHANGED", "जीवन बदले")}</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="absolute top-8 -right-6 bg-[var(--color-sage)] rounded-2xl py-5 px-6 shadow-[0_12px_40px_rgba(74,124,89,0.3)] min-w-[150px]">
              <span className="font-serif text-[1.8rem] font-black text-white block">97%</span>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/70">{t("FUND UTILIZATION", "फंड उपयोग")}</span>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex gap-2.5">
          {slides.map((_, i) => (
            <div key={i} onClick={() => setSlideIdx(i)} className={cn("w-2 h-2 rounded-full cursor-pointer transition-all duration-300", slideIdx === i ? "bg-[var(--color-terra)] w-6" : "bg-[rgba(44,31,20,0.25)]")} />
          ))}
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className="py-20 px-6 md:px-14 bg-[var(--color-bg-2)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🤝', enTitle: 'Become a Volunteer', hiTitle: 'स्वयंसेवक बनें', enDesc: 'Be present. Teach, play, mentor. Children need role models just as much as resources.', hiDesc: 'उपस्थित रहें। पढ़ाएं, खेलें, मार्गदर्शन करें। बच्चों को संसाधनों जितने ही आदर्शों की ज़रूरत होती है।', to: '/contact', enLink: 'Get Involved', hiLink: 'जुड़ें' },
            { icon: '🌸', enTitle: 'Give a Donation', hiTitle: 'दान दें', enDesc: 'Fund meals, books, dreams, and smiles. ₹500 feeds a child for a week.', hiDesc: 'भोजन, किताबें, सपने और मुस्कान फंड करें। ₹500 से एक बच्चे को एक हफ्ते का भोजन मिलता है।', to: '/donate', enLink: 'Donate Today', hiLink: 'आज दान करें' },
            { icon: '🎓', enTitle: 'Give Scholarship', hiTitle: 'छात्रवृत्ति दें', enDesc: 'Sponsor a child\'s education for a full year — fees, books, uniform, and learning materials.', hiDesc: 'एक साल के लिए बच्चे की पढ़ाई प्रायोजित करें — फीस, किताबें, वर्दी और सभी सामग्री।', to: '/donate', enLink: 'Sponsor a Child', hiLink: 'बच्चे को प्रायोजित करें' }
          ].map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="group bg-white rounded-[20px] p-10 shadow-[0_4px_24px_rgba(44,31,20,0.06)] transition-all duration-400 cursor-pointer border-2 border-transparent relative overflow-hidden hover:-translate-y-2 hover:border-[var(--color-terra)] hover:shadow-[0_20px_50px_rgba(193,68,14,0.2)] flex flex-col items-start">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-terra)] to-[var(--color-terra-2)] opacity-0 transition-opacity duration-400 z-0 group-hover:opacity-100" />
              <div className="w-[56px] h-[56px] bg-[rgba(193,68,14,0.1)] rounded-[14px] flex items-center justify-center mb-6 transition-colors duration-400 relative z-10 group-hover:bg-white/20">
                <span className="text-2xl relative z-10 text-white !text-[var(--color-text-main)] group-hover:!text-white leading-none">{card.icon}</span>
              </div>
              <h3 className="font-serif text-[1.35rem] font-bold text-[var(--color-text-main)] mb-3 relative z-10 transition-colors duration-400 group-hover:text-white">{t(card.enTitle, card.hiTitle)}</h3>
              <p className="text-[0.86rem] text-[var(--color-mid)] leading-[1.7] mb-6 relative z-10 transition-colors duration-400 group-hover:text-white/90">{t(card.enDesc, card.hiDesc)}</p>
              <Link to={card.to} className="mt-auto text-[0.8rem] font-bold text-[var(--color-terra)] no-underline flex items-center gap-1.5 transition-all duration-400 relative z-10 group-hover:text-white">
                {t(card.enLink, card.hiLink)} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--color-text-main)] py-20 px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white font-black leading-[1.2]" dangerouslySetInnerHTML={{ __html: t("Impact That Speaks <em class='text-[var(--color-terra-light)] not-italic'>Louder</em> Than Words", "प्रभाव जो शब्दों से <em class='text-[var(--color-terra-light)] not-italic'>ज़्यादा</em> बोलता है") }} />
            <p className="text-white/50 text-[0.88rem] leading-[1.7] mt-4">{t('Seventeen years. Ten states. Eighteen thousand children.', 'सत्रह साल। दस राज्य। अठारह हज़ार बच्चे।')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: 18620, u: '+', enL: 'Children Supported', hiL: 'बच्चों की मदद' },
              { t: 7, u: 'Cr+', enL: 'Raised Since 2007', hiL: '2007 से जुटाए', pre: '₹' },
              { t: 490, u: '+', enL: 'Volunteers Active', hiL: 'सक्रिय स्वयंसेवक' },
              { t: 62, u: '', enL: 'Learning Centres', hiL: 'शिक्षा केंद्र' }
            ].map((st, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-colors hover:bg-[rgba(193,68,14,0.15)] hover:border-[rgba(193,68,14,0.3)]">
                <span className="font-serif text-[3rem] font-black text-[var(--color-terra-light)] block leading-none">
                  {st.pre}<AnimatedCounter target={st.t} />{st.u}
                </span>
                <span className="text-[0.73rem] font-bold tracking-[0.15em] uppercase text-white/40 mt-1.5 block">{t(st.enL, st.hiL)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-14 bg-[var(--color-bg-2)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-[2.4rem] font-black leading-[1.2] mb-4 text-[var(--color-text-main)]" dangerouslySetInnerHTML={{ __html: t("Words From Our <em class='text-[var(--color-terra)] not-italic'>Community</em>", "हमारे <em class='text-[var(--color-terra)] not-italic'>समुदाय</em> की आवाज़") }} />
            <p className="text-[0.88rem] text-[var(--color-mid)] leading-[1.8] mb-6">{t('The voices that matter most — families, volunteers, and donors whose lives have intersected with ours.', 'सबसे महत्वपूर्ण आवाज़ें — परिवार, स्वयंसेवक और दानदाता जिनकी जिंदगी हमसे जुड़ी।')}</p>
            <div className="text-[1.3rem] text-[var(--color-terra)] tracking-[0.1em] mb-1">★★★★★</div>
            <div className="text-[0.78rem] text-[var(--color-mid)] font-semibold mb-6">{t('4.9/5 from 2,400+ donors and volunteers', '2,400+ दानदाताओं और स्वयंसेवकों से 4.9/5')}</div>
            <Link to="/donate" className="bg-[var(--color-terra)] text-white py-3 px-8 rounded-full text-[0.88rem] font-bold no-underline inline-block transition-all hover:-translate-y-1 hover:bg-[var(--color-terra-2)] shadow-[0_6px_20px_rgba(193,68,14,0.35)]">
              {t("Join Our Community", "हमारे समुदाय से जुड़ें")}
            </Link>
          </motion.div>
          <div className="flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,31,20,0.06)] border-l-4 border-transparent transition-all hover:border-l-[var(--color-terra)] hover:shadow-[0_10px_30px_rgba(44,31,20,0.1)]">
              <p className="font-serif italic text-[1rem] text-[var(--color-text-main)] leading-[1.7] mb-5">
                {t('"Aangan transformed my daughter\'s life. She used to be afraid to speak in public. Last month she gave a speech at her school annual function."', '"आँगन ने मेरी बेटी की ज़िंदगी बदल दी। वो पहले सार्वजनिक में बोलने से डरती थी। पिछले महीने उसने स्कूल के वार्षिक समारोह में भाषण दिया।"')}
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&q=80" className="w-10 h-10 rounded-full object-cover border-2 border-[var(--color-terra)]" alt="" />
                <div>
                  <span className="text-[0.87rem] font-bold text-[var(--color-text-main)] block">{t('Savita Devi', 'सविता देवी')}</span>
                  <span className="text-[0.73rem] text-[var(--color-mid)]">{t('Mother — Lucknow, UP', 'माँ — लखनऊ, UP')}</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(44,31,20,0.06)] border-l-4 border-transparent transition-all hover:border-l-[var(--color-terra)] hover:shadow-[0_10px_30px_rgba(44,31,20,0.1)]">
              <p className="font-serif italic text-[1rem] text-[var(--color-text-main)] leading-[1.7] mb-5">
                {t('"Four years of volunteering and I still get emotional. These kids have more joy in them than most adults I know."', '"चार साल की स्वयंसेवा के बाद भी मुझे भावुकता होती है। इन बच्चों में ज़्यादातर वयस्कों से ज़्यादा खुशी है।"')}
              </p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" className="w-10 h-10 rounded-full object-cover border-2 border-[var(--color-terra)]" alt="" />
                <div>
                  <span className="text-[0.87rem] font-bold text-[var(--color-text-main)] block">{t('Siddharth Roy', 'सिद्धार्थ रॉय')}</span>
                  <span className="text-[0.73rem] text-[var(--color-mid)]">{t('Volunteer — Kolkata', 'स्वयंसेवक — कोलकाता')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
