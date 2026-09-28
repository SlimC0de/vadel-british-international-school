
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolData } from "../data/schoolData";

export default function Apply() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const studentFirstName =
      formData.get("studentFirstName")?.toString() || "";

    const studentLastName =
      formData.get("studentLastName")?.toString() || "";

    const dateOfBirth =
      formData.get("dateOfBirth")?.toString() || "";

    const yearGroup =
      formData.get("yearGroup")?.toString() || "";

    const parentName =
      formData.get("parentName")?.toString() || "";

    const phoneNumber =
      formData.get("phoneNumber")?.toString() || "";

    const email =
      formData.get("email")?.toString() || "";

    // SCHOOL WHATSAPP NUMBER
    // Use country code without the +
    const schoolWhatsApp = "2347049630915";

    const message = `
${schoolData.name.toUpperCase()}
NEW ADMISSION APPLICATION

STUDENT INFORMATION

Student First Name: ${studentFirstName}
Student Last Name: ${studentLastName}
Date of Birth: ${dateOfBirth}
Year Group: ${yearGroup}

PARENT / GUARDIAN INFORMATION

Full Name: ${parentName}
Phone Number: ${phoneNumber}
Email Address: ${email}

Please contact me regarding the next steps for admission.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${schoolWhatsApp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-[#123B5D]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to school
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          {/* Left Information */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-8 lg:self-start"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Admissions
              </p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 md:text-6xl"
            >
              Begin your application.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-6 max-w-md text-base leading-8 text-gray-600"
            >
              Complete the form and our admissions team will contact you with
              the next steps.
            </motion.p>

            {/* Admission Benefits */}
            <div className="mt-10 border-t border-gray-200">
              {[
                "Personalised admissions support",
                "School visit opportunity",
                "Age-level assessment",
                "Guidance throughout enrolment",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-between gap-4 border-b border-gray-200 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#123B5D]/20 text-[#123B5D]">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm text-gray-700">
                      {item}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.form
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            onSubmit={handleSubmit}
            className="border-t-2 border-[#123B5D] bg-white px-6 py-8 shadow-sm md:px-10 md:py-10"
          >
            {/* Form Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Application Form
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                Student information
              </h2>
            </motion.div>

            {/* Student Information */}
            <div className="mt-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="studentFirstName"
                    className="text-sm font-medium text-gray-800"
                  >
                    Student first name
                  </label>

                  <input
                    id="studentFirstName"
                    name="studentFirstName"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="studentLastName"
                    className="text-sm font-medium text-gray-800"
                  >
                    Student last name
                  </label>

                  <input
                    id="studentLastName"
                    name="studentLastName"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="dateOfBirth"
                  className="text-sm font-medium text-gray-800"
                >
                  Date of birth
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#123B5D]"
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="yearGroup"
                  className="text-sm font-medium text-gray-800"
                >
                  Year group
                </label>

                <select
                  id="yearGroup"
                  name="yearGroup"
                  required
                  defaultValue=""
                  className="mt-2 w-full border-b border-gray-300 bg-white px-0 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#123B5D]"
                >
                  <option value="" disabled>
                    Select year group
                  </option>

                  <option>Early Years</option>
                  <option>Primary</option>
                  <option>Junior Secondary</option>
                  <option>Senior Secondary</option>
                </select>
              </div>
            </div>

            {/* Parent / Guardian */}
            <div className="mt-12  pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Parent / Guardian
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                Contact information
              </h3>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="parentName"
                    className="text-sm font-medium text-gray-800"
                  >
                    Full name
                  </label>

                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="text-sm font-medium text-gray-800"
                  >
                    Phone number
                  </label>

                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                    placeholder="+234"
                  />
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-800"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                  placeholder="parent@example.com"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group mt-10 inline-flex w-full items-center justify-center gap-2 bg-[#123B5D] px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0d2d46]"
            >
              Submit Application

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-400">
              Your application will open in WhatsApp with the information
              already filled in.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}