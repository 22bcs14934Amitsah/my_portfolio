
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080908]/90 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-[#C8FF35]"
        >
          AMIT<span className="text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 hover:text-[#C8FF35] transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-5">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 text-gray-400 hover:text-[#C8FF35] transition" />
          </a>

          <a
            href="https://linkedin.com/in/amit-sah-2a78b6320/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-[#C8FF35] transition" />
          </a>

          <a
            href="#contact"
            className="border border-[#C8FF35] text-[#C8FF35] px-5 py-2 rounded-full text-sm hover:bg-[#C8FF35] hover:text-black transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#C8FF35]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-5">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#C8FF35]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-[#C8FF35]"
          >
            Hire Me →
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
