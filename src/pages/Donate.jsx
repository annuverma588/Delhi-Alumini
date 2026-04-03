import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function Donate() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);
  const [activeAmt, setActiveAmt] = useState('₹500');

  const amounts = [
    { en: '₹500', hi: '₹500' },
    { en: '₹1,000', hi: '₹1,000' },
    { en: '₹2,500', hi: '₹2,500' },
    { en: '₹5,000', hi: '₹5,000' }
  ];

  return (
    <div className="bg-[var(--color-terra)] pt-32 pb-24 px-6 md:px-14 min-h-screen relative overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute -top-[40%] -right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-[30%] -left-[5%] w-[450px] h-[450px] bg-black/5 rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 items-center w-full max-w-7xl mx-auto">
        
        {/* Left Col */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-white/70 flex justify-start items-center gap-2 mb-4 relative before:content-[''] before:block before:w-5 before:h-[2px] before:bg-white/70">
            {t("Make a Difference", "फर्क डालें")}
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.15] text-white mb-4">
            {t("Every Rupee is a Step Towards a Better Childhood", "हर रुपया एक बेहतर बचपन की ओर कदम है")}
          </h2>
          <p className="text-[0.93rem] text-white/80 leading-[1.75] mb-8">
            {t("Choose an amount and make a direct impact on a real child's life today. All donations are 80G tax-deductible.", "एक राशि चुनें और आज एक असली बच्चे की ज़िंदगी पर सीधा असर डालें। सभी दान 80G कर-कटौती योग्य हैं।")}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {amounts.map((v, i) => (
              <button 
                key={i}
                onClick={() => setActiveAmt(v.en)}
                className={cn("bg-white/15 border-2 border-white/30 text-white py-[0.65rem] px-[1.4rem] rounded-full text-[0.88rem] font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-[var(--color-terra)]", activeAmt === v.en && "bg-white text-[var(--color-terra)] border-white")}
              >
                {t(v.en, v.hi)}
              </button>
            ))}
          </div>
          <p className="text-[0.82rem] text-white/60">
            {t("• ₹500 feeds a child for a week  • ₹2,500 = 1 month education  • ₹5,000 = full month support", "• ₹500 = एक हफ्ते का भोजन  • ₹2,500 = 1 महीने की शिक्षा  • ₹5,000 = पूरे महीने का समर्थन")}
          </p>
        </motion.div>

        {/* Right Col / Form */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/10 backdrop-blur-[14px] border border-white/20 rounded-[24px] p-10 shadow-2xl">
          <h3 className="font-serif text-2xl text-white mb-6 font-bold">{t("Complete Your Donation", "अपना दान पूरा करें")}</h3>
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder={t("Your Full Name", "आपका पूरा नाम")}
              className="w-full bg-white/15 border border-white/25 rounded-xl py-3.5 px-5 text-white text-[0.9rem] outline-none transition-all focus:border-white/60 placeholder:text-white/50 focus:bg-white/20"
            />
            <input 
              type="email" 
              placeholder={t("Email Address", "ईमेल पता")}
              className="w-full bg-white/15 border border-white/25 rounded-xl py-3.5 px-5 text-white text-[0.9rem] outline-none transition-all focus:border-white/60 placeholder:text-white/50 focus:bg-white/20"
            />
            <input 
              type="tel" 
              placeholder={t("Phone Number", "फोन नंबर")}
              className="w-full bg-white/15 border border-white/25 rounded-xl py-3.5 px-5 text-white text-[0.9rem] outline-none transition-all focus:border-white/60 placeholder:text-white/50 focus:bg-white/20"
            />
            <input 
              type="text" 
              placeholder={t("Custom Amount (₹) — optional", "कस्टम राशि (₹) — वैकल्पिक")}
              className="w-full bg-white/15 border border-white/25 rounded-xl py-3.5 px-5 text-white text-[0.9rem] outline-none transition-all focus:border-white/60 placeholder:text-white/50 focus:bg-white/20"
            />
            
            <button 
              onClick={() => alert("Redirecting to secure Razorpay payment gateway...")}
              className="w-full bg-white text-[var(--color-terra)] py-4 rounded-xl text-[0.95rem] font-bold mt-2 shadow-lg transition-all duration-300 hover:bg-[var(--color-bg-2)] hover:-translate-y-1"
            >
              {t("Donate Securely →", "सुरक्षित रूप से दान करें →")}
            </button>
            <p className="text-[0.72rem] text-white/60 text-center mt-3 font-semibold tracking-wide">
              {t("🔒 Razorpay Secured · 80G Tax Exemption · FCRA Approved", "🔒 Razorpay सुरक्षित · 80G कर छूट · FCRA अनुमोदित")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
