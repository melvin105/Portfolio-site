// src/pages/About.jsx
import React from "react";
import profilePic from "../assets/lena.jpg"; // keep lena.jpg inside src/assets

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-16 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
        {/* Profile Image */}
        <div className="about-img flex-shrink-0">
          <img
            src={profilePic}
            alt="Profile Image"
            className="w-64 md:w-80 rounded-xl shadow-[0_0_20px_rgba(0,225,194,0.2)]"
          />
        </div>

        {/* About Content */}
        <div className="about-content flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00e1c2] mb-6">
            About Me
          </h2>
          <p className="objective text-gray-300 leading-relaxed mb-8">
            I'm a passionate and detail-driven web developer and aspiring data
            analyst with strong skills in Excel, SQL, and database management. I
            thrive on using technology to streamline processes, build responsive
            and efficient web applications, and uncover meaningful insights
            through data. With a commitment to continuous learning and growth,
            I’m always eager to take on new challenges and contribute to
            impactful, results-oriented projects.
          </p>

          {/* Technical Skills */}
          <h3 className="skills-heading text-2xl md:text-3xl font-bold text-[#00e1c2] border-l-4 border-[#00e1c2] pl-4 mb-6">
            Technical Skills
          </h3>

          {/* Programming */}
          <div className="skill-category mb-8">
            <h4 className="text-xl font-semibold text-gray-300 mb-4">
              Programming
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <SkillItem
                img="https://img.icons8.com/color/48/000000/python.png"
                name="Python"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                name="C++"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/git.png"
                name="Git"
              />
            </div>
          </div>

          {/* Web Development */}
          <div className="skill-category mb-8">
            <h4 className="text-xl font-semibold text-gray-300 mb-4">
              Web Development
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <SkillItem
                img="https://img.icons8.com/color/48/000000/html-5.png"
                name="HTML"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/css3.png"
                name="CSS"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/javascript.png"
                name="JavaScript"
              />
              <SkillItem
                img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                name="React"
              />
              <SkillItem
                img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                name="Vite"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/php.png"
                name="PHP"
              />
            </div>
          </div>

          {/* Data Analysis */}
          <div className="skill-category mb-8">
            <h4 className="text-xl font-semibold text-gray-300 mb-4">
              Data Analysis
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <SkillItem
                img="https://img.icons8.com/color/48/000000/ms-excel.png"
                name="Excel"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/sql.png"
                name="SQL"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/ms-access.png"
                name="MS Access"
              />
              <SkillItem
                img="https://img.icons8.com/color/48/000000/power-bi.png"
                name="Power BI"
              />
            </div>
          </div>

          {/* Soft Skills */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#00e1c2] border-l-4 border-[#00e1c2] pl-4 mb-6 mt-12">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <SkillItem
              img="https://img.icons8.com/color/48/000000/idea.png"
              name="Problem-Solving"
            />
            <SkillItem
              img="https://img.icons8.com/color/48/000000/brain.png"
              name="Critical Thinking"
            />
            <SkillItem
              img="https://img.icons8.com/fluency/48/000000/conference-call.png"
              name="Team Collaboration"
            />
          </div>

          {/* Resume Button */}
          <a
            href="#"
            className="inline-block mt-8 px-6 py-3 border border-[#00e1c2] text-[#00e1c2] font-bold rounded transition hover:bg-[#00e1c2] hover:text-black"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

/* Skill Item component */
function SkillItem({ img, name }) {
  return (
    <div className="skill-item p-6 bg-[#1a1a1a] rounded-lg text-center transition hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,225,194,0.2)]">
      <img src={img} alt={name} className="mx-auto mb-2" />
      <span className="block text-lg text-gray-300">{name}</span>
    </div>
  );
}
