
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

const images = [
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=85",
];

export default function Campus() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Our Campus"
        title="Spaces designed for discovery."
        description="From modern classrooms to creative and sporting spaces, every part of our campus is designed to support student growth."
        image={images[0]}
      />

      {/* Campus Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                The Environment
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              A place built for learning, movement and possibility.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 lg:pb-1">
            Our campus brings together purposeful learning spaces, areas for
            creativity and facilities that encourage students to explore,
            collaborate and grow with confidence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden md:row-span-2"
          >
            <motion.img
              src={images[0]}
              alt="School campus"
              className="h-full min-h-[520px] w-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7 }}
            />

            <div className="absolute bottom-0 left-0 bg-[#123B5D] px-6 py-5 text-white md:px-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
                01
              </p>

              <p className="mt-1 text-sm font-medium">
                Our learning environment
              </p>
            </div>
          </motion.div>

          {/* Smaller images */}
          {images.slice(1).map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden"
            >
              <motion.img
                src={image}
                alt="School facility"
                className="h-[250px] w-full object-cover md:h-[260px]"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
              />

              <div className="absolute bottom-0 left-0 bg-white px-5 py-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400">
                  {String(index + 2).padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="border-y border-gray-100 bg-[#F5F7F8] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A15B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                  Facilities
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Everything students need to thrive.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
                Every space is designed with purpose — creating an environment
                where students can learn, create, collaborate and develop
                beyond the classroom.
              </p>
            </motion.div>

            <div className="border-t border-gray-200">
              {schoolData.facilities.map((facility, index) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid gap-5 border-b border-gray-200 py-8 md:grid-cols-[70px_1fr_auto] md:items-center"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#123B5D]">
                      {facility.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
                      {facility.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="hidden text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#123B5D] md:block"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Statement */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
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
                Beyond The Classroom
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              The right environment can shape how students see what is
              possible.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
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
              At {schoolData.name}, our campus is more than a collection of
              buildings. It is an environment where students can discover
              interests, develop relationships and build confidence through
              everyday experiences.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}