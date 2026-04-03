import React from "react";
import { motion } from "framer-motion";

export default function Sessions() {
  const missions = [
    {
      title: "Celebrating Our Identity with Pride",
      desc: "To change the negative perception about government schools and spread the message that students can achieve excellence.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Collaboration and Networking",
      desc: "To support one another across fields and share opportunities and resources.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Inspiration and Mentorship",
      desc: "To motivate and guide the younger generation through knowledge and experience.",
      img: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    },
    {
      title: "Legacy and Recognition",
      desc: "To carry forward the legacy of Delhi Government Schools and celebrate alumni achievements.",
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    },
  ];

  return (
    <section className="w-full py-28 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Our Session
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              We are on a mission to empower students, connect alumni, and create opportunities that truly change lives.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                Get Involved
              </button>

              <button className="px-8 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
                Our Mission
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="mission"
                className="w-full h-[350px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-lg w-48">
              <h4 className="font-semibold text-gray-800">5000+</h4>
              <p className="text-sm text-gray-500">Students Impacted</p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {missions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="h-1 w-10 bg-black mb-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
