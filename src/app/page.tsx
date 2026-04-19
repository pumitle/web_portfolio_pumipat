import Image from "next/image";
import Hero from "../presentation/components/Hero";
import Navbar from "../presentation/components/Navbar";
import About from "../presentation/components/About";
import Skills from "../presentation/components/Skills";
import Experiences from "../presentation/components/Experiences";
import Educations from "../presentation/components/Educations";
import Projects from "../presentation/components/Projects";
import Contact from "../presentation/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Educations />
      <Projects/>
      <Contact />
    </main>
  );
}
