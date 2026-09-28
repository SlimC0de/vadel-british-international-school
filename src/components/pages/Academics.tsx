
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

export default function Academics() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <PageHero
        eyebrow="Academics"
        title="Learning that prepares students for life."
        description="Our academic programme combines strong foundations with creativity, critical thinking and real-world learning."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Our Approach
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Strong foundations. Bigger possibilities.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:pb-1">
            We believe students learn best when they are actively engaged.
            Our classrooms encourage questions, discussion, experimentation
            and independent thinking.
          </p>
        </motion.div>

        {/* Academic Programmes */}
        <div className="mt-20 border-t border-gray-200">
          {schoolData.programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-6 border-b border-gray-200 py-9 md:grid-cols-[80px_1fr_auto] md:items-center md:py-11"
            >
              {/* Number */}
              <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#123B5D] md:text-3xl">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
                  {program.description}
                </p>
              </div>

              {/* Link */}
              <Link
                to={`/academics/${program.slug}`}
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
              >
                Explore programme

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-y border-gray-100 bg-[#F5F7F8] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Curriculum Heading */}
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
                  Curriculum
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                More than the classroom.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-gray-600">
                Students are given opportunities to build knowledge while
                developing creativity, confidence, collaboration and
                leadership.
              </p>
            </motion.div>

            {/* Subjects */}
            <div className="border-t border-gray-200">
              {[
                "English Language",
                "Mathematics",
                "Science",
                "Technology",
                "Creative Arts",
                "Physical Education",
                "Social Studies",
                "Leadership",
              ].map((subject, index) => (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between border-b border-gray-200 py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-medium text-gray-800 transition-colors duration-200 group-hover:text-[#123B5D]">
                      {subject}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#123B5D]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.7fr]">
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
                The Learning Experience
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Developing capable learners for a changing world.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-l border-[#C6A15B] pl-6"
          >
            <p className="text-sm leading-7 text-gray-600">
              At {schoolData.name}, academic success is supported by an
              environment that encourages curiosity, responsibility and
              independent thought.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
            >
              Discover our approach

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
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
                Give your child an education built around possibility.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
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
    </div>
  );
}