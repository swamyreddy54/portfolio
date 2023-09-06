import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
  <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Education/>
      <Skills />
      <Services/>
      <Testimonials />
      <Contact />
    </main>
    );
}
