import { Link } from "react-router-dom";
import {
  FaRoad,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-400 pt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-black text-xl mb-4"
            >
              <FaRoad className="text-orange-500 text-2xl" />
              DEV ROOPMANI
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Building India's infrastructure with commitment, quality,
              and integrity. Your trusted partner in construction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 relative after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-[2px] after:bg-orange-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 relative after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-[2px] after:bg-orange-500">
              Services
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/services">Road Construction</FooterLink>
              <FooterLink to="/services">Bridge Building</FooterLink>
              <FooterLink to="/services">Urban Planning</FooterLink>
              <FooterLink to="/services">Maintenance</FooterLink>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6 relative after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-[2px] after:bg-orange-500">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 text-center py-6 text-sm">
          © {new Date().getFullYear()} DEV ROOPMANI PRIVATE LIMITED. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-orange-500 transition hover:pl-1 inline-block"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
