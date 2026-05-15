import React from 'react';

const Footer: React.FC = () => {
  
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        
        <p className="text-gray-400 font-medium">
          Diseñado y desarrollado por{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold tracking-wide">
            Bryam Pérez
          </span>
        </p>

        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;