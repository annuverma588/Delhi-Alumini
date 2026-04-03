import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const links = [
    { to: '/', en: 'Home', hi: 'होम' },
    { to: '/about', en: 'About', hi: 'हमारे बारे में' },
    { to: '/presidents', en: 'Presidents', hi: 'अध्यक्ष' },
    { to: '/gallery', en: 'Gallery', hi: 'गैलरी' },
    { to: '/members', en: 'Members', hi: 'सदस्य' },
    { to: '/services', en: 'Sessions', hi: 'सत्र' },
    { to: '/contact', en: 'Contact', hi: 'संपर्क' },
  ];

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-[200] transition-all duration-400", scrolled ? "bg-[rgba(253,248,242,0.97)] backdrop-blur-[14px] shadow-[0_4px_30px_rgba(44,31,20,0.1)] border-b border-[var(--color-border)]" : "")}>
      <div className="py-4 px-6 md:px-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-2xl font-bold text-[var(--color-text-main)] decoration-none">
          {lang === 'hi' ? 'आँगन' : 'Aangan'}<span className="text-[var(--color-terra)]">{lang === 'hi' ? '।' : '.'}</span>
        </Link>
        <ul className={cn("md:flex gap-0 list-none items-center flex-wrap hidden", menuOpen && "!flex absolute top-full left-0 right-0 bg-[var(--color-bg)] py-4 px-6 flex-col gap-1 shadow-lg border-t border-[var(--color-border)]")}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to} 
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => cn(
                  "text-[var(--color-mid)] no-underline text-[0.8rem] font-semibold py-[0.45rem] px-[0.9rem] rounded-full transition-all duration-250 tracking-[0.03em] whitespace-nowrap block hover:text-[var(--color-terra)] hover:bg-[rgba(193,68,14,0.1)]",
                  isActive && "text-[var(--color-terra)] bg-[rgba(193,68,14,0.1)]"
                )}
              >
                {t(link.en, link.hi)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[0.8rem]">
          <button 
            onClick={toggleLang} 
            className="flex items-center bg-[var(--color-bg-2)] border-2 border-[var(--color-border)] rounded-full overflow-hidden relative cursor-pointer h-[36px] w-[120px] shrink-0"
            title="Toggle Language"
          >
            <div className={cn("absolute top-[2px] left-[2px] w-[calc(50%-2px)] h-[calc(100%-4px)] bg-[var(--color-terra)] rounded-full transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]", lang === 'hi' && "translate-x-full")} />
            <span className={cn("flex-1 text-center text-[0.72rem] font-bold tracking-[0.08em] py-[0.4rem] px-[0.3rem] z-[2] relative transition-colors duration-300 uppercase", lang === 'en' ? "text-white" : "text-[var(--color-mid)]")}>EN</span>
            <span className={cn("flex-1 text-center text-[0.72rem] font-bold tracking-[0.08em] py-[0.4rem] px-[0.3rem] z-[2] relative transition-colors duration-300 uppercase", lang === 'hi' ? "text-white" : "text-[var(--color-mid)]")}>हि</span>
          </button>
          <Link 
            to="/donate" 
            className="hidden md:block bg-[var(--color-terra)] text-white py-[0.6rem] px-[1.6rem] rounded-full font-bold shadow-[0_4px_16px_rgba(193,68,14,0.3)] transition-all duration-300 hover:bg-[var(--color-terra-2)] hover:-translate-y-[2px] no-underline whitespace-nowrap text-[0.8rem]"
          >
            {t("Donate Now", "अभी दान करें")}
          </Link>
          <button className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-none border-none text-[var(--color-text-main)]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
