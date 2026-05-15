import About from "../Components/About";
import Experience from "../Components/Experience"
import Home from "../Components/Home";
import NaviBar from "../Components/NaviBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


export default function Index() {
  return (
    <>
    <NaviBar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Experience />
    </>
  )
}
