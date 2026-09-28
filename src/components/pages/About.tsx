
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

export default function About() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <PageHero
        eyebrow="About Us"
        title="More than a school. A community."
        description="We create an environment where students are challenged to think, encouraged to explore and supported to become confident individuals."
        image="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Our Story
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Education with purpose.
            </h2>

            <div className="mt-8 space-y-5">
              <p className="leading-8 text-gray-600">
                {schoolData.name} was founded on the belief that every child
                deserves an education that develops both knowledge and
                character.
              </p>

              <p className="leading-8 text-gray-600">
                Our approach combines strong academics with creativity,
                collaboration, leadership and opportunities for students to
                discover their individual strengths.
              </p>
            </div>

            <Link
              to="/academics"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
            >
              Explore our approach

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1400&q=85"
                alt="Students learning"
                className="h-[520px] w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            {/* Image Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.5,
              }}
              className="absolute bottom-0 left-0 bg-[#123B5D] px-6 py-5 text-white"
            >
              <p className="text-2xl font-semibold">
                {schoolData.stats[2]?.value}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
                Years of excellence
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Values */}
      <section className="border-y border-gray-100 bg-[#F5F7F8] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A15B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                  Our Values
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                What guides everything we do.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              The principles that shape how we teach, how we lead and how we
              help students grow.
            </p>
          </motion.div>

          {/* Values */}
          <div className="mt-16 border-t border-gray-200">

            {[
              [
                "01",
                "Excellence",
                "We encourage every student to pursue their highest potential.",
              ],
              [
                "02",
                "Character",
                "We develop responsible, respectful and compassionate young people.",
              ],
              [
                "03",
                "Curiosity",
                "We encourage students to question, explore and discover.",
              ],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-5 border-b border-gray-200 py-8 md:grid-cols-[80px_0.7fr_1.3fr] md:items-center md:py-10"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                  {number}
                </span>

                <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#123B5D] md:text-3xl">
                  {title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-gray-600 md:text-base">
                  {text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1000&q=85"
                alt="School principal"
                className="h-[520px] w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            <div className="absolute bottom-0 left-0 bg-white px-6 py-5">
              <p className="text-sm font-semibold text-gray-900">
                Mrs. Ufere
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gray-400">
                Principal
              </p>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Principal's Message
              </p>
            </div>

            <blockquote className="mt-7 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              “Every child has something remarkable to contribute.”
            </blockquote>

            <p className="mt-8 max-w-xl leading-8 text-gray-600">
              Our responsibility is to create the environment where that
              potential can flourish. We combine academic rigour with care,
              creativity and strong relationships.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <div className="h-px w-8 bg-[#C6A15B]" />

              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Mrs. Ufere
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-400">
                  Principal
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-36">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden bg-[#123B5D] px-8 py-16 md:px-16 md:py-20 lg:px-20"
        >
          {/* Decorative line */}
          <div className="absolute right-0 top-0 h-full w-px bg-[#C6A15B]/40" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Visit us
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                }}
                className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                Come and experience our school.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B5D]"
              >
                Book a Visit

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

          </div>
        </motion.div>

      </section>

    </div>
  );
}