import { FaGithub, FaLinkedinIn } from "react-icons/fa"

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
                  src="/img/profile-hero.jpg"
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

        {/* Tagline */}
        <p className="max-w-3xl mx-auto mb-10 text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          Full-Stack Developer who builds products real people use —{' '}
          <span className="text-blue-600">and measures the results.</span>
        </p>

        {/* Impact stats */}
        <div className="max-w-3xl mx-auto mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: '4,500+', label: 'visitors to the café site I built' },
            { value: '54%', label: 'click through to order online' },
            { value: '+14%', label: 'YoY online ordering sales' },
          ].map((stat) => (
            <div key={stat.value} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-5">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Supporting copy */}
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-gray-600 leading-relaxed">
          I built the website for the café I manage. I also built{' '}
          <span className="font-semibold text-gray-800">Landr</span>, a full-stack job tracker
          (Next.js, Express, PostgreSQL) that I use every day.
        </p>

        {/* Availability */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-800">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Open to junior frontend & full-stack roles
        </div>

        {/* CTAs + social icons */}
        <div className="flex gap-4 items-center justify-center flex-wrap mb-10">
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition"
          >
            View my work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 text-sm font-semibold hover:bg-gray-100 transition"
          >
            Get in touch
          </button>
          <div className="flex items-center gap-1 sm:ml-2">
            <a
              href="https://www.linkedin.com/in/michael-kim-3514a9314/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ChanYeob1202"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}