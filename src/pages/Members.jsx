import { useLanguage } from '../context/LanguageContext';

const membersData = [
  { img: '/President.png', name: 'Mr. Atul Tripathi', title: 'President', role: 'Delhi Govt School Alumni Association', quote: '' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8Urcc0waypyf-L8wKcHBX9bQZCyJ___PfA&s', name: 'Mr. Ramendra Mishra', title: 'Faculty UPSC', role: 'UPSC', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/46.jpg', name: 'Dr. Vinod Kumar', title: 'Deputy Director', role: 'ICHR', quote: '' },
  { img: '', name: 'Dr. Mohit Tiwari', title: 'Doctor', role: '', quote: '' },
  { img: 'https://www.arcinstitute.in/Anil_sir.jpeg', name: 'Anil Upadhyay', title: 'Founder (SEF SEF Foundation) ', role: 'SEF Foundation', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/49.jpg', name: 'Mukesh Kumar', title: 'Principal', role: 'DOE', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/50.jpg', name: 'Suresh Kumar', title: 'Principal', role: 'DOE', quote: '' },
  { img: 'https://randomuser.me/api/portraits/women/51.jpg', name: 'Monika Vishwash', title: 'Principal', role: 'DOE', quote: '' },
  { img: 'https://randomuser.me/api/portraits/women/52.jpg', name: 'Nidhi', title: '', role: 'DOE', quote: '' },
  { img: 'https://randomuser.me/api/portraits/women/53.jpg', name: 'Parul Jain', title: 'Journalist', role: '', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/54.jpg', name: 'Hemant Baisla', title: 'Advocate', role: '', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/55.jpg', name: 'Vijay Ji', title: 'Retd.', role: 'Italian Trade Commission', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/56.jpg', name: 'Rakesh Khatri Ji', title: 'Nest Man of India', role: '', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/57.jpg', name: 'Deepak', title: 'CA', role: '', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/58.jpg', name: 'Ratan Deep', title: '', role: 'Shiva Ji College', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/59.jpg', name: 'Shubham Tevatia', title: '', role: 'Delhi Police', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/60.jpg', name: 'Divyanshu Malhotra', title: '', role: 'DD News Media', quote: '' },
  { img: 'https://randomuser.me/api/portraits/men/61.jpg', name: 'Arvind Tiwari', title: 'Retd.', role: 'DOE', quote: '' },
];

export default function Members() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  // Repeat data for seamless infinite loop
  const loop1 = [...membersData, ...membersData];
  const loop2 = [...membersData].reverse();
  const loop2Double = [...loop2, ...loop2];

  return (
    <div className="bg-[var(--color-bg)] pt-32 pb-24 min-h-[100vh] overflow-hidden">
      <div className="px-6 md:px-14 mb-8">
        <div className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--color-terra)] flex items-center gap-2 mb-4 relative before:content-[''] before:block before:w-5 before:h-[2px] before:bg-[var(--color-terra)]">
          {t("Our People", "हमारे लोग")}
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.15] text-[var(--color-text-main)]" dangerouslySetInnerHTML={{ __html: t("Meet Our <em class='text-[var(--color-terra)] italic'>Members</em>", "हमारे <em class='text-[var(--color-terra)] italic'>सदस्यों</em> से मिलें") }} />
        <p className="text-[0.92rem] text-[var(--color-mid)] mt-3 max-w-[540px] leading-[1.7]">
          {t("The heart of Aangan Trust — dedicated individuals who show up every single day for India's children.", "आँगन ट्रस्ट का दिल — समर्पित लोग जो भारत के बच्चों के लिए हर रोज़ उपस्थित होते हैं।")}
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loopScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .members-loop {
          overflow: hidden; padding: 2rem 0; position: relative;
        }
        .members-loop::before, .members-loop::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none;
        }
        .members-loop::before { left: 0; background: linear-gradient(to right, var(--color-bg), transparent); }
        .members-loop::after { right: 0; background: linear-gradient(to left, var(--color-bg), transparent); }
        .members-track {
          display: flex; gap: 1.8rem; animation: loopScroll 30s linear infinite; width: max-content;
        }
        .members-track:hover { animation-play-state: paused; }
      `}} />

      {/* Row 1 */}
      <div className="members-loop">
        <div className="members-track">
          {loop1.map((m, i) => (
            <div key={i} className="w-[200px] flex-shrink-0 cursor-pointer relative group">
              <div className="w-[200px] h-[240px] rounded-[20px] overflow-hidden relative">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(44,31,20,0.75)] opacity-0 transition-opacity duration-400 group-hover:opacity-100 rounded-[20px]" />
                <div className="absolute bottom-0 left-0 right-0 p-[1.2rem] translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-terra-light)]">{m.role}</div>
                  <div className="font-serif text-[0.82rem] italic text-white/85 mt-1">"{m.quote}"</div>
                </div>
              </div>
              <div className="font-serif font-bold text-[1rem] text-[var(--color-text-main)] mt-3 text-center">{m.name}</div>
              <div className="text-[0.75rem] text-[var(--color-mid)] text-center font-medium">{m.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[2rem]"></div>

      {/* Row 2 (Reverse) */}
      <div className="members-loop">
        <div className="members-track" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {loop2Double.map((m, i) => (
            <div key={i} className="w-[200px] flex-shrink-0 cursor-pointer relative group">
              <div className="w-[200px] h-[240px] rounded-[20px] overflow-hidden relative">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(44,31,20,0.75)] opacity-0 transition-opacity duration-400 group-hover:opacity-100 rounded-[20px]" />
                <div className="absolute bottom-0 left-0 right-0 p-[1.2rem] translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-terra-light)]">{m.role}</div>
                  <div className="font-serif text-[0.82rem] italic text-white/85 mt-1">"{m.quote}"</div>
                </div>
              </div>
              <div className="font-serif font-bold text-[1rem] text-[var(--color-text-main)] mt-3 text-center">{m.name}</div>
              <div className="text-[0.75rem] text-[var(--color-mid)] text-center font-medium">{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
