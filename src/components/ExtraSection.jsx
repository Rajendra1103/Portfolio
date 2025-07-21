import { motion } from "framer-motion";

export const ExtraSections = () => {
  const internships = [
    {
      title: "Web Development Intern – EduPhoenix Solution",
      duration: "Apr 2024 – Jun 2024",
      description:
        "Developed responsive UIs using React.js and integrated RESTful APIs with MongoDB and Node.js. Enhanced accessibility and optimized performance.",
    },
    {
      title: "Iot Developer Intern – Atria Institute of Technology",
      duration: "Nov 2023 – Dec 2023",
      description:
       "Developed an IoT-enabled voice emotion detection system using Python, ANN, and Scikit-learn. Focused on signal processing, device integration, and model training.",
    },
  ];

  const certificates = [
    {
      title: "Java Full Stack Development",
      platform: "TNSIF • june 2024",
    },
     {
      title: "Cybersecurity",
      platform: "NASSCOM • Dec 2024",
    },
    {
      title: "DataBase Management System",
      platform: "NPTEL • Oct 2023",
    },
    {
      title: "Java Programming",
      platform: "NPTEL • Feb 2024",
    },
    {
      title: "Cloud Security",
      platform: "Palo Alto • Jan 2024",
    },
     {
      title: "Microsoft 360",
      platform: "Magic Bus • Jan 2024",
    },
  ];

  return (
    <>
      {/* Internships Section */}
      <section id="internships" className="py-24 px-4 relative lg:ml-64">
        <div className="max-w-5xl mx-auto text-foreground">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">Internships</span>
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {internships.map((intern, i) => (
              <motion.div
                key={i}
                className="bg-muted border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.015]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-primary">{intern.title}</h3>
                <p className="text-sm text-muted-foreground">{intern.duration}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {intern.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 px-4 relative lg:ml-64">
        <div className="max-w-5xl mx-auto text-foreground">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">Certificates</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-muted border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-transform transform hover:scale-[1.01]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.platform}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
