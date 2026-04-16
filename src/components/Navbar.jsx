import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
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
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('nav')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const links = [
    { to: '/', en: 'Home', hi: 'होम' },
    { to: '/about', en: 'About', hi: 'हमारे बारे में' },
    { to: '/gallery', en: 'Gallery', hi: 'गैलरी' },
    { to: '/members', en: 'Members', hi: 'सदस्य' },
    { to: '/services', en: 'Sessions', hi: 'सत्र' },
    { to: '/contact', en: 'Contact', hi: 'संपर्क' },
  ];

  return (
    <>
      <style>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoSpin {
          from { transform: rotate(0deg) scale(1); }
          to   { transform: rotate(8deg) scale(1.08); }
        }
        @keyframes mobileMenuSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link-item {
          position: relative;
          overflow: hidden;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 1.8rem);
          height: 1.5px;
          background: var(--color-terra);
          border-radius: 2px;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .nav-link-item:hover::after,
        .nav-link-item.active-link::after {
          transform: translateX(-50%) scaleX(1);
        }
        .logo-img {
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      filter 0.35s ease,
                      box-shadow 0.35s ease;
          border-radius: 10px;
        }
        .logo-img:hover {
          transform: rotate(6deg) scale(1.1);
          filter: drop-shadow(0 4px 12px rgba(193,68,14,0.35));
        }
        .logo-text {
          transition: color 0.25s ease, letter-spacing 0.25s ease;
        }
        .logo-wrap:hover .logo-text {
          letter-spacing: 0.04em;
        }
        .logo-dot {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.25s ease;
        }
        .logo-wrap:hover .logo-dot {
          transform: translateY(-3px) scale(1.3);
        }
        .donate-btn {
          position: relative;
          overflow: hidden;
        }
        .donate-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .donate-btn:hover::before {
          transform: translateX(0);
        }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--color-text-main);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
      `}</style>

      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[200] transition-all duration-400',
          scrolled
            ? 'bg-[rgba(253,248,242,0.97)] backdrop-blur-[14px] shadow-[0_4px_30px_rgba(44,31,20,0.1)] border-b border-[var(--color-border)]'
            : ''
        )}
        style={{ animation: 'navFadeIn 0.5s ease both' }}
      >
        <div className="py-3.5 px-6 md:px-14 flex items-center justify-between gap-4">

          {/* ── LOGO ── */}
          <Link
            to="/"
            className="logo-wrap flex items-center gap-2.5 no-underline select-none"
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                overflow: 'hidden',
                border: '2px solid rgba(193,68,14,0.15)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(193,68,14,0.05)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(193,68,14,0.5)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(193,68,14,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(193,68,14,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src="./logo.png"
                alt="Delhi Alumni Group Logo"
                className="logo-img"
                style={{ width: 36, height: 36, objectFit: 'contain', display: 'block' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span
                className="logo-text font-serif font-bold text-[var(--color-text-main)]"
                style={{ fontSize: '1.15rem' }}
              >
                {lang === 'hi' ? 'दिल्ली एलुमनी' : 'Delhi Alumni'}
                <span className="logo-dot text-[var(--color-terra)]">
                  {lang === 'hi' ? '।' : '.'}
                </span>
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terra)',
                  opacity: 0.8,
                }}
              >
                {lang === 'hi' ? 'समूह' : 'Group'}
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <ul className="hidden md:flex gap-0 list-none items-center flex-wrap">
            {links.map((link) => (
              <li key={link.to} className="nav-link-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'text-[var(--color-mid)] no-underline text-[0.8rem] font-semibold py-[0.45rem] px-[0.9rem] rounded-full transition-all duration-250 tracking-[0.03em] whitespace-nowrap block hover:text-[var(--color-terra)]',
                      isActive && 'text-[var(--color-terra)] active-link'
                    )
                  }
                >
                  {t(link.en, link.hi)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── RIGHT SIDE ACTIONS ── */}
          <div className="flex items-center gap-[0.8rem]">

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center bg-[var(--color-bg-2)] border-2 border-[var(--color-border)] rounded-full overflow-hidden relative cursor-pointer h-[36px] w-[120px] shrink-0"
              title="Toggle Language"
              style={{ transition: 'border-color 0.25s ease, box-shadow 0.25s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(193,68,14,0.4)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(193,68,14,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className={cn(
                  'absolute top-[2px] left-[2px] w-[calc(50%-2px)] h-[calc(100%-4px)] bg-[var(--color-terra)] rounded-full transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]',
                  lang === 'hi' && 'translate-x-full'
                )}
              />
              <span
                className={cn(
                  'flex-1 text-center text-[0.72rem] font-bold tracking-[0.08em] py-[0.4rem] px-[0.3rem] z-[2] relative transition-colors duration-300 uppercase',
                  lang === 'en' ? 'text-white' : 'text-[var(--color-mid)]'
                )}
              >
                EN
              </span>
              <span
                className={cn(
                  'flex-1 text-center text-[0.72rem] font-bold tracking-[0.08em] py-[0.4rem] px-[0.3rem] z-[2] relative transition-colors duration-300 uppercase',
                  lang === 'hi' ? 'text-white' : 'text-[var(--color-mid)]'
                )}
              >
                हि
              </span>
            </button>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="donate-btn hidden md:block bg-[var(--color-terra)] text-white py-[0.6rem] px-[1.6rem] rounded-full font-bold shadow-[0_4px_16px_rgba(193,68,14,0.3)] no-underline whitespace-nowrap text-[0.8rem]"
              style={{ transition: 'background 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-terra-2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(193,68,14,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-terra)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(193,68,14,0.3)';
              }}
            >
              {t('Donate Now', 'अभी दान करें')}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="hamburger-line"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="hamburger-line"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="hamburger-line"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div
            style={{
              animation: 'mobileMenuSlide 0.25s ease both',
              background: 'rgba(253,248,242,0.98)',
              backdropFilter: 'blur(14px)',
              borderTop: '1px solid var(--color-border)',
              padding: '0.75rem 1.5rem 1.25rem',
            }}
          >
            <ul className="list-none flex flex-col gap-1">
              {links.map((link, i) => (
                <li
                  key={link.to}
                  style={{ animation: `navFadeIn 0.3s ease ${i * 0.05}s both` }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-[var(--color-mid)] no-underline text-[0.88rem] font-semibold py-[0.65rem] px-[0.9rem] rounded-xl transition-all duration-200 tracking-[0.03em] block hover:text-[var(--color-terra)] hover:bg-[rgba(193,68,14,0.08)]',
                        isActive && 'text-[var(--color-terra)] bg-[rgba(193,68,14,0.1)]'
                      )
                    }
                  >
                    {t(link.en, link.hi)}
                  </NavLink>
                </li>
              ))}
              <li style={{ animation: `navFadeIn 0.3s ease ${links.length * 0.05}s both`, marginTop: '0.5rem' }}>
                <Link
                  to="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="donate-btn block text-center bg-[var(--color-terra)] text-white py-[0.75rem] px-[1.6rem] rounded-full font-bold no-underline text-[0.88rem]"
                  style={{ boxShadow: '0 4px 16px rgba(193,68,14,0.3)' }}
                >
                  {t('Donate Now', 'अभी दान करें')}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}