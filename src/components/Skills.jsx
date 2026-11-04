
import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Terminal,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["Java", "Python"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Machine Learning", "NLP", "Scikit-learn"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#080908] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#C8FF35]">
            My Expertise
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Technical <span className="text-[#C8FF35]">Skills.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build applications,
            solve problems, and explore new ideas.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#111311] p-6 transition hover:border-[#C8FF35]/60"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-[#C8FF35]/10 p-3">
                    <Icon size={24} className="text-[#C8FF35]" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
