import React from 'react'

export default function About() {
  const services = [
    {
      title: "Programming",
      description: "Building dynamic and interactive applications with modern JavaScript.",
      skills: "JavaScript",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Web & Database",
      description: "Creating responsive and accessible web experiences with HTML and CSS.",
      skills: "HTML, CSS",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Frameworks",
      description: "Developing scalable applications using Bootstrap, React.JS, and Express.js.",
      skills: "Bootstrap, React.JS, Express.js",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Tech",
      description: "Streamlining workflow with Git version control and modern development tools.",
      skills: "Git, Visual Studio, Cursor",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          {/* Bio Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey into web development started behind an espresso machine. As a barista, 
                I was passionate about coffee and wanted to share that knowledge with others, so I 
                built my own coffee community website—and that's when I fell in love with coding.
              </p>
              <p>
                What began as a simple project turned into a full-blown passion. When I became a manager 
                at the coffee shop, I took on building a website for the business, diving deeper into 
                web development and discovering how powerful it is to create digital experiences that 
                bring people together.
              </p>
              <p>
                Now, I combine my love for creating meaningful connections with my technical skills to 
                build modern, user-friendly web applications. Whether it's a coffee community or a 
                business website, I'm all about crafting experiences that matter.
              </p>
            </div>
          </div>
          
          {/* Casual Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Image 1 */}
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden">
              <img 
                src="/img/about/6xs.jpg" 
                alt="Casual photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Add Image</div>';
                }}
              />
            </div>
            
            {/* Image 2 */}
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden mt-8">
              <img 
                src="/img/about/newyork2.jpg" 
                alt="Casual photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Add Image</div>';
                }}
              />
            </div>
            
            {/* Image 3 */}
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden">
              <img 
                src="/img/about/maru.jpg"  
                alt="Casual photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Add Image</div>';
                }}
              />
            </div>
            
            {/* Image 4 */}
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden -mt-8">
              <img 
                src="/img/about/newyork1.jpg" 
                alt="Casual photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Add Image</div>';
                }}
              />
            </div>
            
            {/* Image 5 - NEW */}
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden">
              <img 
                src="/img/about/star.jpg" 
                alt="Casual photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Add Image</div>';
                }}
              />
            </div>
            
            {/* Image 6 - NEW */}
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden mt-8">
              <img 
                src="/img/about/chicago2.jpg" 
                alt="Casual photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Add Image</div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Skills Section Header */} 
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg">
            Building modern web applications with clean code and best practices.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group"
            >
              {/* Icon */}
              <div className="mb-6 text-gray-700 opacity-60 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                {service.description}
              </p>
              
              {/* Skills */}
              <p className="text-gray-500 text-xs font-medium">
                {service.skills}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="border-t border-gray-200 pt-20">
          <h3 className="text-center text-sm font-medium text-gray-500 mb-12 uppercase tracking-wider">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {/* React Logo */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.07 1.93c.65 1.27 1.07 2.42 1.2 3.26.13.84-.03 1.39-.22 1.53-.19.14-.77.07-1.54-.36-.77-.43-1.64-1.14-2.52-2.03.64-.69 1.27-1.45 1.89-2.26.43-.04.85-.1 1.19-.14m-8.27.14c.62.81 1.25 1.57 1.89 2.26-.88.89-1.75 1.6-2.52 2.03-.77.43-1.35.5-1.54.36-.19-.14-.35-.69-.22-1.53.13-.84.55-1.99 1.2-3.26.34.04.76.1 1.19.14m-1.2-5.4c-.13.84-.03 1.39.22 1.53.19.14.77.07 1.54-.36.77-.43 1.64-1.14 2.52-2.03-.64-.69-1.27-1.45-1.89-2.26-.43.04-.85.1-1.19.14-.65 1.27-1.07 2.42-1.2 3.26m8.27-.14c-.62-.81-1.25-1.57-1.89-2.26.88-.89 1.75-1.6 2.52-2.03.77-.43 1.35-.5 1.54-.36.19.14.35.69.22 1.53-.13.84-.55 1.99-1.2 3.26-.34-.04-.76-.1-1.19-.14z"/>
              </svg>
            </div>
            
            {/* JS Badge */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-800 text-white px-4 py-2 rounded font-bold text-sm">
                JavaScript
              </div>
            </div>
            
            {/* Bootstrap */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.172 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.099 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>
              </svg>
            </div>
            
            {/* Git */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
              </svg>
            </div>
            
            {/* HTML5 */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
              </svg>
            </div>
            
            {/* CSS3 */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}