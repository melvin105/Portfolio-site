export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#00e1c2] mb-3">Melvin Kwaku Yawlui</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate web developer and data analyst creating innovative digital solutions. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-[#00e1c2] mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-[#00e1c2] transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#00e1c2] transition-colors text-sm">About</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-[#00e1c2] transition-colors text-sm">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#00e1c2] transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-[#00e1c2] mb-3">Get In Touch</h3>
            <p className="text-gray-400 text-sm mb-2">Ghana, West Africa</p>
            <p className="text-gray-400 text-sm">Available for freelance work</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://linkedin.com/in/melvin-kwaku-yawlui" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-8 h-8"/>
          </a>
          <a href="https://github.com/melvin105" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub" className="w-8 h-8"/>
          </a>
          <a href="https://x.com/Melvin_Kwaku" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="w-8 h-8"/>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Melvin Kwaku Yawlui. All rights reserved. 
            <span className="block mt-1">Built with ❤️ using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
