import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto">
        {/* Título con gradiente dinámico */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sobre mí
          </span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 items-center bg-[#1E1E1E] rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
          {/* Elemento decorativo sutil (Línea de acento) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-orange-500 to-red-500 opacity-50" />

          <div className="md:col-span-5">
            <article className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Soy un apasionado por la tecnología enfocado en crear experiencias digitales 
                <span className="text-cyan-400 font-medium"> fluidas y funcionales</span>. 
                Mi objetivo es escribir código limpio y utilizar herramientas modernas para agilizar el desarrollo.
              </p>
              
              <p>
                Actualmente curso mi <span className="text-orange-400 font-medium italic">Proyecto de Grado</span> en 
                <span className="text-white font-semibold"> Ingeniería en Sistemas en UTESA</span>. 
                Me considero un eterno aprendiz; si hay una tecnología nueva que pueda mejorar mi flujo de trabajo, 
                siempre estaré dispuesto a probarla y dominarla.
              </p>

              {/* Pequeño badge de estado actual */}
              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
                  Fullstack Trainee
                </span>
                <span className="px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm">
                  Hardware enthusiast
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;