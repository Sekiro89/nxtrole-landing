import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 to-white text-gray-900 scroll-smooth">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features" className="py-16">
          <Features />
        </section>
        <section id="about" className="py-16 bg-blue-50">
          <About />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
