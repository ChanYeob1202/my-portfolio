import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      title: "Unroasted",
      description: "A community-driven platform for coffee enthusiasts to share brewing techniques, reviews, and connect with local roasters. Features user profiles, discussion forums, and a coffee bean database.",
      status: "In Development",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/img/portfolio/unRoasted.jpg", // You can add an image path later
      github: "https://github.com/ChanYeob1202/Unroasted", // Update with your actual repo
      demo: null // Add demo link when deployed
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
      demo: "#" // This current site!
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            My Work
          </h2>
          <p className="text-gray-600 text-lg">
            Building projects that solve real problems and help people connect.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Project Image/Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Preview Coming Soon</p>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Active" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 border-gray-300 rounded-lg text-sm text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-900 rounded-lg text-sm text-white hover:bg-gray-700 transition-all"
                    >
                      {project.status === "Active" ? "View Live" : "Coming Soon"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add more projects message */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            More projects coming soon as I continue building and learning!
          </p>
        </div>
      </div>
    </section>
  )
}