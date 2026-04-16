 import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function MissionSection() {
  const { lang } = useLanguage();
  const t = (en, hi) => (lang === 'hi' ? hi : en);

  const missions = [
    {
      enTitle: "Celebrating Our Identity with Pride",
      hiTitle: "गर्व के साथ हमारी पहचान का जश्न",
      enDesc: "To change the negative perception about government schools and spread the message that students from these schools can achieve excellence at national and international levels.",
      hiDesc: "सरकारी स्कूलों के बारे में नकारात्मक धारणा को बदलना और यह संदेश फैलाना कि इन स्कूलों के छात्र राष्ट्रीय और अंतर्राष्ट्रीय स्तर पर उत्कृष्टता प्राप्त कर सकते हैं।",
    },
    {
      enTitle: "Collaboration and Networking",
      hiTitle: "सहयोग और नेटवर्किंग",
      enDesc: "To support one another across education, healthcare, administration, law, business and more by sharing opportunities, guidance, and resources.",
      hiDesc: "शिक्षा, स्वास्थ्य देखभाल, प्रशासन, कानून, व्यवसाय और अन्य क्षेत्रों में अवसरों, मार्गदर्शन और संसाधनों को साझा करके एक-दूसरे का समर्थन करना।",
    },
    {
      enTitle: "Inspiration and Mentorship",
      hiTitle: "प्रेरणा और मार्गदर्शन",
      enDesc: "To motivate individuals who faced challenges and guide the younger generation through shared knowledge, experiences, and success stories.",
      hiDesc: "उन व्यक्तियों को प्रेरित करना जिन्होंने चुनौतियों का सामना किया और साझा ज्ञान, अनुभवों और सफलता की कहानियों के माध्यम से युवा पीढ़ी का मार्गदर्शन करना।",
    },
    {
      enTitle: "Legacy and Recognition",
      hiTitle: "विरासत और पहचान",
      enDesc: "To carry forward the proud legacy of Delhi Government Schools and celebrate the achievements of our alumni.",
      hiDesc: "दिल्ली सरकारी स्कूलों की गौरवशाली विरासत को आगे बढ़ाना और हमारे पूर्व छात्रों की उपलब्धियों का जश्न मनाना।",
    },
  ];

  const pridePoints = [
    { en: "Healthcare", hi: "स्वास्थ्य देखभाल" },
    { en: "Admission", hi: "प्रवेश" },
    { en: "Education", hi: "शिक्षा" },
    { en: "Law", hi: "कानून" },
    { en: "Business", hi: "व्यवसाय" },
    { en: "Social Service", hi: "सामाजिक सेवा" },
    { en: "Many other sectors", hi: "कई अन्य क्षेत्र" },
  ];

  return (
    <section className="bg-[var(--color-bg-2)] px-6 py-24 md:px-14">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-terra)]">
            {t('Our Mission', 'हमारा मिशन')}
          </div>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] text-[var(--color-text-main)]">
            {t('One Identity, One Pride', 'एक पहचान, एक गर्व')}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-8 text-[var(--color-mid)]">
            {t(
              'Empowering students, building strong networks, and celebrating the legacy of Delhi Government Schools.',
              'छात्रों को सशक्त बनाना, मजबूत नेटवर्क बनाना और दिल्ली सरकारी स्कूलों की विरासत का जश्न मनाना।'
            )}
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.enTitle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_36px_rgba(44,31,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(44,31,20,0.12)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-terra-light)] text-[0.9rem] font-bold text-[var(--color-terra)]">
                  {index + 1}
                </span>
                <h3 className="font-serif text-[1.25rem] font-bold text-[var(--color-text-main)]">
                  {t(mission.enTitle, mission.hiTitle)}
                </h3>
              </div>
              <p className="text-[0.92rem] leading-7 text-[var(--color-mid)]">
                {t(mission.enDesc, mission.hiDesc)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Pride Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-serif text-[1.8rem] font-bold text-[var(--color-text-main)]">
            {t('Our Pride', 'हमारा गौरव')}
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {pridePoints.map((item, i) => (
              <span
                key={i}
                className="rounded-full bg-[rgba(193,68,14,0.08)] px-5 py-2.5 text-[0.85rem] font-semibold text-[var(--color-terra)] transition-all duration-300 hover:bg-[var(--color-terra)] hover:text-white"
              >
                {t(item.en, item.hi)}
              </span>
            ))}
          </div>

          <p className="mt-6 text-[0.96rem] leading-8 text-[var(--color-mid)]">
            {t(
              'Our community includes professionals from diverse fields. We take pride in the fact that many distinguished personalities from government, judiciary, and public service have emerged from Delhi Government Schools.',
              'हमारे समुदाय में विविध क्षेत्रों के पेशेवर शामिल हैं। हमें इस बात पर गर्व है कि सरकार, न्यायपालिका और सार्वजनिक सेवा से कई प्रतिष्ठित हस्तियां दिल्ली सरकारी स्कूलों से निकली हैं।'
            )}
          </p>

          <p className="mt-4 text-[0.96rem] leading-8 text-[var(--color-mid)]">
            {t(
              'Today, our alumni are making a mark across Delhi and throughout India, proudly carrying forward the name of Delhi Government Schools.',
              'आज, हमारे पूर्व छात्र पूरे दिल्ली और भारत में अपनी पहचान बना रहे हैं, गर्व से दिल्ली सरकारी स्कूलों का नाम आगे बढ़ा रहे हैं।'
            )}
          </p>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[28px] bg-[rgba(193,68,14,0.06)] p-8 shadow-[0_14px_36px_rgba(44,31,20,0.06)] md:p-10"
        >
          <h3 className="font-serif text-[1.5rem] font-bold text-[var(--color-text-main)]">
            {t('Our Impact (2025)', 'हमारा प्रभाव (2025)')}
          </h3>
          <p className="mt-3 text-[0.96rem] leading-8 text-[var(--color-mid)]">
            {t(
              'In 2025, our organization conducted career counseling, mentorship, mental health awareness, and cyber fraud sessions in more than',
              '2025 में, हमारे संगठन ने 300+ स्कूलों में करियर काउंसलिंग, मेंटरशिप, मानसिक स्वास्थ्य जागरूकता और साइबर फ्रॉड सत्र आयोजित किए,'
            )}{' '}
            <span className="font-bold text-[var(--color-terra)]">
              {t('300+ schools', '300+ स्कूल')}
            </span>
            , {t('empowering students with knowledge and guidance.', 'ज्ञान और मार्गदर्शन के साथ छात्रों को सशक्त बनाया।')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}