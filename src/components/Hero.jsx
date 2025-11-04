import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Hero() {
  return (
    <div 
      id = "hero"      
      className="min-h-screen flex items-center justify-center"
      >
      <div className="max-w-5xl mx-auto px-8 md:px-16 w-full text-center">
        
        {/* Main heading with embedded profile image */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-700 leading-tight">
            {/* First line with profile pic */}
            <span className="inline-flex items-center flex-wrap justify-center gap-4">
              Hello
              <span className="inline-block bg-orange-400 rounded-full px-8 py-2 mx-2">
                <img 
                  src="/img/profile.jpg"
                  alt="profile"
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover inline-block"
                />
              </span>
              I'm Michael
            </span>
            <br />

            {/* Second line with decorative element */}
            <span className="inline-flex items-center flex-wrap justify-center gap-4 mt-4">
              I build
              <span className="inline-block bg-blue-600 rounded-full w-32 h-16 md:w-40 md:h-20 mx-2 relative overflow-hidden">
                {/* Abstract decorative pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 opacity-80"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                }}></div>
              </span>
              stuff
            </span>
          </h1>
        </div>

        {/* Description paragraph */}
        {/* Description paragraph */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <p className="text-base md:text-lg md:font-semibold text-gray-700 leading-relaxed">
            Front-end developer solving real-world problems through thoughtful web applications.
          </p>
          <p className="text-base md:text-lg md:font-semibold text-gray-700 leading-relaxed">
            From managing a coffee shop to managing codebases—I bring problem-solving skills and a 
            user-first mindset to every project. I'm passionate about creating digital experiences 
            that help people and businesses thrive.
          </p>
          <p className="text-base md:text-lg md:font-semibold text-gray-700 leading-relaxed">
            Open to opportunities. Let's build something great together.
          </p>
        </div>

        {/* Social badges */}
        <div className="flex gap-4 items-center justify-center flex-wrap mb-10">
          <a 
            href="https://www.linkedin.com/in/michael-kim-3514a9314/" 
            className="px-4 py-2 border-2 border-gray-400 rounded-full text-sm text-gray-700 hover:border-gray-600 hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/ChanYeob1202" 
            className="px-4 py-2 border-2 border-gray-400 rounded-full text-sm text-gray-700 hover:border-gray-600 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
          
        </div>
        
      </div>
    </div>
  )
}