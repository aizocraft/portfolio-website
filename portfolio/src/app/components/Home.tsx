import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import Professional from "./sections/Professional"
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Professional />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
