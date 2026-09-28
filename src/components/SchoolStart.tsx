
import { motion } from "framer-motion";
import { schoolData } from "./data/schoolData";

export default function SchoolStats() {
  return (
    <section className="relative z-10 bg-[#123B5D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {schoolData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                transition: {
                  duration: 0.2,
                },
              }}
              className={`relative px-6 py-10 text-center lg:py-12 ${
                index !== schoolData.stats.length - 1
                  ? "border-b border-white/10 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              {/* Gold accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="mx-auto mb-5 h-px w-8 origin-center bg-[#C6A15B]"
              />

              {/* Number */}
              <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}