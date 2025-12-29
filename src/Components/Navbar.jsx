import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  // Scroll shadow + resize + escape
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => window.innerWidth > 768 && setMenuOpen(false);
    const onEsc = (e) => e.key === "Escape" && setMenuOpen(false);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white transition ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Dev Roopmani Logo"
            className="h-40 w-auto object-contain"
          />
        </NavLink>

        {/* Hamburger */}
        <button
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-slate-800 z-50"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Navigation */}
        <ul
          className={`md:flex md:static fixed top-20 right-0 w-full md:w-auto h-[calc(100vh-80px)] md:h-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-300 ${
            menuOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/services", label: "Services" },
            { path: "/projects", label: "Projects" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `relative font-medium text-slate-800 hover:text-orange-500 transition
                  ${isActive ? "text-orange-500 after:w-full" : "after:w-0"}
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:bg-orange-500 after:transition-all`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
