import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85',
    enTitle: 'Career awareness workshop',
    hiTitle: 'करियर जागरूकता कार्यशाला',
    enTag: 'Workshop',
    hiTag: 'कार्यशाला',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85',
    enTitle: 'Alumni meet with students',
    hiTitle: 'विद्यार्थियों के साथ alumni मिलन',
    enTag: 'Alumni',
    hiTag: 'एल्युमनी',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=85',
    enTitle: 'Community learning drive',
    hiTitle: 'सामुदायिक शिक्षण अभियान',
    enTag: 'Community',
    hiTag: 'समुदाय',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85',
    enTitle: 'School visit day',
    hiTitle: 'विद्यालय भ्रमण दिवस',
    enTag: 'Visit',
    hiTag: 'भ्रमण',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=85',
    enTitle: 'Mentoring circles',
    hiTitle: 'मेंटॉरशिप सर्कल',
    enTag: 'Mentorship',
    hiTag: 'मेंटॉरशिप',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=85',
    enTitle: 'Student celebration moments',
    hiTitle: 'विद्यार्थियों के उत्सव क्षण',
    enTag: 'Celebration',
    hiTag: 'उत्सव',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=85',
    enTitle: 'Creative classroom engagement',
    hiTitle: 'रचनात्मक कक्षा सहभागिता',
    enTag: 'Classroom',
    hiTag: 'कक्षा',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=85',
    enTitle: 'Leadership and guidance',
    hiTitle: 'नेतृत्व और मार्गदर्शन',
    enTag: 'Leadership',
    hiTag: 'नेतृत्व',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=85',
    enTitle: 'Youth empowerment session',
    hiTitle: 'युवा सशक्तिकरण सत्र',
    enTag: 'Empowerment',
    hiTag: 'सशक्तिकरण',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=85',
    enTitle: 'Peer learning groups',
    hiTitle: 'सहकर्मी शिक्षण समूह',
    enTag: 'Learning',
    hiTag: 'शिक्षण',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&q=85',
    enTitle: 'Annual recognition ceremony',
    hiTitle: 'वार्षिक सम्मान समारोह',
    enTag: 'Ceremony',
    hiTag: 'समारोह',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85',
    enTitle: 'Science & innovation fair',
    hiTitle: 'विज्ञान एवं नवाचार मेला',
    enTag: 'Innovation',
    hiTag: 'नवाचार',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=85',
    enTitle: 'Reading and literacy drive',
    hiTitle: 'पढ़ाई और साक्षरता अभियान',
    enTag: 'Literacy',
    hiTag: 'साक्षरता',
    span: '',
  },
];

const tagColors = {
  Workshop: 'bg-amber-400/90 text-amber-900',
  Alumni: 'bg-emerald-400/90 text-emerald-900',
  Community: 'bg-sky-400/90 text-sky-900',
  Visit: 'bg-violet-400/90 text-violet-900',
  Mentorship: 'bg-rose-400/90 text-rose-900',
  Celebration: 'bg-orange-400/90 text-orange-900',
  Classroom: 'bg-teal-400/90 text-teal-900',
  Leadership: 'bg-indigo-400/90 text-indigo-900',
  Empowerment: 'bg-fuchsia-400/90 text-fuchsia-900',
  Learning: 'bg-lime-400/90 text-lime-900',
  Ceremony: 'bg-pink-400/90 text-pink-900',
  Innovation: 'bg-cyan-400/90 text-cyan-900',
  Literacy: 'bg-yellow-400/90 text-yellow-900',
};

export default function Gallery() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);
  const [selected, setSelected] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openImage = (img, idx) => {
    setSelected(img);
    setSelectedIdx(idx);
  };

  const closeImage = () => {
    setSelected(null);
    setSelectedIdx(null);
  };

  const goNext = useCallback(() => {
    const next = (selectedIdx + 1) % images.length;
    setSelected(images[next]);
    setSelectedIdx(next);
  }, [selectedIdx]);

  const goPrev = useCallback(() => {
    const prev = (selectedIdx - 1 + images.length) % images.length;
    setSelected(images[prev]);
    setSelectedIdx(prev);
  }, [selectedIdx]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!selected) return;
      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, goNext, goPrev]);

  return (
    <section className="min-h-screen bg-[var(--color-bg)] px-6 pt-32 pb-24 md:px-14">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 max-w-[800px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[var(--color-terra)]" />
            <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[var(--color-terra)]">
              {t('Gallery', 'गैलरी')}
            </span>
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,4rem)] font-black leading-[1.08] text-[var(--color-text-main)] tracking-tight">
            {t('Moments that reflect our community', 'हमारे समुदाय को दिखाते हुए कुछ पल')}
          </h1>
          <p className="mt-5 text-[1.05rem] leading-8 text-[var(--color-mid)] max-w-xl">
            {t(
              'A visual journey through school visits, mentorship sessions, celebrations, and alumni participation across our network.',
              'हमारे नेटवर्क में हुए school visits, mentorship sessions, celebrations और alumni participation की एक झलक।'
            )}
          </p>
          <div className="mt-6 text-[0.8rem] text-[var(--color-mid)] font-medium">
            {images.length} {t('moments captured', 'पल संजोए गए')}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, index) => {
            const tagKey = img.enTag;
            const tagClass = tagColors[tagKey] || 'bg-white/80 text-gray-800';
            return (
              <motion.button
                key={img.src}
                type="button"
                onClick={() => openImage(img, index)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terra)] focus-visible:ring-offset-2 ${img.span}`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={t(img.enTitle, img.hiTitle)}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top tag */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.62rem] font-black uppercase tracking-[0.12em] backdrop-blur-sm ${tagClass}`}>
                    {t(img.enTag, img.hiTag)}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-serif text-[0.95rem] font-bold leading-[1.3] text-white drop-shadow-sm line-clamp-2">
                    {t(img.enTitle, img.hiTitle)}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/80">
                      {t('View full', 'देखें')}
                    </span>
                    <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>

                {/* Shimmer line on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--color-terra)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </motion.button>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/92 backdrop-blur-sm cursor-zoom-out"
                onClick={closeImage}
              />

              {/* Nav: Prev */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 md:left-8 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Nav: Next */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 md:right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Close button */}
              <button
                type="button"
                onClick={closeImage}
                className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image panel */}
              <motion.div
                key={selected.src}
                initial={{ scale: 0.92, opacity: 0, y: 12 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 mx-4 w-full max-w-5xl overflow-hidden rounded-3xl bg-[#111] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.src}
                  alt={t(selected.enTitle, selected.hiTitle)}
                  className="max-h-[75vh] w-full object-cover"
                />
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <span className="text-[0.68rem] font-black uppercase tracking-[0.15em] text-[var(--color-terra)]">
                      {t(selected.enTag, selected.hiTag)}
                    </span>
                    <h3 className="mt-1 font-serif text-[1.35rem] font-bold text-white leading-snug">
                      {t(selected.enTitle, selected.hiTitle)}
                    </h3>
                  </div>
                  <div className="text-right text-[0.75rem] text-white/40 font-medium tabular-nums shrink-0 ml-6">
                    {selectedIdx + 1} / {images.length}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-[3px] w-full bg-white/10">
                  <div
                    className="h-full bg-[var(--color-terra)] transition-all duration-300"
                    style={{ width: `${((selectedIdx + 1) / images.length) * 100}%` }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}