import { NaviBar, Home, About, Skills, Projects, Experience, Contact, Footer } from '../Components';

const Portafolio: React.FC = () => {
  return (
    <div className=" min-h-screen text-slate-100 antialiased">
      <header>
        <NaviBar />
      </header>
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Portafolio;