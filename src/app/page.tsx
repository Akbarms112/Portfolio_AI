import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import InitialLoader from "@/components/ui/InitialLoader";
import ScrollObserver from "@/components/ui/ScrollObserver";
import TiltEffect from "@/components/ui/TiltEffect";

export default function Home() {
  return (
    <>
      <InitialLoader />
      <ScrollObserver />
      <TiltEffect />
      <GrainOverlay />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
