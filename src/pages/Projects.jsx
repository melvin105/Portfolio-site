// src/pages/Projects.jsx
import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://via.placeholder.com/400x250/1a1a1a/00e1c2?text=E-Commerce+Site",
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "https://via.placeholder.com/400x250/1a1a1a/00e1c2?text=Task+Manager",
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis and visualization with charts, graphs, and real-time data updates using Power BI and custom APIs.",
      technologies: ["Power BI", "Python", "SQL", "JavaScript", "D3.js"],
      image: "https://via.placeholder.com/400x250/1a1a1a/00e1c2?text=Data+Dashboard",
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance.",
      technologies: ["React", "Tailwind CSS", "Vite", "React Router"],
      image: "https://via.placeholder.com/400x250/1a1a1a/00e1c2?text=Portfolio+Site",
      github: "https://github.com/",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-16 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e1c2] mb-4 text-center">
          My Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents a learning journey and showcases different aspects of web development and data analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,225,194,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="project-content p-6">
                <h3 className="text-xl font-bold text-[#00e1c2] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="technologies mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#00e1c2] text-black text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#00e1c2] text-[#00e1c2] rounded hover:bg-[#00e1c2] hover:text-black transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#00e1c2] text-black rounded hover:bg-[#00d4b3] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-[#00e1c2] text-[#00e1c2] font-bold rounded transition hover:bg-[#00e1c2] hover:text-black"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
