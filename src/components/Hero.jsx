
import { motion } from "motion/react";

import {
  ArrowUpRight,
  Download,
  Code2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 px-6"
    >

      <div className="max-w-7xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Availability */}
            <div className="inline-flex items-center gap-2 border border-[#C8FF35]/30 rounded-full px-4 py-2 mb-7">

              <span className="w-2 h-2 rounded-full bg-[#C8FF35] animate-pulse"></span>

              <span className="text-xs text-[#C8FF35]">
                AVAILABLE FOR OPPORTUNITIES
              </span>

            </div>

            <p className="text-gray-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AMIT
              <span className="block text-[#C8FF35]">
                KUMAR SAH
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mt-5">
              Full Stack Developer
              <span className="text-[#C8FF35]"> & </span>
              Computer Science Engineer
            </h2>

            <p className="text-gray-400 leading-7 mt-6 max-w-lg">
              I build modern and responsive web applications
              using React, JavaScript and Node.js.
              I enjoy solving problems and transforming ideas
              into meaningful digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#projects"
                className="flex items-center gap-2 bg-[#C8FF35] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
              >
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:border-[#C8FF35] hover:text-[#C8FF35] transition"
              >
                Download CV
                <Download size={18} />
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-9">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-[#C8FF35] transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/amit-sah-2a78b6320/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-[#C8FF35] transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="relative min-h-[350px] md:min-h-[470px] rounded-3xl border border-[#C8FF35]/20 bg-[#151813] overflow-hidden flex items-center justify-center">

              {/* Background Glow */}
              <div className="absolute w-64 h-64 bg-[#C8FF35]/10 blur-[100px] rounded-full"></div>

              {/* Developer Illustration Placeholder */}
              <div className="relative z-10 text-center">

                <div className="w-36 h-36 mx-auto rounded-full border border-[#C8FF35]/40 bg-[#C8FF35]/10 flex items-center justify-center">

                  <Code2
                    size={75}
                    className="text-[#C8FF35]"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-7">
                  BUILD. CREATE. INNOVATE.
                </h3>

                <p className="text-gray-400 mt-2">
                  Turning ideas into reality.
                </p>

              </div>

              {/* Floating Labels */}
              <div className="absolute top-8 left-7 border border-white/10 bg-black/50 px-4 py-2 rounded-xl text-sm">
                &lt; React Developer /&gt;
              </div>

              <div className="absolute bottom-8 right-7 border border-[#C8FF35]/30 bg-black/50 px-4 py-2 rounded-xl text-sm text-[#C8FF35]">
                JavaScript ⚡
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
