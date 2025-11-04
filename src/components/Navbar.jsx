import React from 'react'

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex items-center justify-between px-24 py-2 sticky top-0 bg-[#eeeee6] z-50">
      <div className="bg-red-800 text-white px-4 py-2 rounded-2xl font-semibold text-2xl">
        <button onClick={() => scrollToSection('hero')}>M</button>
      </div>
      <div className="flex gap-4 text-black font-semibold">
        <button onClick={() => scrollToSection('hero')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </div>
  )
}