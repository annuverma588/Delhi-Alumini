import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  return (
    <footer className="bg-[var(--color-text-main)] pt-20 px-6 md:px-14 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <Link to="/" className="font-serif text-[1.6rem] font-black text-white no-underline mb-4 block">
            {lang === 'hi' ? 'आँगन' : 'Aangan'}<span className="text-[var(--color-terra-light)]">{lang === 'hi' ? '।' : '.'}</span>
          </Link>
          <p className="text-[0.83rem] text-white/40 leading-[1.85] max-w-[270px] mb-6">
            {t(
              "Creating safe, nurturing spaces for India's most vulnerable children since 2007. Every child belongs.",
              "2007 से भारत के सबसे कमज़ोर बच्चों के लिए सुरक्षित, पोषण भरी जगहें बनाना। हर बच्चा यहाँ का है।"
            )}
          </p>
          <div className="flex gap-[0.6rem]">
            {['f', 'in', '𝕏', '▶', '📷'].map((icon, i) => (
              <a key={i} href="#" className="w-[36px] h-[36px] rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center text-[0.8rem] text-white/40 no-underline transition-all duration-300 hover:bg-[var(--color-terra)] hover:border-[var(--color-terra)] hover:text-white">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/35 mb-[1.2rem] block">
            {t("Organisation", "संगठन")}
          </span>
          <ul className="list-none flex flex-col gap-[0.65rem] m-0 p-0">
            <li><Link to="/about" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("About Aangan", "आँगन के बारे में")}</Link></li>
            <li><Link to="/gallery" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Gallery", "गैलरी")}</Link></li>
            <li><Link to="/presidents" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Presidents", "अध्यक्ष")}</Link></li>
            <li><Link to="/members" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Members", "सदस्य")}</Link></li>
          </ul>
        </div>
        <div>
          <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/35 mb-[1.2rem] block">
            {t("Get Involved", "जुड़ें")}
          </span>
          <ul className="list-none flex flex-col gap-[0.65rem] m-0 p-0">
            <li><Link to="/donate" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Donate", "दान करें")}</Link></li>
            <li><Link to="/contact" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Volunteer", "स्वयंसेवी बनें")}</Link></li>
            <li><Link to="/services" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Our Sessions", "हमारे सत्र")}</Link></li>
            <li><a href="#" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Corporate CSR", "कॉर्पोरेट CSR")}</a></li>
          </ul>
        </div>
        <div>
          <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/35 mb-[1.2rem] block">
            {t("Resources", "संसाधन")}
          </span>
          <ul className="list-none flex flex-col gap-[0.65rem] m-0 p-0">
            <li><a href="#" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Media Kit", "मीडिया किट")}</a></li>
            <li><a href="#" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("80G Certificate", "80G प्रमाणपत्र")}</a></li>
            <li><a href="#" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("FCRA Registration", "FCRA पंजीकरण")}</a></li>
            <li><a href="#" className="text-white/45 text-[0.83rem] no-underline transition-colors hover:text-[var(--color-terra-light)]">{t("Privacy Policy", "गोपनीयता नीति")}</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[0.76rem] text-white/25 gap-4">
        <span>{t("© 2025 Aangan Trust. Registered under Societies Registration Act. 80G & FCRA Approved.", "© 2025 आँगन ट्रस्ट। सोसायटी पंजीकरण अधिनियम के तहत पंजीकृत। 80G और FCRA अनुमोदित।")}</span>
        <span>{t("Made with ♥ for India's Children", "भारत के बच्चों के लिए ♥ से बनाया")}</span>
      </div>
    </footer>
  );
}
