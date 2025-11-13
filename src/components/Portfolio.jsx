import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      title: "Unroasted",
      description: "A community-driven platform for coffee enthusiasts to share brewing techniques, reviews, and connect with local roasters. Features user profiles, discussion forums, and a coffee bean database.",
      status: "In Development",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/img/portfolio/unRoasted.jpg",
      github: "https://github.com/ChanYeob1202/Unroasted",
      demo: null
    },
    {
      title: "RNY Coffee Studio",
      description: "Modern, responsive website for a local coffee shop featuring menu displays, location information, and online ordering capabilities. Built with user experience and mobile-first design in mind.",
      status: "In Development", 
      tech: ["React", "Bootstrap", "CSS"],
      image: "/img/portfolio/rny.jpg",
      github: "https://github.com/ChanYeob1202",
      demo: null
    },
    {
      title: "birdEar",
      description: "A review management platform helping small businesses monitor and respond to Google reviews efficiently. Streamlines customer feedback tracking and improves online reputation management.",
      status: "In Development",
      tech: ["React", "Firebase", "API Integration"],
      image: null,
      github: "https://github.com/ChanYeob1202/birdear",
      demo: null
    },
    {
      title: "YouTube Clone",
      description: "A modern, responsive portfolio website showcasing my web development journey, projects, and skills. Built with React and Tailwind CSS, featuring smooth animations and clean design.",
      status: "Active",
      tech: ["React", "Tailwind CSS", "Vite"],
      image: null,
      github: "https://github.com/ChanYeob1202",
      demo: "#"
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Work
          </h2>
          <p className="text-gray-600 text-lg">
            Building projects that solve real problems and help people connect.
          </p>
        </div>
        
        {/* Projects - Alternating Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  {project.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/60 flex items-center justify-center">
                          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-lg font-medium">Preview Coming Soon</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Status Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                      project.status === "Active" 
                        ? "bg-green-500 text-white" 
                        : "bg-orange-500 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-lg text-base font-medium text-white hover:bg-gray-700 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-24">
          <p className="text-gray-500 text-base">
            More projects coming soon as I continue building and learning!
          </p>
        </div>
      </div>
    </section>
  )
}