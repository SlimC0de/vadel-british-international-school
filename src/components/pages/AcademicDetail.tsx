
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, GraduationCap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

export default function AcademicDetail() {
  const { slug } = useParams();

  const program = schoolData.programs.find(
    (item) => item.slug === slug
  );

  if (!program) {
    return (
      <div className="min-h-[70vh] px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
            Academics
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Programme not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
            The academic programme you are looking for does not exist.
          </p>

          <Link
            to="/academics"
            className="group mt-8 inline-flex items-center gap-2 bg-[#123B5D] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0d2d46]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Academics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <PageHero
        eyebrow="Academic Programme"
        title={program.title}
        description={program.description}
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Main Content */}
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
                Programme Overview
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Learning that prepares students for what comes next.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              {program.overview}
            </p>
          </motion.div>

          {/* Programme Information */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-gray-200 lg:border-l lg:border-t-0 lg:pl-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="flex h-12 w-12 items-center justify-center bg-[#123B5D] text-white"
            >
              <GraduationCap size={24} />
            </motion.div>

            <h3 className="mt-7 text-2xl font-semibold text-gray-900">
              {program.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              {program.description}
            </p>

            <div className="mt-8 border-t border-gray-200 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#123B5D]">
                What students experience
              </p>

              <ul className="mt-6 space-y-4">
                {program.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.08,
                    }}
                    className="flex items-start gap-3 border-b border-gray-100 pb-4 text-sm leading-6 text-gray-600 last:border-0"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-[#123B5D]">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
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
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A15B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                  Programme Highlights
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Building knowledge, confidence and character.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Key areas of the {program.title} experience at{" "}
              {schoolData.name}.
            </p>
          </motion.div>

          {/* Highlight List */}
          <div className="mt-16 border-t border-gray-200">
            {program.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-5 border-b border-gray-200 py-8 md:grid-cols-[80px_1fr_auto] md:items-center md:py-10"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#123B5D] md:text-3xl">
                    {highlight}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                    Students are supported through a structured learning
                    environment designed to encourage growth, confidence and
                    curiosity.
                  </p>
                </div>

                <div className="hidden md:block">
                  <ArrowRight
                    size={20}
                    className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#123B5D]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden bg-[#123B5D] px-8 py-16 text-white md:px-16 md:py-20 lg:px-20"
        >
          {/* Gold Accent */}
          <div className="absolute right-0 top-0 h-full w-px bg-[#C6A15B]/50" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15,
                  duration: 0.5,
                }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#C6A15B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                  Admissions
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25,
                  duration: 0.6,
                }}
                className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              >
                Give your child a strong start.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                  duration: 0.6,
                }}
                className="mt-6 max-w-xl leading-7 text-white/65"
              >
                Discover how {schoolData.name} can support your child's
                academic journey and personal development.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
            >
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B5D]"
              >
                Explore Admissions

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Back */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"
      >
        <Link
          to="/academics"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to Academics
        </Link>
      </motion.div>
    </div>
  );
}