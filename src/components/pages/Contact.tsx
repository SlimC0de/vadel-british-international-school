
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../PageHero";
import { schoolData } from "../data/schoolData";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const schoolWhatsApp = "2347049630915";

    const whatsappMessage = `
${schoolData.name.toUpperCase()}
CONTACT MESSAGE

Name: ${firstName} ${lastName}
Email: ${email}

Subject: ${subject}

Message:
${message}

Please contact me regarding my enquiry.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${schoolWhatsApp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you."
        description={`Have a question about admissions, our programmes or life at ${schoolData.name}? Our team is here to help.`}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Contact + Form */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Contact Information */}
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
                Get In Touch
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Let's start a conversation.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
              Whether you are enquiring about admissions, visiting our campus
              or simply want to learn more, our team is ready to assist.
            </p>

            <div className="mt-12 border-t border-gray-200">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex gap-5 border-b border-gray-200 py-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#123B5D] text-white">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Visit Us
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-7 text-gray-700">
                    {schoolData.contact.address}
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex gap-5 border-b border-gray-200 py-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#123B5D] text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Call Us
                  </p>

                  <a
                    href={`tel:${schoolData.contact.phone}`}
                    className="mt-2 block text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#123B5D]"
                  >
                    {schoolData.contact.phone}
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex gap-5 border-b border-gray-200 py-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#123B5D] text-white">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Email Us
                  </p>

                  <a
                    href={`mailto:${schoolData.contact.email}`}
                    className="mt-2 block text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#123B5D]"
                  >
                    {schoolData.contact.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            onSubmit={handleSubmit}
            className="border-t-2 border-[#123B5D] bg-[#F5F7F8] px-6 py-8 md:px-10 md:py-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                Send An Enquiry
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                How can we help?
              </h2>
            </motion.div>

            <div className="mt-10">
              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-800"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-800"
                  >
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                    placeholder="Doe"
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
                  placeholder="john@example.com"
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-800"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-2 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#123B5D]"
                  placeholder="Write your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group mt-8 inline-flex items-center gap-2 bg-[#123B5D] px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0d2d46]"
              >
                Send Message

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>

              <p className="mt-4 text-xs leading-5 text-gray-400">
                Your message will open in WhatsApp with the information
                already filled in.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Location */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-36"
      >
        <div className="grid gap-8 lg:grid-cols-[0.35fr_1.65fr]">
          {/* Location Label */}
          <div className="flex flex-col justify-between border-t border-gray-200 pt-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C6A15B]" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123B5D]">
                  Find Us
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900">
                Visit our campus.
              </h2>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                schoolData.contact.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
            >
              Open in Google Maps

              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Map */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              schoolData.contact.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[420px] overflow-hidden border border-gray-200"
          >
            <iframe
              title={`${schoolData.name} location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                schoolData.contact.address
              )}&output=embed`}
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

            <div className="absolute bottom-5 right-5 bg-white px-5 py-3 text-sm font-semibold text-[#123B5D] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              Open in Google Maps
            </div>
          </a>
        </div>
      </motion.section>
    </div>
  );
}