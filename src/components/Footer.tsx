
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { schoolData } from "./data/schoolData";
import schoolLogo from "../assets/jocups-logo.jpeg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#123B5D] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top CTA */}
        <div className="border-b border-white/10 py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C6A15B]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                  Begin the journey
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Give your child a place to learn, grow and thrive.
              </h2>
            </div>

            <Link
              to="/apply"
              className="group inline-flex shrink-0 items-center gap-2 self-start border border-white/30 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B5D] lg:self-end"
            >
              Apply Now

              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

        {/* Footer Content */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:py-20">

          {/* Brand */}
          <div className="max-w-sm">

            <Link to="/" className="inline-flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-white p-2">
                <img
                  src={schoolLogo}
                  alt={`${schoolData.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="text-lg font-semibold leading-tight">
                  {schoolData.name}
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Excellence • Character • Future
                </div>
              </div>
            </Link>

            <p className="mt-7 text-sm leading-7 text-white/55">
              {schoolData.description}
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-5">
              <a
                href={schoolData.social.instagram}
                aria-label="Instagram"
                className="text-xs font-semibold text-white/45 transition-colors duration-200 hover:text-white"
              >
                Instagram
              </a>

              <span className="h-3 w-px bg-white/15" />

              <a
                href={schoolData.social.facebook}
                aria-label="Facebook"
                className="text-xs font-semibold text-white/45 transition-colors duration-200 hover:text-white"
              >
                Facebook
              </a>

              <span className="h-3 w-px bg-white/15" />

              <a
                href={schoolData.social.youtube}
                aria-label="YouTube"
                className="text-xs font-semibold text-white/45 transition-colors duration-200 hover:text-white"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                to="/about"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/academics"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Academics
              </Link>

              <Link
                to="/campus"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Campus
              </Link>

              <Link
                to="/news"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                News & Events
              </Link>
            </div>
          </div>

          {/* Admissions */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Admissions
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                to="/admissions"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Admissions
              </Link>

              <Link
                to="/apply"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Get in touch
            </p>

            <div className="mt-7 space-y-5">

              <a
                href={`tel:${schoolData.contact.phone}`}
                className="group flex items-start gap-3"
              >
                <Phone
                  size={16}
                  className="mt-1 shrink-0 text-[#C6A15B]"
                />

                <span className="text-sm leading-6 text-white/60 transition-colors duration-200 group-hover:text-white">
                  {schoolData.contact.phone}
                </span>
              </a>

              <a
                href={`mailto:${schoolData.contact.email}`}
                className="group flex items-start gap-3"
              >
                <Mail
                  size={16}
                  className="mt-1 shrink-0 text-[#C6A15B]"
                />

                <span className="break-all text-sm leading-6 text-white/60 transition-colors duration-200 group-hover:text-white">
                  {schoolData.contact.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#C6A15B]"
                />

                <span className="text-sm leading-6 text-white/60">
                  {schoolData.contact.address}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {year} {schoolData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/contact"
              className="transition-colors duration-200 hover:text-white"
            >
              Contact
            </Link>

            <span className="h-3 w-px bg-white/15" />

            <span>{schoolData.location}</span>
          </div>

        </div>
      </div>
    </footer>
  );
}