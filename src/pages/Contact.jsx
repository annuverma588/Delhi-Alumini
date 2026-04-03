import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const handleForm = (e) => {
    e.preventDefault();
    alert(lang === 'hi' ? 'धन्यवाद! हम 24 घंटे में संपर्क करेंगे। 🙏' : 'Thank you! We\'ll be in touch within 24 hours. 🙏');
    e.target.reset();
  };

  return (
    <div className="bg-[var(--color-bg)] pt-32 pb-24 px-6 md:px-14 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20">
        
        {/* Left Column - Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--color-terra)] flex items-center gap-2 mb-4 relative before:content-[''] before:block before:w-5 before:h-[2px] before:bg-[var(--color-terra)]">
            {t("Get In Touch", "संपर्क करें")}
          </div>
          <h2 className="font-serif text-[2.5rem] font-black leading-[1.2] mb-4 text-[var(--color-text-main)]" dangerouslySetInnerHTML={{ __html: t("Let's Build This <em class='text-[var(--color-terra)] italic'>Together</em>", "इसे <em class='text-[var(--color-terra)] italic'>मिलकर</em> बनाएं") }} />
          <p className="text-[0.9rem] text-[var(--color-mid)] leading-[1.8] mb-8">
            {t("Reach out for volunteering, donations, partnerships, or media inquiries. We respond within 24 hours.", "स्वयंसेवा, दान, साझेदारी, या मीडिया पूछताछ के लिए संपर्क करें। हम 24 घंटे के भीतर जवाब देते हैं।")}
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] min-w-[42px] bg-[rgba(193,68,14,0.1)] rounded-[12px] flex items-center justify-center text-[1rem]">📍</div>
              <div>
                <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--color-terra)] mb-1 block">
                  {t("Address", "पता")}
                </span>
                <span className="text-[0.87rem] text-[var(--color-mid)]">23, Sunder Nagar, New Delhi — 110003</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] min-w-[42px] bg-[rgba(193,68,14,0.1)] rounded-[12px] flex items-center justify-center text-[1rem]">📞</div>
              <div>
                <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--color-terra)] mb-1 block">
                  {t("Phone", "फोन")}
                </span>
                <span className="text-[0.87rem] text-[var(--color-mid)]">+91 95999 77744</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] min-w-[42px] bg-[rgba(193,68,14,0.1)] rounded-[12px] flex items-center justify-center text-[1rem]">✉️</div>
              <div>
                <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--color-terra)] mb-1 block">
                  {t("Email", "ईमेल")}
                </span>
                <span className="text-[0.87rem] text-[var(--color-mid)]">namaste@aangantrust.org</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] min-w-[42px] bg-[rgba(193,68,14,0.1)] rounded-[12px] flex items-center justify-center text-[1rem]">⏰</div>
              <div>
                <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--color-terra)] mb-1 block">
                  {t("Working Hours", "कार्य समय")}
                </span>
                <span className="text-[0.87rem] text-[var(--color-mid)]">
                  {t("Mon–Sat, 9 AM – 6:30 PM IST", "सोम–शनि, सुबह 9 – शाम 6:30 IST")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <form onSubmit={handleForm} className="flex flex-col gap-[1.1rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-[0.35rem]">
                <label className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">
                  {t("First Name", "पहला नाम")}
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder={t("Anjali", "अंजली")}
                  className="bg-white border-2 border-[var(--color-border)] rounded-[10px] py-[0.85rem] px-[1.1rem] font-sans text-[0.9rem] text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-terra)] focus:shadow-[0_0_0_3px_rgba(193,68,14,0.1)]"
                />
              </div>
              <div className="flex flex-col gap-[0.35rem]">
                <label className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">
                  {t("Last Name", "अंतिम नाम")}
                </label>
                <input 
                  type="text" 
                  placeholder={t("Verma", "वर्मा")}
                 className="bg-white border-2 border-[var(--color-border)] rounded-[10px] py-[0.85rem] px-[1.1rem] font-sans text-[0.9rem] text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-terra)] focus:shadow-[0_0_0_3px_rgba(193,68,14,0.1)]"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-[0.35rem]">
              <label className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">
                {t("Email Address", "ईमेल पता")}
              </label>
              <input 
                type="email" 
                required 
                placeholder="anjali@email.com"
                className="bg-white border-2 border-[var(--color-border)] rounded-[10px] py-[0.85rem] px-[1.1rem] font-sans text-[0.9rem] text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-terra)] focus:shadow-[0_0_0_3px_rgba(193,68,14,0.1)]"
              />
            </div>

            <div className="flex flex-col gap-[0.35rem]">
              <label className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">
                {t("Phone", "फोन")}
              </label>
              <input 
                type="tel" 
                placeholder="+91 ..."
                className="bg-white border-2 border-[var(--color-border)] rounded-[10px] py-[0.85rem] px-[1.1rem] font-sans text-[0.9rem] text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-terra)] focus:shadow-[0_0_0_3px_rgba(193,68,14,0.1)]"
              />
            </div>

            <div className="flex flex-col gap-[0.35rem]">
              <label className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">
                {t("Message", "संदेश")}
              </label>
              <textarea 
                placeholder={t("I'd like to volunteer / donate / partner...", "मैं स्वयंसेवक बनना / दान देना / साझेदारी करना चाहता/चाहती हूँ...")}
                className="bg-white border-2 border-[var(--color-border)] rounded-[10px] py-[0.85rem] px-[1.1rem] font-sans text-[0.9rem] text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-terra)] focus:shadow-[0_0_0_3px_rgba(193,68,14,0.1)] min-h-[115px] resize-none"
              />
            </div>

            <button type="submit" className="bg-[var(--color-terra)] text-white border-none cursor-pointer w-full text-[0.9rem] font-bold py-4 rounded-[12px] mt-2 transition-all hover:bg-[var(--color-terra-2)] hover:-translate-y-1 shadow-[0_6px_20px_rgba(193,68,14,0.35)]">
              {t("Send Message ✉️", "संदेश भेजें ✉️")}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
