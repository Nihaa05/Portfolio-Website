import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DataEngineerMindset from '@/components/DataEngineerMindset';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DataEngineerMindset />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
