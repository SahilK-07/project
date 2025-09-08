import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MeetEase",
    description:
      "A real-time video calling web application enabling peer-to- peer communication.",
    image:"/projects/project1.png",
    tags: ["React", "Material UI", "Web RTC"],
    demoUrl: "https://apna-videocall-frontend.onrender.com/",
    githubUrl: "https://github.com/ankityyyy/apna-videocall",
  },
  {
    id: 2,
    title: "Airbnb",
    description:
      "A web-based platform for listing and booking rental properties. The application allows users to perform CRUD operations for property listings and includes secure authentication for user accounts.",
     image: "/projects/project2.png",
    tags: [" MongoDB", "Node.js", "EJS"],
    demoUrl: "https://wanderlust24-latest-2.onrender.com",
    githubUrl: "https://github.com/SahilK-07/project",
  },
  
  {
    id: 6,
    title: "Portfolio",
    description:
      "A modern and responsive personal portfolio showcasing my skills, projects, and experience.Built using React, Tailwind CSS, and deployed on platforms like Netlify.Features smooth animations, interactive UI, and sections like About, Projects, Contact, and Resume.",
    image:"/projects/project6.png",
    tags: [ "React", "Tailwind CSS"],
    demoUrl: "https://neon-nasturtium-ec6760.netlify.app/",
    githubUrl: "https://github.com/ankityyyy/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              

  


              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ankityyyy"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
