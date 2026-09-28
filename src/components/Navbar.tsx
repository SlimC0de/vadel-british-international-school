
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { schoolData } from "./data/schoolData";
import schoolLogo from "../assets/jocups-logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Campus", path: "/campus" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link to="/" className="flex items-center gap-3 text-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-2"
            >
              <img
                src={schoolLogo}
                alt={`${schoolData.name} logo`}
                className="h-full w-full object-contain"
              />
            </motion.div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight tracking-wide">
                {schoolData.name}
              </div>

              <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/55">
                Excellence • Character • Future
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.05,
              }}
            >
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className="group relative text-[13px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-white" : ""}>
                      {link.name}
                    </span>

                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-[#C6A15B] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}

          {/* Apply */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/apply"
              className="group flex items-center gap-2 border border-white/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B5D]"
            >
              Apply Now

              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 items-center justify-center border border-white/30 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={open ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
                scale: 0.7,
              }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-4 overflow-hidden border border-gray-100 bg-white shadow-2xl lg:hidden"
          >
            <div className="p-4">
              {/* Mobile School Identity */}
              <div className="mb-3 flex items-center gap-3 border-b border-gray-100 px-2 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 p-1.5">
                  <img
                    src={schoolLogo}
                    alt={`${schoolData.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#123B5D]">
                    {schoolData.name}
                  </p>

                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-gray-400">
                    Excellence • Character • Future
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-3 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[#F5F7F8] text-[#123B5D]"
                            : "text-gray-700 hover:bg-[#F5F7F8] hover:text-[#123B5D]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>

                          <span
                            className={`h-1.5 w-1.5 rounded-full bg-[#C6A15B] transition-opacity duration-200 ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-50"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: links.length * 0.04,
                  }}
                >
                  <Link
                    to="/apply"
                    onClick={() => setOpen(false)}
                    className="group mt-3 flex items-center justify-center gap-2 bg-[#123B5D] px-4 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0d2d46]"
                  >
                    Apply Now

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
