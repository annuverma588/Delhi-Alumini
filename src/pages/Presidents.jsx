import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const presidentsData = [
  { img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=85', num: '01', name: 'Dr. Ananya Sharma', role: 'Founder & President (2007–2015)', bio: 'A visionary social worker from Delhi, Dr. Ananya Sharma founded Aangan Trust with three volunteers and one borrowed classroom. Under her leadership, the Trust expanded to 5 states and established its child protection model now adopted by 3 state governments.', stats: [{n: '8', l: 'Years Served'}, {n: '5', l: 'States Expanded'}, {n: '4K+', l: 'Lives Impacted'}] },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85', num: '02', name: 'Shri Ramesh Nair', role: 'President (2015–2019)', bio: 'A retired IAS officer and child welfare champion, Shri Ramesh Nair brought institutional rigour and government partnerships to Aangan. He launched the Vidya Jyot digital classroom program and doubled the number of learning centres.', stats: [{n: '4', l: 'Years Served'}, {n: '30+', l: 'Classrooms Built'}, {n: '9K+', l: 'Lives Impacted'}] },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85', num: '03', name: 'Ms. Priya Menon', role: 'President (2019–2023)', bio: 'A former UNICEF consultant and public health specialist, Ms. Priya Menon spearheaded the Aarogya Rath mobile health initiative and expanded nutrition programs to 18 hubs. She secured the organisation\'s FCRA certification.', stats: [{n: '4', l: 'Years Served'}, {n: '8', l: 'Mobile Clinics'}, {n: '14K+', l: 'Lives Impacted'}] },
  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85', num: '04', name: 'Dr. Vikram Joshi', role: 'President (2023–Present)', bio: 'An economist and social entrepreneur, Dr. Vikram Joshi is driving Aangan\'s digital transformation and expansion into Northeast India. His flagship program, Skill Setu, trains young women in technology and entrepreneurship.', stats: [{n: '2+', l: 'Years Served'}, {n: '3', l: 'New States'}, {n: '18K+', l: 'Lives Impacted'}] },
];

const presHiData = [
  { num: '01', name: 'डॉ. अनन्या शर्मा', role: 'संस्थापक और अध्यक्ष (2007–2015)', bio: 'दिल्ली की एक दूरदर्शी समाज सेविका, डॉ. अनन्या शर्मा ने आँगन ट्रस्ट की स्थापना तीन स्वयंसेवकों और एक उधार की कक्षा से की। उनके नेतृत्व में ट्रस्ट 5 राज्यों में फैल गया।', stats: [{n: '8', l: 'सेवा वर्ष'}, {n: '5', l: 'राज्य विस्तार'}, {n: '4K+', l: 'जीवन प्रभावित'}] },
  { num: '02', name: 'श्री रमेश नायर', role: 'अध्यक्ष (2015–2019)', bio: 'सेवानिवृत्त IAS अधिकारी और बाल कल्याण चैंपियन, श्री रमेश नायर ने संस्थागत कठोरता और सरकारी साझेदारी लाई। उन्होंने विद्या ज्योत डिजिटल कक्षा कार्यक्रम शुरू किया।', stats: [{n: '4', l: 'सेवा वर्ष'}, {n: '30+', l: 'कक्षाएं बनीं'}, {n: '9K+', l: 'जीवन प्रभावित'}] },
  { num: '03', name: 'सुश्री प्रिया मेनन', role: 'अध्यक्ष (2019–2023)', bio: 'पूर्व UNICEF सलाहकार और सार्वजनिक स्वास्थ्य विशेषज्ञ, सुश्री प्रिया मेनन ने आरोग्य रथ मोबाइल स्वास्थ्य पहल का नेतृत्व किया।', stats: [{n: '4', l: 'सेवा वर्ष'}, {n: '8', l: 'मोबाइल क्लीनिक'}, {n: '14K+', l: 'जीवन प्रभावित'}] },
  { num: '04', name: 'डॉ. विक्रम जोशी', role: 'अध्यक्ष (2023–वर्तमान)', bio: 'अर्थशास्त्री और सामाजिक उद्यमी, डॉ. विक्रम जोशी आँगन के डिजिटल परिवर्तन और पूर्वोत्तर भारत में विस्तार का नेतृत्व कर रहे हैं।', stats: [{n: '2+', l: 'सेवा वर्ष'}, {n: '3', l: 'नए राज्य'}, {n: '18K+', l: 'जीवन प्रभावित'}] },
];

export default function Presidents() {
  const { lang } = useLanguage();
  const [idx, setIdx] = useState(0);

  const t = (en, hi) => (lang === 'hi' ? hi : en);
  const data = lang === 'hi' ? presHiData[idx] : presidentsData[idx];

  // Auto-rotate
  useEffect(() => {
    const int = setInterval(() => setIdx(v => (v + 1) % 4), 6000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="bg-[var(--color-bg-2)] pt-32 pb-24 px-6 md:px-14 min-h-screen overflow-hidden">
      <div className="text-center mb-16">
        <div className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--color-terra)] flex justify-center items-center gap-2 mb-4 relative before:content-[''] before:block before:w-5 before:h-[2px] before:bg-[var(--color-terra)]">
          {t('Our Leadership', 'हमारा नेतृत्व')}
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.15] text-[var(--color-text-main)]" dangerouslySetInnerHTML={{ __html: t("Meet Our <em class='text-[var(--color-terra)] italic'>Presidents</em>", "हमारे <em class='text-[var(--color-terra)] italic'>अध्यक्षों</em> से मिलें") }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Rotating Circular Image Section */}
        <div className="relative flex justify-center items-center order-2 md:order-1 mt-10 md:mt-0">
          <div className="absolute inset-[-18px] rounded-full border-2 border-dashed border-[rgba(193,68,14,0.3)] animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-[-30px] rounded-full border border-[rgba(74,124,89,0.2)] animate-[spin_30s_linear_infinite_reverse]" />
          
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-[6px] border-[var(--color-terra)] shadow-[0_0_0_12px_rgba(193,68,14,0.1),_0_20px_60px_rgba(44,31,20,0.2)] relative flex-shrink-0 overflow-hidden bg-white">
             {presidentsData.map((p, i) => (
                <img 
                  key={i} 
                  src={p.img} 
                  className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-1000", i === idx ? "opacity-100" : "opacity-0")}
                  alt="President" 
                />
             ))}
          </div>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {presidentsData.map((p, i) => (
              <img 
                key={i} 
                src={p.img} 
                onClick={() => setIdx(i)}
                className={cn("w-[52px] h-[52px] rounded-full object-cover border-[3px] cursor-pointer transition-all duration-300", i === idx ? "border-[var(--color-terra)] scale-110 opacity-100" : "border-transparent opacity-50")}
                alt="" 
              />
            ))}
          </div>
        </div>

        {/* Text Details Section */}
        <div className="order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.div 
              key={idx + lang} 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.4 }}
            >
              <div className="font-serif text-[5rem] font-black text-[var(--color-border)] leading-[1] -mb-2">{data.num}</div>
              <h2 className="font-serif text-[2.2rem] font-black text-[var(--color-text-main)] mb-1">{data.name}</h2>
              <span className="text-[0.8rem] font-bold tracking-[0.15em] uppercase text-[var(--color-terra)] block mb-6">{data.role}</span>
              <p className="text-[0.93rem] text-[var(--color-mid)] leading-[1.85] mb-8">{data.bio}</p>
              
              <div className="flex gap-8 mb-8">
                {data.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <span className="font-serif text-[2rem] font-black text-[var(--color-terra)] block leading-none mb-1">{s.n}</span>
                    <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-mid)]">{s.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3">
            <button onClick={() => setIdx((idx - 1 + 4) % 4)} className="w-11 h-11 rounded-full bg-white border-2 border-[var(--color-border)] flex items-center justify-center cursor-pointer text-base transition-all duration-300 hover:bg-[var(--color-terra)] hover:border-[var(--color-terra)] hover:text-white">
              ←
            </button>
            <button onClick={() => setIdx((idx + 1) % 4)} className="w-11 h-11 rounded-full bg-white border-2 border-[var(--color-border)] flex items-center justify-center cursor-pointer text-base transition-all duration-300 hover:bg-[var(--color-terra)] hover:border-[var(--color-terra)] hover:text-white">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
