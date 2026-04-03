import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-32 bg-[#f5f0e1] overflow-hidden">

      {/* BACKGROUND SHAPES */}
      <div className="absolute w-[400px] h-[400px] bg-[#3b5323]/10 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-[300px] h-[300px] bg-yellow-300/20 rounded-full bottom-0 right-0 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE (CREATIVE IMAGES) */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* MAIN IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
            className="w-[340px] h-[440px] object-cover rounded-[80px] shadow-2xl"
            alt="Main Pride"
          />

          {/* FLOAT IMAGE 1 */}
          <motion.img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500"
            className="absolute -left-16 top-20 w-[180px] h-[220px] object-cover rounded-[40px] border-4 border-white shadow-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            alt="Float 1"
          />

          {/* FLOAT IMAGE 2 */}
          <motion.img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500"
            className="absolute -right-16 bottom-10 w-[180px] h-[220px] object-cover rounded-[40px] border-4 border-white shadow-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            alt="Float 2"
          />

        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Our Pride
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-[#3b5323] mt-3 mb-6 leading-tight">
            You’re the Hope <br /> of Others
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We take immense pride in the fact that several distinguished personalities —
            including leaders in government, judiciary, and public service —
            have emerged from Delhi Government Schools.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Today, our alumni are making a mark across Delhi and India,
            proudly carrying forward our legacy.
          </p>

          {/* GLASS CARDS */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            {[
              "Healthcare",
              "Education",
              "Law",
              "Business",
              "Administration",
              "Social Service",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-lg bg-white/60 border border-white/40 rounded-2xl px-5 py-4 shadow-md text-[#3b5323] font-semibold"
              >
                ✔ {item}
              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <button className="bg-[#3b5323] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Explore Community →
          </button>

        </motion.div>
      </div>

      {/* IMPACT SECTION */}
      <motion.div
        className="max-w-6xl mx-auto mt-28 bg-gradient-to-r from-[#3b5323] to-[#2d4018] text-white rounded-[40px] p-14 text-center shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
          Together – One Identity – One Pride
        </h3>

        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          In 2025, our organization conducted mentorship, awareness,
          and career guidance programs across{" "}
          <span className="text-yellow-300 font-bold text-3xl">
            300+ schools
          </span>,
          empowering thousands of students.
        </p>
      </motion.div>

    </section>
  );
}