import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 md:px-16 py-5 bg-[#0a0a0a] border-b border-gray-800">
      <div className="flex items-center space-x-10">
        <div className="w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/50/00e1c2/github.png')] bg-center bg-contain"></div>
        <nav>
          <ul className="flex space-x-8 text-gray-400">
            <li><Link to="/" className="hover:text-[#00e1c2] font-medium">HOME</Link></li>
            <li><Link to="/about" className="hover:text-[#00e1c2] font-medium">ABOUT</Link></li>
            <li><Link to="/projects" className="hover:text-[#00e1c2] font-medium">PROJECTS</Link></li>
            <li><Link to="/contact" className="hover:text-[#00e1c2] font-medium">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
