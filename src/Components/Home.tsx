import React from 'react';
// Ajusta esta ruta a donde realmente tengas tu Index.js
import { Icons } from '../assets/icons/index'; 

const Home: React.FC = () => {
  
  const scrollToProjects = (): void => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#121212]"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Contenedor de la Foto de Perfil */}
        <div className="mb-8 inline-block">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-orange-500 p-1 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full rounded-full bg-[#1E1E1E] flex items-center justify-center overflow-hidden border-4 border-[#121212]">
              {/* Usamos la imagen dinámica desde nuestro archivo Index */}
              <img 
                src={Icons.profile.perfil} 
                alt="Foto de perfil de Bryam Pérez" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="eager" // Prioriza la carga porque es el primer elemento visual
              />
            </div>
          </div>
        </div>

        {/* Textos Principales */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
          ¡Hola! Soy{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
            Bryam Smith Pérez Hernández
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
          Desarrollador Frontend & Estudiante de Ingeniería en Sistemas
        </h2>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Apasionado por crear experiencias digitales fluidas, escribiendo código limpio con herramientas modernas.
        </p>

        {/* Call to Action */}
        <button
          onClick={scrollToProjects}
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/40 active:translate-y-0"
        >
          Ver mis proyectos
        </button>

      </div>
    </section>
  );
};

export default Home;