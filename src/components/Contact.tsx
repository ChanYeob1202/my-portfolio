import { TfiEmail } from "react-icons/tfi"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-linear-to-br from-gray-50 to-white py-20 flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-5xl mx-auto px-8 md:px-16 w-full text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Work Together 🤝
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm actively seeking opportunities to contribute to innovative teams and build impactful solutions.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <a 
            href="mailto:michael.yeob@gmail.com" 
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-100 rounded-full group-hover:bg-orange-400 transition-all duration-300">
              <TfiEmail className="text-3xl text-orange-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm break-all">
              michael.yeob@gmail.com
            </p>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/michael-kim-3514a9314/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 transition-all duration-300">
              <FaLinkedinIn className="text-3xl text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-sm">
              View my professional profile
            </p>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/ChanYeob1202" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-900 transition-all duration-300">
              <FaGithub className="text-3xl text-gray-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 text-sm">
              Explore my projects
            </p>
          </a>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-orange-400 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for a Front-End Developer?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            I'm available for full-time opportunities and would love to discuss how I can contribute to your team.
          </p>
          <a 
            href="mailto:michael.yeob@gmail.com"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in touch
          </a>
        </div>

        {/* Bottom text */}
        <div className="mt-12">
          <p className="text-gray-500 text-sm">
            Open to full-time and contract opportunities • Available to start immediately
          </p>
        </div>
      </div>
    </section>
  )
}