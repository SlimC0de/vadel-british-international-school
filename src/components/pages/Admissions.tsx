
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../PageHero";

export default function Admissions() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <PageHero
        eyebrow="Admissions"
        title="Start your child's journey."
        description="Discover our admissions process, requirements and the steps to becoming part of our school community."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Process */}
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
                How It Works
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              A simple admissions process.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-gray-600 lg:pb-1">
            From your first enquiry to enrolment, our admissions team is here
            to make the process clear, welcoming and straightforward.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mt-20 border-t border-gray-200">
          {[
            [
              "01",
              "Submit an Enquiry",
              "Tell us about your child and the programme you're interested in.",
            ],
            [
              "02",
              "Visit Our School",
              "Meet our team and experience our learning environment.",
            ],
            [
              "03",
              "Assessment",
              "Complete the appropriate age-level assessment.",
            ],
            [
              "04",
              "Offer & Enrolment",
              "Receive your offer and complete the enrolment process.",
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
              className="group grid gap-5 border-b border-gray-200 py-9 md:grid-cols-[80px_0.8fr_1.2fr_auto] md:items-center md:py-10"
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                {number}
              </span>

              <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#123B5D]">
                {title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-gray-600 md:text-base">
                {text}
              </p>

              <ArrowUpRight
                size={20}
                className="hidden text-gray-300 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#123B5D] md:block"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="border-y border-gray-100 bg-[#F5F7F8] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Requirements Intro */}
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
                  Requirements
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                What you will need.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-gray-600">
                The exact requirements may vary by year group. Our admissions
                team will guide you through everything needed.
              </p>
            </motion.div>

            {/* Requirements List */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-gray-200"
            >
              {[
                "Completed application form",
                "Recent passport photographs",
                "Previous school records",
                "Birth certificate",
                "Parent or guardian identification",
                "Entrance assessment",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between gap-5 border-b border-gray-200 py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#123B5D]/20 text-[#123B5D]">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm font-medium text-gray-800 md:text-base">
                      {item}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
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
                  Applications
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
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              >
                Ready to take the next step?
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
                Begin your application today and take the first step toward
                joining our school community.
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
                to="/apply"
                className="group inline-flex shrink-0 items-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B5D]"
              >
                Apply Now

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