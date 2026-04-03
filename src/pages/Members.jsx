import { useLanguage } from '../context/LanguageContext';

const membersData = [
  { img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', name: 'Ananya Sharma', title: 'Founder & Trustee', role: 'Social Worker', quote: 'Every child deserves a safe space.' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', name: 'Ramesh Nair', title: 'Sr. Trustee', role: 'IAS (Retd.)', quote: 'Policy meets purpose here.' },
  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80', name: 'Priya Menon', title: 'Program Director', role: 'Public Health', quote: 'Health is the first right.' },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', name: 'Vikram Joshi', title: 'President', role: 'Economist', quote: 'Change is data + empathy.' },
  { img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80', name: 'Kavya Iyer', title: 'Field Coordinator', role: 'Social Work', quote: 'Grassroots is where magic is.' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80', name: 'Arjun Singh', title: 'Education Lead', role: 'Teacher & Mentor', quote: 'A book is a superpower.' },
  { img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80', name: 'Meena Pillai', title: 'Health Coordinator', role: 'Nurse & Activist', quote: 'Healing begins with dignity.' },
  { img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80', name: 'Rohan Mehta', title: 'Tech Lead', role: 'Software Engineer', quote: 'Code can change the world.' },
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
