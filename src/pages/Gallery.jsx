import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  // ✅ Stable working images (no black issue)
  const images = [
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900" },
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900" },
    { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900" },
    { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900" },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900" },
    { src: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=900" },
    { src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900" },
    { src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900" },
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900" },
    { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900" },
    { src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900" },
    { src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=900" },
    { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=900" },
    { src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900" },
  ];

  return (
    <section className="py-28 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold text-[#fff5e6]">
            Our Impact Stories
          </h2>
          <div className="w-20 h-[3px] bg-[#ff8c00] mt-4"></div>
          <p className="text-[#cfcbb8] mt-4 max-w-xl">
            A curated glimpse into our work, moments, and community journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[220px]">

          {images.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(img.src)}
              className={`relative cursor-pointer overflow-hidden rounded-2xl group
                ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="px-5 py-2 bg-[#ff8c00] text-white rounded-full text-sm hover:scale-105 transition">
                  View
                </button>
              </div>

              <div className="absolute inset-0 border border-transparent group-hover:border-[#90ee90]/40 rounded-2xl transition"></div>
            </motion.div>
          ))}

        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={selected}
                className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
