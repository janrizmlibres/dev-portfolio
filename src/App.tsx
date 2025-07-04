import { XIcon } from "@phosphor-icons/react";
import { useState } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import BreakpointProvider from "./providers/breakpointProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BreakpointProvider queries={{ sm: "(min-width: 640px)" }}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Socials />
      <About />
      <Projects />
      <Footer />

      <button
        className="fixed top-8 right-4 z-2 sm:right-8 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <XIcon size={32} className={`${!isOpen && "hidden"}`} />
      </button>
    </BreakpointProvider>
  );
}

export default App;
