import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-16 py-4 bg-[#0a0a0a] border-b border-gray-800">
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-10">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[url('https://img.icons8.com/ios-filled/50/00e1c2/github.png')] bg-center bg-contain"></div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 text-gray-400">
            <li><Link to="/" className="hover:text-[#00e1c2] font-medium text-sm sm:text-base">HOME</Link></li>
            <li><Link to="/about" className="hover:text-[#00e1c2] font-medium text-sm sm:text-base">ABOUT</Link></li>
            <li><Link to="/projects" className="hover:text-[#00e1c2] font-medium text-sm sm:text-base">PROJECTS</Link></li>
            <li><Link to="/contact" className="hover:text-[#00e1c2] font-medium text-sm sm:text-base">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
