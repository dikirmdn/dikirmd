import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Music from '@/components/Music';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Music />
        <Contact />
      </main>
    </>
  );
}
