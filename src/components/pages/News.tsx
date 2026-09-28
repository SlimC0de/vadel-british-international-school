
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

export default function News() {
  return (
    <div>
      <PageHero
        eyebrow="News & Events"
        title={`What's happening at ${schoolData.name.replace(" School", "")}.`}
        description="Stay up to date with school news, student achievements, events and important announcements."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-8 md:grid-cols-2">
          {schoolData.news.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="h-[300px] w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-semibold text-[#123B5D]">
                    {article.category}
                  </span>

                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {article.date}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold leading-tight">
                  {article.title}
                </h2>

                <Link
                  to={`/news/${article.slug}`}
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
                >
                  Read story
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

