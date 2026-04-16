import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === "hi" ? hi : en);

  const sectors = [
    { en: "Healthcare", hi: "स्वास्थ्य सेवा" },
    { en: "Education", hi: "शिक्षा" },
    { en: "Law", hi: "कानून" },
    { en: "Business", hi: "व्यवसाय" },
    { en: "Administration", hi: "प्रशासन" },
    { en: "Social Service", hi: "सामाजिक सेवा" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f0e1] py-32">
      <div className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#3b5323]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-yellow-300/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
            className="h-[440px] w-[340px] rounded-[80px] object-cover shadow-2xl"
            alt={t("Alumni community gathering", "पूर्व छात्र समुदाय का मिलन")}
          />

          <motion.img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500"
            className="absolute top-20 -left-16 h-[220px] w-[180px] rounded-[40px] border-4 border-white object-cover shadow-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            alt={t("Student mentorship moment", "विद्यार्थी मार्गदर्शन का दृश्य")}
          />

          <motion.img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500"
            className="absolute right-[-4rem] bottom-10 h-[220px] w-[180px] rounded-[40px] border-4 border-white object-cover shadow-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            alt={t("Children learning together", "बच्चे साथ में सीखते हुए")}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }}>
          <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
            {t("Our Pride", "हमारा गौरव")}
          </span>

          <h2 className="mt-3 mb-6 text-5xl font-extrabold leading-tight text-[#3b5323] md:text-6xl">
            {t("You're the Hope", "आप ही दूसरों की")}
            <br />
            {t("of Others", "उम्मीद हैं")}
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {t(
              "We take immense pride in the fact that several distinguished personalities, including leaders in government, judiciary, and public service, have emerged from Delhi Government Schools.",
              "हमें इस बात पर गहरा गर्व है कि दिल्ली सरकार के विद्यालयों से सरकार, न्यायपालिका और जनसेवा जैसे क्षेत्रों के अनेक विशिष्ट व्यक्तित्व आगे बढ़े हैं।"
            )}
          </p>

          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            {t(
              "Today, our alumni are making a mark across Delhi and India, proudly carrying forward our legacy.",
              "आज हमारे पूर्व छात्र दिल्ली और पूरे भारत में अपनी पहचान बना रहे हैं और हमारी विरासत को गर्व से आगे बढ़ा रहे हैं।"
            )}
          </p>

          <div className="mb-8 grid grid-cols-2 gap-4">
            {sectors.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-white/40 bg-white/60 px-5 py-4 font-semibold text-[#3b5323] shadow-md backdrop-blur-lg"
              >
                ✓ {t(item.en, item.hi)}
              </motion.div>
            ))}
          </div>

          <Link
            to="/members"
            className="inline-block rounded-full bg-[#3b5323] px-8 py-3 font-semibold text-white no-underline shadow-lg transition hover:scale-105"
          >
            {t("Explore Community →", "समुदाय देखें →")}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-28 max-w-6xl rounded-[40px] bg-gradient-to-r from-[#3b5323] to-[#2d4018] p-14 text-center text-white shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="mb-6 text-4xl font-extrabold md:text-5xl">
          {t("Together - One Identity - One Pride", "साथ मिलकर - एक पहचान - एक गौरव")}
        </h3>

        <p className="mx-auto max-w-3xl text-xl opacity-90">
          {t(
            "In 2025, our organization conducted mentorship, awareness, and career guidance programs across ",
            "2025 में हमारी संस्था ने "
          )}
          <span className="text-3xl font-bold text-yellow-300">
            {t("300+ schools", "300+ विद्यालयों")}
          </span>
          {t(
            ", empowering thousands of students.",
            " में मार्गदर्शन, जागरूकता और करियर सहायता कार्यक्रम चलाए, जिससे हजारों विद्यार्थी सशक्त हुए।"
          )}
        </p>
      </motion.div>
    </section>
  );
}