import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Icons } from '../assets/icons/index';

// Tipado estricto para garantizar la integridad de los datos
interface Project {
  title: string;
  description: string;
  status: 'En desarrollo' | 'Completado';
  statusColor: 'orange' | 'cyan';
  technologies: string[];
  github: string;
}

// 2. Extracción de datos fuera del componente (Principio DRY)
const PROJECTS_DATA: Project[] = [
  {
    title: 'TalentMatch AI',
    description: 'Aplicación web colaborativa para automatizar el trabajo de reclutamiento de RRHH mediante inteligencia artificial.',
    status: 'En desarrollo',
    statusColor: 'orange',
    technologies: ['React', 'Tailwind CSS', 'AI/LLM', 'Node.js', 'Prisma'],
    github: 'https://github.com/JosePerez0314/talentmatch-frontend'
  },
  {
    title: 'Blogy',
    description: 'Página web tipo blog creada de forma colaborativa.',
    status: 'Completado',
    statusColor: 'cyan',
    technologies: ['HTML', 'CSS 3', 'JavaScript', 'Node.js', 'SQLite'],
    github: 'https://github.com/JosePerez0314/BLOGY'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#121212]">
      <div className="max-w-6xl mx-auto w-full">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.title}
              className="bg-[#1E1E1E] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <header className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
                
                {/* Estilos condicionales limpios */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.statusColor === 'orange'
                      ? 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                      : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                  }`}
                >
                  {project.status}
                </span>
              </header>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#121212] text-gray-300 rounded-lg text-sm border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <footer>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer" // Crucial para seguridad al usar target="_blank"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
                  aria-label={`Ver repositorio de ${project.title} en GitHub`}
                >
                  {/* Usando tu icono personalizado */}
                  <img 
                    src={Icons.projects.githubCyan} 
                    alt="GitHub Icon" 
                    className="w-5 h-5 transition-transform group-hover:scale-110" 
                  />
                  <span>Ver en GitHub</span>
                  <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;