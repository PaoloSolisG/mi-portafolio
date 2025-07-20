import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills"; // Aquí importas Skills
import Projects from "./pages/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import SectionFade from "./components/SectionFade";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <SectionFade>
        <Home />
      </SectionFade>

      <SectionFade>
        <Skills />
      </SectionFade>

      <SectionFade>
        <Projects />
      </SectionFade>

      <SectionFade>
        <Experience />
      </SectionFade>

      <SectionFade>
        <Testimonials />
      </SectionFade>

      <SectionFade>
        <Contact />
      </SectionFade>

      <Footer />
    </>
  );
}

export default App;
