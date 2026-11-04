
import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Sentiment Analysis Using Twitter Dataset",
    description:
      "A machine learning project that analyzes Twitter text and classifies opinions as positive or negative using Logistic Regression and TF-IDF.",
    technologies: ["Python", "Machine Learning", "NLP", "TF-IDF"],
    github: "https://github.com/YOUR_USERNAME",
    type: "AI / Machine Learning",
  },
  {
    number: "02",
    title: "Emotion-Driven Music Recommendation System",
    description:
      "A web application that detects facial emotions through a camera and recommends music based on the detected mood.",
    technologies: ["Python", "Flask", "OpenCV", "Computer Vision"],
    github: "https://github.com/YOUR_USERNAME",
    type: "AI / Computer Vision",
  },
];

function Projects() {
  return (
    <section
      id="work"
      className="bg-[#080908] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#C8FF35]">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured{" "}
            <span className="text-[#C8FF35]">Projects.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of projects where I apply my programming,
            development, and problem-solving skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group rounded-2xl border border-white/10 bg-[#111311] p-7 transition hover:-translate-y-2 hover:border-[#C8FF35]/60"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="rounded-xl bg-[#C8FF35]/10 p-3">
                  <FolderGit2
                    size={27}
                    className="text-[#C8FF35]"
                  />
                </div>

                <span className="text-sm text-gray-500">
                  {project.number}
                </span>
              </div>

              <p className="mb-3 text-sm font-medium text-[#C8FF35]">
                {project.type}
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mb-6 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#C8FF35] hover:text-white"
              >
                <FaGithub size={18} />
                View on GitHub
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
