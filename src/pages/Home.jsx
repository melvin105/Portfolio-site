// src/pages/Home.jsx
import profilePic from "../assets/lena.jpg"; // make sure lena.jpg is inside src/assets

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-6 md:p-16">
      {/* Intro Text */}
      <div className="intro max-w-lg text-center md:text-left">
        <h4 className="text-sm text-[#00e1c2] mb-2">MELVIN KWAKU YAWLUI</h4>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I'm a Web <span className="text-[#00e1c2]">Developer</span>
        </h1>
        <p className="text-gray-400 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          illum nam nobis, minima laudantium fugit sequi nostrum quod impedit,
          beatae necessitatibus praesentium optio labore nemo!
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 border border-[#00e1c2] text-[#00e1c2] font-bold rounded transition hover:bg-[#00e1c2] hover:text-black"
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Profile Picture */}
      <div className="profile-pic">
        <img
          src={profilePic}
          alt="Profile Photo"
          className="w-64 md:w-80 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
