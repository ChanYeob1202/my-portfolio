export default function Hero() {
  return (
    <div 
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16 w-full text-center">
        
        {/* Main heading with embedded profile image*/}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700 leading-tight">
            {/* First line with profile pic */}
            <span className="flex items-center flex-wrap justify-center gap-x-3 gap-y-2">
              <span>Hello</span>
              <span className="inline-block bg-orange-400 rounded-full px-5 py-1 animate-bounce-twice">
                <img 
                  src="/img/profile.jpg"
                  alt="profile"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover inline-block"
                />
              </span>
              <span>I'm Michael</span>
            </span>

            {/* Second line with decorative element */}
            <span className="flex items-center flex-wrap justify-center gap-x-3 gap-y-2 mt-3 md:mt-4">
              <span>I build</span>
              <span className="inline-block bg-blue-600 rounded-full w-24 h-12 md:w-32 md:h-16 lg:w-36 lg:h-18 relative overflow-hidden">
                {/* Abstract decorative pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-blue-600 to-blue-800 opacity-80"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                }}></div>
              </span>
              <span>products</span>
            </span>
          </h1>
        </div>

        {/* Description paragraph */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <p className="text-base md:text-lg md:font-semibold text-gray-700 leading-relaxed">
            Full-Stack Developer building web applications that strengthen communities 
            and drive real impact.
          </p>
          <p className="text-base md:text-lg md:font-semibold text-gray-700 leading-relaxed">
            From managing a coffee shop to managing codebases — I bring a user-first mindset 
            and hands-on problem-solving to everything I build. I specialize in React, Next.js, 
            Node.js, and PostgreSQL.
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
            href= "https://github.com/ChanYeob1202" 
            className="px-4 py-2 border-2 border-gray-400 rounded-full text-sm text-gray-700 hover:border-gray-600 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
          <a 
            href="/documents/resume.pdf" 
            className="px-4 py-2 border-2 border-gray-400 rounded-full text-sm text-gray-700 hover:border-gray-600 hover:bg-gray-100 transition"
            download
          >
            Resume
          </a>
          
        </div>
      </div>
    </div>
  )
}