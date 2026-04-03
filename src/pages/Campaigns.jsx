import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const campaigns = [
  { img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80', pillEn: 'Education', pillHi: 'शिक्षा', titleEn: 'Vidya Jyot — Digital Classrooms 2025', titleHi: 'विद्या ज्योत — डिजिटल कक्षाएं 2025', descEn: 'Bringing tablets and internet to 3 rural schools in Jharkhand — connecting 600 children to the digital world.', descHi: 'झारखंड के 3 ग्रामीण स्कूलों में टैबलेट और इंटरनेट लाना — 600 बच्चों को डिजिटल दुनिया से जोड़ना।', prog: 63, raisedEn: '₹7.6L raised', raisedHi: '₹7.6L जुटाए', target: '₹12L' },
  { img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80', pillEn: 'Nutrition', pillHi: 'पोषण', titleEn: 'Poshan Abhiyan — Daily Meals Drive', titleHi: 'पोषण अभियान — दैनिक भोजन', descEn: 'Serving 800 nourishing meals daily in our centres across UP, Bihar, and Odisha.', descHi: 'UP, बिहार और ओडिशा के हमारे केंद्रों में प्रतिदिन 800 पौष्टिक भोजन परोसे जाते हैं।', prog: 48, raisedEn: '', raisedHi: '', target: '' },
  { img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80', pillEn: 'Healthcare', pillHi: 'स्वास्थ्य', titleEn: 'Aarogya Rath — Mobile Health Units', titleHi: 'आरोग्य रथ — मोबाइल स्वास्थ्य इकाइयाँ', descEn: 'Expanding our mobile health fleet to reach 80 new villages in MP and Chhattisgarh.', descHi: 'MP और छत्तीसगढ़ के 80 नए गाँवों तक पहुँचने के लिए हमारे मोबाइल स्वास्थ्य बेड़े का विस्तार।', prog: 35, raisedEn: '₹4.2L raised', raisedHi: '₹4.2L जुटाए', target: '₹12L' }
];

export default function Campaigns() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  return (
    <div className="bg-[var(--color-bg)] pt-32 pb-24 px-6 md:px-14 min-h-screen">
      <div className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--color-terra)] flex justify-start items-center gap-2 mb-4 relative before:content-[''] before:block before:w-5 before:h-[2px] before:bg-[var(--color-terra)]">
        {t("Active Right Now", "अभी सक्रिय")}
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.15] text-[var(--color-text-main)] mb-12" dangerouslySetInnerHTML={{ __html: t("Campaigns Needing Your <em class='text-[var(--color-terra)] italic'>Support</em>", "अभियान जिन्हें आपके <em class='text-[var(--color-terra)] italic'>समर्थन</em> की ज़रूरत है") }} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_24px_rgba(44,31,20,0.07)] transition-all duration-400 group hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(44,31,20,0.14)] flex flex-col">
            <div className="overflow-hidden">
               <img src={c.img} alt={c.pillEn} className="w-full h-[210px] object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-[1.8rem] flex-1 flex flex-col items-start">
              <span className="bg-[rgba(193,68,14,0.1)] text-[var(--color-terra)] text-[0.68rem] font-bold tracking-[0.12em] uppercase py-[0.3rem] px-[0.9rem] rounded-full inline-block mb-[0.8rem]">
                {t(c.pillEn, c.pillHi)}
              </span>
              <h3 className="font-serif text-[1.2rem] font-bold text-[var(--color-text-main)] mb-[0.7rem]">{t(c.titleEn, c.titleHi)}</h3>
              <p className="text-[0.83rem] text-[var(--color-mid)] leading-[1.7] mb-[1.2rem]">{t(c.descEn, c.descHi)}</p>
              
              <div className="mt-auto w-full">
                <div className="h-[6px] bg-[var(--color-border)] rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: `${c.prog}%` }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[var(--color-terra)] to-[var(--color-terra-2)] rounded-full" 
                  />
                </div>
                {c.target && (
                  <div className="flex justify-between text-[0.74rem] font-semibold text-[var(--color-mid)] mb-[1.2rem]">
                    <span className="text-[var(--color-terra)]">{t(c.raisedEn, c.raisedHi)}</span>
                    <span>{c.prog}% of {c.target}</span>
                  </div>
                )}
                {!c.target && <div className="mb-[1.2rem]" />}
                
                <Link to="/donate" className="bg-[var(--color-terra)] text-white text-[0.82rem] font-bold py-[0.7rem] px-[1.6rem] rounded-full inline-block no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-terra-2)] shadow-[0_4px_14px_rgba(193,68,14,0.25)]">
                  {t("Support Campaign", "अभियान समर्थन करें")}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
