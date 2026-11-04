
import { motion } from "motion/react";

import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Globe,
  Lightbulb,
  Rocket,
} from "lucide-react";

function About() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Frontend Development",
      description:
        "Building responsive and attractive interfaces using React, JavaScript, HTML and CSS.",
    },
    {
      icon: <Globe size={28} />,
      title: "Backend Development",
      description:
        "Creating REST APIs and server-side applications using Node.js and Express.js.",
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI & Machine Learning",
      description:
        "Exploring intelligent applications, machine learning and data-driven solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#080908]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[#C8FF35] uppercase tracking-[4px] text-sm">
            Get to know me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            About <span className="text-[#C8FF35]">Me.</span>
          </h2>
        </motion.div>

        {/* About Bento Grid */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#151813] border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-5">
              Who I Am
            </h3>

            <p className="text-gray-400 leading-8">
              I'm Amit Kumar Sah, a Computer Science Engineering
              graduate from Chandigarh University. I am passionate
              about software development, modern web technologies,
              and solving real-world problems through technology.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              I enjoy learning new technologies, building projects,
              exploring Artificial Intelligence, and improving
              my programming and problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              {["Problem Solving", "Web Development", "AI/ML"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#C8FF35]/30 text-[#C8FF35] text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151813] border border-[#C8FF35]/20 rounded-3xl p-8"
          >
            <GraduationCap
              size={38}
              className="text-[#C8FF35] mb-6"
            />

            <p className="text-gray-400 text-sm">
              Education
            </p>

            <h3 className="text-xl font-bold mt-3">
              B.Tech Computer Science Engineering
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              Chandigarh University
            </p>

            <p className="text-[#C8FF35] text-sm mt-4">
              2022 – 2026
            </p>
          </motion.div>

          {/* Career Mindset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151813] border border-white/10 rounded-3xl p-8"
          >
            <Lightbulb
              size={35}
              className="text-[#C8FF35] mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              My Mindset
            </h3>

            <p className="text-gray-400 leading-7 text-sm">
              I believe in continuous learning, practical
              experience, clean code and building useful
              digital products.
            </p>
          </motion.div>

          {/* Career Goal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#151813] border border-white/10 rounded-3xl p-8"
          >
            <Rocket
              size={35}
              className="text-[#C8FF35] mb-5"
            />

            <h3 className="text-2xl font-bold mb-3">
              My Career Goal
            </h3>

            <p className="text-gray-400 leading-8">
              My goal is to grow as a software developer,
              contribute to meaningful projects, and create
              scalable applications that solve real-world
              challenges.
            </p>
          </motion.div>

        </div>

        {/* What I Do */}
        <div className="mt-24">

          <p className="text-[#C8FF35] text-sm uppercase tracking-[4px]">
            My Expertise
          </p>

          <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-10">
            What I <span className="text-[#C8FF35]">Do.</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-5">

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-[#151813] border border-white/10 rounded-3xl p-8 hover:border-[#C8FF35]/50 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-[#C8FF35] mb-6">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold mb-4">
                  {service.title}
                </h4>

                <p className="text-gray-400 leading-7 text-sm">
                  {service.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
