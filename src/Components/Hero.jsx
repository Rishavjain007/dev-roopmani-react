import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Hero component with mount animation and responsive background handling.
 * - Uses only standard Tailwind utilities (no custom plugins required).
 * - Protects against background-attachment: fixed issues on mobile by switching to 'scroll'.
 * - Ensures content is above background via z-index.
 *
 * Usage: <Hero />
 *
 * Requirements:
 * - Tailwind CSS available in the project (the classes used are standard Tailwind v2+ utilities).
 */

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [bgAttachment, setBgAttachment] = useState("fixed");

  useEffect(() => {
    // small delay so the transition looks smooth when the page loads
    const t = setTimeout(() => setMounted(true), 80);

    // switch background-attachment to 'scroll' on small screens / touch devices
    const checkAttachment = () => {
      // treat narrow screens and coarse pointers as mobile where fixed is problematic
      if (typeof window !== "undefined") {
        const isSmall = window.innerWidth < 768;
        const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
        setBgAttachment(isSmall || isCoarse ? "scroll" : "fixed");
      }
    };

    checkAttachment();
    window.addEventListener("resize", checkAttachment);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", checkAttachment);
    };
  }, []);

  const containerClasses = `max-w-4xl px-4 relative z-10 transform transition-all duration-700 ease-out
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(rgba(26,37,47,0.7), rgba(26,37,47,0.7)), url('https://hexagon.com/-/media/project/one-web/master-site/altudo/l1247-specific-industry-segment/excavator-prepping-for-roadwork.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: bgAttachment,
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white pt-20"
      style={backgroundStyle}
      aria-label="Hero — Paving the Future, Today"
    >
      {/* Decorative gradient/blob behind content (keeps content readable) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 400px at 10% 10%, rgba(255,106,0,0.06), transparent 8%), radial-gradient(700px 300px at 90% 80%, rgba(31,60,79,0.06), transparent 8%)",
          zIndex: 0,
        }}
      />

      {/* Content — ensure it's above the background with z-10 */}
      <div className={containerClasses} style={{ zIndex: 10 }}>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          DEV ROOPMANI PRIVATE LIMITED
        </h1>

        <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
          DEV ROOPMANI PRIVATE LIMITED delivers world-class road construction and
          infrastructure solutions. Building the backbone of the nation with
          precision and quality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-orange-500 hover:bg-orange-600 transition transform hover:-translate-y-0.5 font-bold px-8 py-3 rounded uppercase tracking-wide shadow-lg"
            aria-label="View our projects"
          >
            Our Projects
          </Link>

          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-orange-500 transition font-bold px-8 py-3 rounded uppercase tracking-wide"
            aria-label="Get a quote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}