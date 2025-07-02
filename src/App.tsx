import { XIcon } from "@phosphor-icons/react";
import { useState } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Socials />
      <About />
      <Projects />
      <Footer />

      <button
        className="fixed top-8 right-12 z-2 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <XIcon size={32} className={`${!isOpen && "hidden"}`} />
      </button>
    </>
  );
}

export default App;
