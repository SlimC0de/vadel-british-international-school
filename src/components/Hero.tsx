
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolData } from "./data/schoolData";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#123B5D]">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071827]/90 via-[#071827]/65 to-[#071827]/25"
      />

      {/* Subtle Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-28 pt-40 lg:px-8 lg:pb-32">

        <div className="grid w-full gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

          {/* Main Content */}
          <div className="max-w-4xl text-white">

            {/* School Label */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C6A15B]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                {schoolData.name}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              {schoolData.tagline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
            >
              {schoolData.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/admissions"
                  className="group flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[#123B5D] transition-colors duration-200 hover:bg-[#C6A15B] hover:text-white"
                >
                  Begin Your Journey

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/about"
                  className="group flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  Discover Our School

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Side Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:block"
          >
            <div className="border-l border-white/25 pl-6 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                Our Approach
              </p>

              <p className="mt-3 max-w-[170px] text-sm leading-6 text-white/75">
                Learning, character and opportunity in one environment.
              </p>

              <Link
                to="/academics"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                Explore Academics

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.1,
        }}
        className="absolute bottom-10 right-6 z-10 hidden items-center gap-3 text-white/50 lg:flex lg:right-8"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-white/40"
        />
      </motion.div>
    </section>
  );
}