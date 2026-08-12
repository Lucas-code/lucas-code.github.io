import Hero from "@/components/sections/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}
