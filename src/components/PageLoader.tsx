
import { motion } from "framer-motion";
import schoolLogo from "../assets/jocups-logo.jpeg";
import { schoolData } from "./data/schoolData";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: 2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#123B5D]"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-3 shadow-2xl"
        >
          <img
            src={schoolLogo}
            alt={`${schoolData.name} logo`}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-5 text-center"
        >
          <p className="text-lg font-semibold text-white">
            {schoolData.name}
          </p>

          <p className="mt-1 text-xs tracking-[0.2em] text-white/50">
            EXCELLENCE • CHARACTER • FUTURE
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 h-0.5 w-24 origin-left bg-[#C6A15B]"
        />
      </div>
    </motion.div>
  );
}