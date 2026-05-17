import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';// lucide-react

// fuera de componente, no se re-cree en cada renderizado
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
];

const NaviBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Función de flecha para manejar el scroll suave
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }// Cierra el menú móvil automáticamente
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-gray-800">
      {/* <nav> semántico con role  */}
      <nav 
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* NOmbre */}
        <div 
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Bryam Pérez
        </div>

        {/* Navegacion */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button 
                onClick={() => scrollToSection(id)} 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                aria-label={`Ir a la sección ${label}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón de Menú para versiones moviles */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          aria-expanded={isMenuOpen}
          aria-label="Alternar menú de navegación"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Navegación para moviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-gray-800">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button 
                  onClick={() => scrollToSection(id)} 
                  className="w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NaviBar;