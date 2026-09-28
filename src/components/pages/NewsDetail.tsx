
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

export default function NewsDetail() {
  const { slug } = useParams();

  const article = schoolData.news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-7xl px-6 py-32 text-center"
      >
        <h1 className="text-3xl font-semibold text-[#123B5D]">
          Article not found
        </h1>

        <p className="mt-3 text-gray-500">
          The news article you are looking for does not exist.
        </p>

        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/news"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#123B5D] px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={17} />
            Back to News
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description="Read the latest news and updates from Jocups Kids School."
        image={article.image}
      />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-2 text-sm text-gray-500"
        >
          <CalendarDays size={16} />
          {article.date}
        </motion.div>

        <article className="mt-10 space-y-6">
          {article.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg leading-8 text-gray-600"
            >
              {paragraph}
            </motion.p>
          ))}
        </article>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-gray-100 pt-8"
        >
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to News
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

