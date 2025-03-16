import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Service from "./components/service";
import SkillsProgress from "./components/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <CallToAction />
      <Pricing />
      <SkillsProgress />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
