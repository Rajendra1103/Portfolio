import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiDocker, SiFigma, SiPython,
  SiWireshark, SiBurpsuite, SiKalilinux
} from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { FiHexagon } from "react-icons/fi";

const levelColors = {
  Expert: "bg-green-100 text-green-700 dark:bg-green-200/20 dark:text-green-400",
  Advanced: "bg-blue-100 text-blue-700 dark:bg-blue-200/20 dark:text-blue-400",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-200/20 dark:text-yellow-400",
  Beginner: "bg-red-100 text-red-700 dark:bg-red-200/20 dark:text-red-400",
};

const skillGroups = [
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "HTML", level: "Expert", icon: SiHtml5 },
      { name: "CSS", level: "Expert", icon: SiCss3 },
      { name: "JavaScript", level: "Advanced", icon: SiJavascript },
      { name: "React", level: "Advanced", icon: SiReact },
      { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss },
      { name: "TypeScript", level: "Intermediate", icon: SiTypescript },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "Advanced", icon: SiNodedotjs },
      { name: "Express", level: "Intermediate", icon: SiExpress },
      { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
      { name: "Python", level: "Advanced", icon: SiPython },
      { name: "Java", level: "Advanced", icon: FaJava },
      { name: "Spring Boot", level: "Intermediate", icon: SiSpring },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", level: "Advanced", icon: SiGit },
      { name: "Docker", level: "Intermediate", icon: SiDocker },
      { name: "Figma", level: "Advanced", icon: SiFigma },
      { name: "VS Code", level: "Expert", icon: VscVscodeInsiders },
    ],
  },
  {
    title: "Cybersecurity",
    icon: "🔐",
    skills: [
      { name: "Wireshark", level: "Advanced", icon: SiWireshark },
      { name: "Kali Linux", level: "Intermediate", icon: SiKalilinux },
      { name: "Nmap", level: "Intermediate", icon: FaEye },
      { name: "Burp Suite", level: "Intermediate", icon: SiBurpsuite },
      { name: "Nessus", level: "Intermediate", icon: FiHexagon }, 
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative lg:ml-64">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="space-y-12">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                <span className="text-xl">{group.icon}</span>
                {group.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {group.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-card border border-border rounded-md p-2 text-center shadow-sm hover:shadow transition-all"
                    >
                      <div className="text-xl text-primary mb-1">
                        <Icon />
                      </div>
                      <p className="text-xs font-medium text-foreground">{skill.name}</p>
                      <span
                        className={`text-[10px] mt-1 px-2 py-0.5 rounded-full font-medium ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
