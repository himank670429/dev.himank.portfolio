import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Hero from "./Sections/Hero";
import Experience from './Sections/Experience';
import Contact from "./Sections/Contact";

export function Landing() {
  return (
    <div className="overflow-x-hidden font-sans antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
