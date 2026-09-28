
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import Navbar from "../Navbar";
import SchoolStats from "../SchoolStart";
import { schoolData } from "../data/schoolData";

export default function Home() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      {/* Stats */}
      <SchoolStats />

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem]">
              <motion.img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
                alt="Students learning"
                className="h-[520px] w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="absolute -bottom-7 right-6 rounded-2xl bg-white px-6 py-5 shadow-xl ring-1 ring-black/5 sm:right-10"
            >
              <div className="text-3xl font-semibold text-[#123B5D]">
                {schoolData.stats[0]?.value}
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-400">
                {schoolData.stats[0]?.label}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
              Welcome to {schoolData.name}
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-gray-900 md:text-6xl">
              A school built around possibility.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600">
              At {schoolData.name}, we believe education should develop
              confident thinkers, responsible individuals and curious learners
              who are ready for what comes next.
            </p>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#123B5D] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#0d2d46]"
            >
              Discover our story

              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Academic Programs */}
      <section className="bg-[#F5F7F8] py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Academic Experience
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Learning for every stage of the journey.
              </h2>
            </div>

            <Link
              to="/academics"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#123B5D]"
            >
              Explore academics

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-gray-200 md:grid-cols-3">

            {schoolData.programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group bg-white p-8 transition-shadow duration-300 hover:shadow-xl md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-400">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-300 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#123B5D]"
                  />
                </div>

                <h3 className="mt-16 text-2xl font-semibold text-gray-900">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {program.description}
                </p>

                <Link
                  to={`/academics/${program.slug}`}
                  className="mt-8 inline-flex text-sm font-semibold text-[#123B5D]"
                >
                  Learn more
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">

        <div className="grid items-end gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
              The Campus
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Designed for learning beyond the classroom.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-gray-600">
              Every space is designed to give students room to learn,
              collaborate, create and grow.
            </p>

            <Link
              to="/campus"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
            >
              Explore our campus

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Facilities */}
          <div className="grid gap-3 sm:grid-cols-2">

            {schoolData.facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#123B5D]"
                  />
                </div>

                <h3 className="mt-12 text-xl font-semibold text-gray-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {facility.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Admissions CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-36">

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2rem] bg-[#123B5D] px-8 py-16 text-white md:px-16 md:py-24"
        >
          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15,
                  duration: 0.5,
                }}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50"
              >
                Admissions
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25,
                  duration: 0.6,
                }}
                className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
              >
                Give your child a place to grow.
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
                Discover an environment where learning, character and
                opportunity come together.
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
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#123B5D] transition-all duration-200 hover:-translate-y-1 hover:bg-white/90"
              >
                Begin your journey

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

