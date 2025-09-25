import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-gray-800">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[url('https://img.icons8.com/ios-filled/50/00e1c2/github.png')] bg-center bg-contain"></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-gray-400">
            <li><Link to="/" className="hover:text-[#00e1c2] font-medium">HOME</Link></li>
            <li><Link to="/about" className="hover:text-[#00e1c2] font-medium">ABOUT</Link></li>
            <li><Link to="/projects" className="hover:text-[#00e1c2] font-medium">PROJECTS</Link></li>
            <li><Link to="/contact" className="hover:text-[#00e1c2] font-medium">CONTACT</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="px-4 py-4">
          <ul className="flex flex-col space-y-4 text-gray-400">
            <li>
              <Link 
                to="/" 
                className="block py-2 hover:text-[#00e1c2] font-medium transition-colors"
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block py-2 hover:text-[#00e1c2] font-medium transition-colors"
                onClick={closeMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="block py-2 hover:text-[#00e1c2] font-medium transition-colors"
                onClick={closeMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-2 hover:text-[#00e1c2] font-medium transition-colors"
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
