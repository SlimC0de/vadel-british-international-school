
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#123B5D]">
      <Navbar />

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#071827]/90 via-[#071827]/70 to-[#071827]/35"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-8 lg:pb-24">

        <div className="flex w-full items-end justify-between gap-12">

          {/* Main Content */}
          <div className="max-w-4xl text-white">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C6A15B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">
                {eyebrow}
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg"
            >
              {description}
            </motion.p>

            {/* Optional Children */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8"
              >
                {children}
              </motion.div>
            )}
          </div>

          {/* Page Marker */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden items-center gap-3 pb-1 lg:flex"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              {eyebrow}
            </span>

            <span className="h-10 w-px bg-white/25" />
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}