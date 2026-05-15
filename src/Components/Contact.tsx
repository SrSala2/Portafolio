import React from 'react';
import { Icons } from '../assets/icons/index';

// Defini para los enlaces contacto
interface ContactLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

// Centralizacin de los datos
const CONTACT_LINKS: ContactLink[] = [
  {
    platform: 'Email',
    url: 'mailto:bryamperez0710@gmail.com',
    icon: Icons.contact.mailCyan,
    username: 'bryamperez0710@gmail.com'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bryam-p%C3%A9rez-a74828330/',
    icon: Icons.contact.linkedinGray,
    username: 'Bryam Pérez'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/SrSala2',
    icon: Icons.contact.githubGray,
    username: 'SrSala2'
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto w-full">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ¿Trabajamos juntos?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Actualmente estoy abierto a nuevas oportunidades y colaboraciones. 
            Si tienes un proyecto en mente o simplemente quieres saludar, ¡no dudes en contactarme!
          </p>
        </header>

        {/* Grid para centrar tarjetas   */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {CONTACT_LINKS.map(({ platform, url, icon, username }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-[#1E1E1E] rounded-2xl border border-gray-800 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10 text-center"
              aria-label={`Contactar por ${platform}`}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#121212] border border-gray-800 transition-colors group-hover:border-cyan-400/30">
                <img 
                  src={icon} 
                  alt={`${platform} icon`} 
                  className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {platform}
              </h3>
              <p className="text-sm text-gray-400 break-all px-2">
                {username}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;