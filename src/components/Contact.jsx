import React from 'react'
import { TfiEmail } from "react-icons/tfi"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-8 md:px-16 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Let's Connect
        </h2>
        
        <p className="text-lg text-gray-700 mb-12">
          Open to opportunities. Let's build something great together.
        </p>
        
        <a 
          href="mailto:michael.yeobb@gmail.com" 
          className="inline-block group"
        >
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-gray-900 hover:bg-gray-900 transition-all duration-300">
            <TfiEmail className="text-4xl text-gray-700 group-hover:text-white transition-colors" />
          </div>
          <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
            michael.yeob@gmail.com
          </p>
        </a>
      </div>
    </section>
  )
}