import React from 'react';
import { Icons } from '../assets/icons/index';

//  estructura para evitar errores
interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  //los datos de icons
  const skillsList: SkillItem[] = [
    { name: 'HTML5', icon: Icons.skills.html, color: '#E34F26' },
    { name: 'CSS3', icon: Icons.skills.css, color: '#1572B6' },
    { name: 'JavaScript', icon: Icons.skills.javaScript, color: '#F7DF1E' },
    { name: 'React', icon: Icons.skills.react, color: '#61DAFB' },
    { name: 'Tailwind', icon: Icons.skills.tailwind, color: '#06B6D4' },
    { name: 'Git', icon: Icons.skills.git, color: '#F05032' },
    { name: 'GitHub', icon: Icons.skills.githubLogo, color: '#FFFFFF' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#121212]">
      <div className="max-w-6xl mx-auto w-full">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tecnologías que utilizo
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Mi stack principal enfocado en el desarrollo de aplicaciones web robustas y escalables.
          </p>
        </header>

        {/* Grid Layout  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-[#1E1E1E] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 flex flex-col items-center justify-center gap-5 shadow-xl"
            >
              {/* Glow Effect al hacer hover   */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} logo`} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </h3>

              {/* Línea decorativa inferior para separaa*/}
              <div
                className="w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;