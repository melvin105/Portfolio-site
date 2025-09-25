// src/pages/Home.jsx
import profilePic from "../assets/lena.jpg"; // make sure lena.jpg is inside src/assets

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 p-4 sm:p-6 md:p-16 min-h-screen">
      {/* Intro Text */}
      <div className="intro max-w-lg text-center md:text-left px-4 sm:px-0">
        <h4 className="text-xs sm:text-sm text-[#00e1c2] mb-2 font-medium">MELVIN KWAKU YAWLUI</h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          I'm a Web <span className="text-[#00e1c2]">Developer</span>
        </h1>
        <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
          Passionate web developer and data analyst creating innovative digital solutions. 
          Let's build something amazing together.
        </p>
        <a
          href="#"
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-[#00e1c2] text-[#00e1c2] font-bold rounded transition hover:bg-[#00e1c2] hover:text-black text-sm sm:text-base"
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Profile Picture */}
      <div className="profile-pic px-4 sm:px-0">
        <img
          src={profilePic}
          alt="Profile Photo"
          className="w-48 sm:w-64 md:w-80 rounded-lg shadow-lg mx-auto"
        />
      </div>
    </section>
  );
}
