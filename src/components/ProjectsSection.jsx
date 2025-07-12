import { ArrowRight, ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
// import travel from "/projects/travel2.PNG"; 
// import weather from "/projects/weather1.PNG";

const projects = [
  {
    id: 1,
    title: "Travel Booking Landing Page",
    description:
      "A responsive travel booking landing page with animations and clean UI.",
    image: "./projects/travel2.PNG",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajendra1103/travels-booking-landing-page",
  },
  {
    id: 2,
    title: "MERN Job Portal",
    description:
      "A full-stack MERN portal with login, job search, and admin panel.",
    image: "./projects/jobportal.PNG",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajendra1103/job-portal-using-MERN",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Weather forecast app with real-time data from OpenWeatherMap API.",
    image: "./projects/weather1.PNG",
    tags: ["React.js", "API", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajendra1103/weather-app",
  },
  {
    id: 4,
    title: "Rubik's Cube Solver",
    description:
      "Cube solver with visual steps using realistic 2D cube representation.",
    image: "./projects/rubic.PNG",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rajendra1103/Rubik-s-cube-solver",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "Builds dynamic, visually stunning portfolios using JSON-driven content and Tailwind CSS.",
    image: "./projects/portfolio.png",
    tags: ["React", "TailwindCSS", "JSON"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const card = container.querySelector(".project-card");
    const cardWidth = card.offsetWidth + 24;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24 px-4 relative lg:ml-64">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my full-stack, React, and JavaScript
          development experience.
        </p>

        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-6 min-w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons - aligned to bottom right */}
        <div className="flex justify-between ps-3 pe-3 gap-4 mt-6 px-4">
          <button
            onClick={() => scroll("left")}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Back
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Next
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Rajendra1103"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
