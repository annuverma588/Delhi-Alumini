import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Members from './Members';
import MissionSection from './Mission';
import './Hero.css';

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return undefined;
    const duration = 1800;
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
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}</span>;
};

const president = {
  img: '/President.png',
  enName: 'Mr. Atul Tripathi',
  hiName: 'श्री अतुल त्रिपाठी',
  enRole: 'President ',
  hiRole: 'प्रेसिडेंट',
  enBio:
    'Delhi Government School alumni leader Dr. Ananya Sharma built this initiative around dignity, mentorship, and access. Her vision keeps our alumni network connected to students who need guidance, exposure, and opportunities.',
  hiBio:
    'दिल्ली सरकारी विद्यालयों की पूर्व छात्र नेता डॉ. अनन्या शर्मा ने इस पहल को गरिमा, मार्गदर्शन और अवसरों के विचार पर खड़ा किया। उनकी सोच आज भी हमारे पूर्व छात्रों को विद्यार्थियों से जोड़ती है ताकि उन्हें दिशा, exposure और सही अवसर मिल सकें।',
};

const memberCards = [
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85',
    enName: 'Ramesh Nair',
    hiName: 'रमेश नायर',
    enRole: 'Strategy Mentor',
    hiRole: 'स्ट्रैटेजी मेंटर',
    enText: 'Builds partnerships with schools, district teams, and alumni groups.',
    hiText: 'विद्यालयों, जिला टीमों और पूर्व छात्र समूहों के साथ साझेदारी बनाते हैं।',
  },
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=85',
    enName: 'Priya Menon',
    hiName: 'प्रिया मेनन',
    enRole: 'Program Lead',
    hiRole: 'कार्यक्रम प्रमुख',
    enText: 'Designs mentorship, wellness, and guidance activities for students.',
    hiText: 'विद्यार्थियों के लिए मार्गदर्शन, वेलनेस और मेंटरशिप कार्यक्रम तैयार करती हैं।',
  },
  {
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=85',
    enName: 'Rohan Mehta',
    hiName: 'रोहन मेहता',
    enRole: 'Digital Coordinator',
    hiRole: 'डिजिटल समन्वयक',
    enText: 'Makes communication, registration, and volunteer coordination smoother.',
    hiText: 'कम्युनिकेशन, रजिस्ट्रेशन और वॉलंटियर समन्वय को आसान बनाते हैं।',
  },
];

const workCards = [
  {
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85',
    enTitle: 'Mentorship Sessions',
    hiTitle: 'मेंटॉरशिप सत्र',
    enDesc: 'Alumni guide students with career exposure, confidence building, and practical advice.',
    hiDesc: 'पूर्व छात्र विद्यार्थियों को करियर समझ, आत्मविश्वास और व्यावहारिक सलाह देते हैं।',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85',
    enTitle: 'Community Network',
    hiTitle: 'समुदाय नेटवर्क',
    enDesc: 'We connect alumni across Delhi to support schools, events, and student-led growth.',
    hiDesc: 'हम दिल्ली भर के पूर्व छात्रों को विद्यालयों, कार्यक्रमों और छात्र विकास से जोड़ते हैं।',
  },
  {
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85',
    enTitle: 'Youth Opportunities',
    hiTitle: 'युवा अवसर',
    enDesc: 'Students receive access to workshops, scholarships, volunteering, and leadership spaces.',
    hiDesc: 'विद्यार्थियों को वर्कशॉप, छात्रवृत्ति, स्वयंसेवा और नेतृत्व के अवसर मिलते हैं।',
  },
];

const stats = [
  { value: 18620, suffix: '+', enLabel: 'Students Reached', hiLabel: 'विद्यार्थी जुड़े' },
  { value: 490, suffix: '+', enLabel: 'Active Volunteers', hiLabel: 'सक्रिय स्वयंसेवक' },
  { value: 300, suffix: '+', enLabel: 'Schools Connected', hiLabel: 'विद्यालय जुड़े' },
];

export default function Home() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollY(currentScrollY);

      const heroHeight = heroRef.current ? heroRef.current.offsetHeight : 600;
      const progress = Math.min(currentScrollY / (heroHeight * 0.45), 1);

      if (progress > 0.15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (selector) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 18, pointerEvents: 'none' },
    visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
    fading: { opacity: 0, y: -14, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } }
  };

  const hintVariants = {
    hidden: { opacity: 0, pointerEvents: 'none', transition: { duration: 0.4 } },
    visible: { opacity: 1, pointerEvents: 'none', transition: { duration: 0.4 } }
  };

  const indicatorVariants = {
    hidden: { opacity: 0, pointerEvents: 'none', transition: { duration: 0.4 } },
    visible: { opacity: 1, pointerEvents: 'none', transition: { duration: 0.4 } }
  };

  let contentState = 'hidden';
  if (scrolled) contentState = 'fading';
  else if (isHovered) contentState = 'visible';

  let hintState = (!scrolled && !isHovered) ? 'visible' : 'hidden';
  let indicatorState = !scrolled ? 'visible' : 'hidden';

  const parallax = scrollY * 0.28;
  const progressStat = Math.min(scrollY / ((heroRef.current?.offsetHeight || 600) * 0.45 || 1), 1);
  const stripOpacity = Math.max(0, 1 - progressStat * 2.5);
  const statTransform = `translateY(${progressStat * 12}px)`;

  return (
    <div className="relative w-full overflow-hidden bg-[var(--color-bg)]">
      <div
        className="hero"
        id="hero"
        ref={heroRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          className="video-bg"
          id="videoBg"
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
          style={{ transform: `translateY(${parallax}px) scale(1.04)` }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="gradient-overlay"></div>

        <button className="sound-btn" id="soundBtn" title="Toggle sound" aria-label="Toggle sound" onClick={toggleMute}>
          {isMuted ? (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>

        {/* ── HERO CONTENT — hover se aata hai ── */}
        <motion.div
          className="hero-content"
          id="heroContent"
          initial="hidden"
          animate={contentState}
          variants={contentVariants}
        >
          <p className="tagline">
            {t('Connecting Alumni. Empowering Students.', 'पूर्व छात्रों को जोड़ना। विद्यार्थियों को सशक्त बनाना।')}
            {' '}<span className="heart">🎓</span>
          </p>
          <p className="subtitle">
            {t(
              'Delhi Alumni Group is a nonprofit uniting government school alumni to mentor, guide, and uplift the next generation of Delhi\'s youth.',
              'दिल्ली एलुमनी ग्रुप एक NGO है जो सरकारी विद्यालयों के पूर्व छात्रों को एकजुट करती है — ताकि दिल्ली की अगली पीढ़ी को मार्गदर्शन, प्रेरणा और अवसर मिल सके।'
            )}
          </p>
          <div className="cta-group">
            <button className="btn-primary" onClick={() => scrollToSection('#contact')}>
              {t('Join the Movement', 'अभियान से जुड़ें')}
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('#about')}>
              {t('Our Story', 'हमारी कहानी')}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hover-hint"
          id="hoverHint"
          initial="hidden"
          animate={hintState}
          variants={hintVariants}
        >
          {t('Hover to reveal', 'देखने के लिए होवर करें')}
        </motion.div>

        <motion.div
          className="scroll-indicator"
          id="scrollIndicator"
          initial="hidden"
          animate={indicatorState}
          variants={indicatorVariants}
        >
          <span className="scroll-label">{t('Scroll', 'स्क्रॉल करें')}</span>
          <div className="scroll-line"></div>
        </motion.div>

        {/* ── STAT STRIP ── */}
        <div className="stat-strip" id="statStrip" style={{ opacity: stripOpacity, transform: statTransform }}>
          <div className="stat">
            <div className="stat-num">18K+</div>
            <div className="stat-label">{t('Students Reached', 'विद्यार्थी जुड़े')}</div>
          </div>
          <div className="stat">
            <div className="stat-num">300+</div>
            <div className="stat-label">{t('Schools Connected', 'विद्यालय जुड़े')}</div>
          </div>
          <div className="stat">
            <div className="stat-num">490+</div>
            <div className="stat-label">{t('Active Volunteers', 'सक्रिय स्वयंसेवक')}</div>
          </div>
        </div>

      </div>

      {/* ── BAAKI SAARA CODE SAME ── */}

      <section id="about" className="bg-[var(--color-bg-2)] px-6 py-24 md:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[0.88fr_1.12fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative mb-6 flex h-[270px] w-[270px] items-center justify-center rounded-full border-[8px] border-[rgba(193,68,14,0.12)] bg-white shadow-[0_18px_50px_rgba(44,31,20,0.12)]">
              <div className="absolute inset-[-16px] rounded-full border border-dashed border-[rgba(193,68,14,0.3)]" />
              <img src={president.img} alt={t(president.enName, president.hiName)} className="h-[220px] w-[220px] rounded-full object-cover" />
            </div>
            <h2 className="font-serif text-[2rem] font-black text-[var(--color-text-main)]">{t(president.enName, president.hiName)}</h2>
            <p className="mt-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra)]">{t(president.enRole, president.hiRole)}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra)]">{t('About the Movement', 'हमारी पहल के बारे में')}</div>
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.4rem)] font-black leading-[1.12] text-[var(--color-text-main)]">{t('An alumni movement rooted in pride and service', 'गौरव और सेवा से जुड़ा पूर्व छात्र अभियान')}</h2>
            <p className="mt-6 max-w-[720px] text-[1rem] leading-8 text-[var(--color-mid)]">{t(president.enBio, president.hiBio)}</p>
            <p className="mt-5 max-w-[720px] text-[1rem] leading-8 text-[var(--color-mid)]">
              {t('We are shaping a platform where successful alumni can return to schools with purpose, share experience with honesty, and help students imagine a wider future for themselves.', 'हम ऐसा मंच बना रहे हैं जहाँ सफल पूर्व छात्र उद्देश्य के साथ अपने विद्यालयों से फिर जुड़ें, ईमानदारी से अपने अनुभव साझा करें और विद्यार्थियों को बड़ा भविष्य देखने में मदद दें।')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="inline-block rounded-full bg-[var(--color-terra)] px-7 py-3.5 text-[0.86rem] font-bold text-white no-underline transition-all hover:-translate-y-1 hover:bg-[var(--color-terra-2)]">{t('Read Full Story', 'पूरी कहानी पढ़ें')}</Link>
              <Link to="/presidents" className="inline-block rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-[0.86rem] font-bold text-[var(--color-text-main)] no-underline transition-all hover:border-[var(--color-terra)] hover:text-[var(--color-terra)]">{t('Meet Leadership', 'नेतृत्व से मिलें')}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Members />
      <section className="bg-[var(--color-bg)] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-[680px]">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra)]">{t('Member Section', 'सदस्य अनुभाग')}</div>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] text-[var(--color-text-main)]">{t('People who keep the community active', 'वे लोग जो समुदाय को सक्रिय रखते हैं')}</h2>
            <p className="mt-4 text-[0.98rem] leading-8 text-[var(--color-mid)]">{t('Every initiative moves forward because dedicated members contribute time, expertise, and a strong sense of responsibility.', 'हर पहल इसलिए आगे बढ़ती है क्योंकि समर्पित सदस्य अपना समय, अनुभव और जिम्मेदारी के भाव के साथ योगदान देते हैं।')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {memberCards.map((member, index) => (
              <motion.div key={member.enName} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_36px_rgba(44,31,20,0.08)]">
                <div className="mb-5 flex items-center gap-4">
                  <img src={member.img} alt={t(member.enName, member.hiName)} className="h-20 w-20 rounded-full object-cover ring-4 ring-[rgba(193,68,14,0.12)]" />
                  <div>
                    <h3 className="font-serif text-[1.35rem] font-bold text-[var(--color-text-main)]">{t(member.enName, member.hiName)}</h3>
                    <p className="mt-1 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-[var(--color-terra)]">{t(member.enRole, member.hiRole)}</p>
                  </div>
                </div>
                <p className="text-[0.92rem] leading-8 text-[var(--color-mid)]">{t(member.enText, member.hiText)}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/members" className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-bg-2)] px-7 py-3.5 text-[0.86rem] font-bold text-[var(--color-text-main)] no-underline transition-all hover:border-[var(--color-terra)] hover:text-[var(--color-terra)]">{t('See All Members', 'सभी सदस्य देखें')}</Link>
          </div>
        </div>
      </section>
      <MissionSection />
      <section className="bg-[var(--color-bg-2)] px-6 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-[720px]">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra)]">{t('Work Section', 'कार्य अनुभाग')}</div>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] text-[var(--color-text-main)]">{t('How we create visible impact', 'हम असर कैसे बनाते हैं')}</h2>
            <p className="mt-4 text-[0.98rem] leading-8 text-[var(--color-mid)]">{t('Our work combines alumni pride with direct student support, thoughtful programming, and long-term community participation.', 'हमारा काम alumni pride को direct student support, thoughtful programming और long-term community participation के साथ जोड़ता है।')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workCards.map((card, index) => (
              <motion.div key={card.enTitle} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-[0_14px_36px_rgba(44,31,20,0.08)]">
                <img src={card.img} alt={t(card.enTitle, card.hiTitle)} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-[1.4rem] font-bold leading-[1.25] text-[var(--color-text-main)]">{t(card.enTitle, card.hiTitle)}</h3>
                  <p className="mt-3 text-[0.92rem] leading-8 text-[var(--color-mid)]">{t(card.enDesc, card.hiDesc)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/services" className="inline-block rounded-full bg-[var(--color-terra)] px-7 py-3.5 text-[0.86rem] font-bold text-white no-underline transition-all hover:-translate-y-1 hover:bg-[var(--color-terra-2)]">{t('Explore All Sessions', 'सभी सत्र देखें')}</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--color-text-main)] px-6 py-24 md:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:grid-cols-[0.85fr_1.15fr] md:p-12">
          <div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra-light)]">{t('Contact Section', 'संपर्क अनुभाग')}</div>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.14] text-white">{t('Let us build this together', 'आइए इसे साथ मिलकर आगे बढ़ाएँ')}</h2>
            <p className="mt-5 max-w-[500px] text-[0.98rem] leading-8 text-white/70">{t('For volunteering, partnerships, school coordination, or alumni registration, reach out and our team will respond with the right next step.', 'स्वयंसेवा, साझेदारी, स्कूल coordination या alumni registration के लिए हमसे जुड़ें, हमारी टीम आपको सही अगले कदम के साथ जवाब देगी।')}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-terra-light)]">{t('Email', 'ईमेल')}</div>
                <div className="mt-2 text-[0.95rem] text-white">community@delhialumni.org</div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-terra-light)]">{t('Phone', 'फ़ोन')}</div>
                <div className="mt-2 text-[0.95rem] text-white">+91 95999 77744</div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder={t('Your name', 'आपका नाम')} className="rounded-[14px] border border-[var(--color-border)] px-4 py-3.5 text-[0.92rem] text-[var(--color-text-main)] outline-none transition focus:border-[var(--color-terra)]" />
              <input type="email" placeholder={t('Email address', 'ईमेल पता')} className="rounded-[14px] border border-[var(--color-border)] px-4 py-3.5 text-[0.92rem] text-[var(--color-text-main)] outline-none transition focus:border-[var(--color-terra)]" />
            </div>
            <input type="text" placeholder={t('Subject', 'विषय')} className="mt-4 w-full rounded-[14px] border border-[var(--color-border)] px-4 py-3.5 text-[0.92rem] text-[var(--color-text-main)] outline-none transition focus:border-[var(--color-terra)]" />
            <textarea placeholder={t('Tell us how you would like to contribute', 'हमें बताइए आप कैसे योगदान देना चाहते हैं')} className="mt-4 min-h-[160px] w-full rounded-[14px] border border-[var(--color-border)] px-4 py-3.5 text-[0.92rem] leading-7 text-[var(--color-text-main)] outline-none transition focus:border-[var(--color-terra)]" />
            <div className="mt-5 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-block rounded-full bg-[var(--color-terra)] px-7 py-3.5 text-[0.86rem] font-bold text-white no-underline transition-all hover:-translate-y-1 hover:bg-[var(--color-terra-2)]">{t('Open Full Contact Page', 'पूरा संपर्क पेज खोलें')}</Link>
              <Link to="/donate" className="inline-block rounded-full border border-[var(--color-border)] px-7 py-3.5 text-[0.86rem] font-bold text-[var(--color-text-main)] no-underline transition-all hover:border-[var(--color-terra)] hover:text-[var(--color-terra)]">{t('Support the Mission', 'मिशन को सहयोग दें')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
