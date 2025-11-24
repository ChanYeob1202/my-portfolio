import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close menu after clicking
  }

  return (
    <nav className="flex items-center justify-between px-8 md:px-24 py-2 sticky top-0 bg-white z-50">
      {/* Logo */}
      <div className="bg-red-800 text-white px-4 py-2 rounded-2xl font-semibold text-2xl">
        <button onClick={() => scrollToSection('hero')}>M</button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 text-black font-semibold">
        <button onClick={() => scrollToSection('hero')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-black font-bold text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center py-4 gap-4 text-black font-semibold">
            <button onClick={() => scrollToSection('hero')} className="w-full py-2 hover:bg-gray-200">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="w-full py-2 hover:bg-gray-200">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="w-full py-2 hover:bg-gray-200">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full py-2 hover:bg-gray-200">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}