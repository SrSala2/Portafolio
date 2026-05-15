import React from 'react';
import { Icons } from '../assets/icons/index';

// Tipado para la experiencia
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  color: 'cyan' | 'blue';
}

// Datos
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Soporte Técnico',
    company: 'Textilera del Sur TexSur',
    period: '2025 - Actualidad',
    description: 'Soporte y mantenimiento a equipos, instalación de sistemas operativos y resolución de problemas.',
    color: 'cyan'
  },
  {
    title: 'Creación de Contenido',
    company: 'Pañalera Don Bebe',
    period: '2022 – 2024',
    location: 'Santo Domingo',
    description: 'Producción de videos y publicaciones para promocionar productos.',
    color: 'blue'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto w-full">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trayectoria
            </span>
          </h2>
        </header>

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden md:block opacity-50" 
            aria-hidden="true"
          />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <article key={index} className="relative pl-0 md:pl-20 group">
                
                {/* Timeline Dot animacion  */}
                <div 
                  className="absolute left-[1.35rem] top-6 w-4 h-4 rounded-full bg-[#1E1E1E] border-[3px] border-cyan-400 hidden md:block transition-transform duration-300 group-hover:scale-150 group-hover:bg-cyan-400 z-10" 
                  aria-hidden="true"
                />

                <div className="bg-[#1E1E1E] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/5 hover:-translate-y-1">
                  <header className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    
                    {/* Renderizado condicional de icon */}
                    <div className="p-3 rounded-xl bg-[#121212] border border-gray-800 flex-shrink-0">
                      <img 
                        src={exp.color === 'cyan' ? Icons.experience.maletinCyan : Icons.experience.maletinAzulOscuro} 
                        alt={`Icono de maletín ${exp.color}`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-100 tracking-tight">{exp.title}</h3>
                      <p className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block mb-1">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <time>{exp.period}</time>
                        {exp.location && (
                          <>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </header>

                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;