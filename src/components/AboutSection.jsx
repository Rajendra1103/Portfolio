import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative lg:ml-64">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20 text-foreground"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 text-foreground"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              I'm a software developer focused on building scalable, modern web applications. With strong experience in React, Node.js, Python, and Spring Boot, I develop full-stack solutions for real-world challenges.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I’ve also worked on AI projects like voice-based emotion detection and smart IoT systems using Python, Scikit-learn, and neural networks.
            </p>

            <div className="flex gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition"
              >
                Contact Me
              </a>
              <a
                href="/projects/Rajendraprasad_H_S_Resume.pdf"
                download
                className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="./projects/profile.jpeg"
              alt="Profile"
              className="w-60 h-60 rounded-xl object-cover border-4 border-primary shadow-md"
            />
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28 bg-muted border border-border rounded-xl shadow-md p-8 md:p-12"
        >
          <h4 className="text-xl font-semibold text-primary flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5" />
            Education
          </h4>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* MCA Card */}
            <div className="relative rounded-md overflow-hidden shadow-md border border-border">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/projects/ait.avif')" }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
              </div>
              <div className="relative p-6 space-y-2 z-10 text-white">
                <h5 className="font-semibold text-lg">
                  MCA - Atria Institute of Technology
                </h5>
                <p className="text-sm opacity-90">2022 – 2024</p>
                <p className="text-sm opacity-90">CGPA: 8.46</p>
              </div>
            </div>

            {/* BSc Card */}
            <div className="relative rounded-md overflow-hidden shadow-md border border-border">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/projects/ycm.avif')" }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
              </div>
              <div className="relative p-6 space-y-2 z-10 text-white">
                <h5 className="font-semibold text-lg">
                  BSc CS - Yuvaraja's College, Mysore
                </h5>
                <p className="text-sm opacity-90">2019 – 2022</p>
                <p className="text-sm opacity-90">CGPA: 7.08</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
