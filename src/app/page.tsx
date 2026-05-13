import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Joyeria from "@/components/Joyeria";
import Relojeria from "@/components/Relojeria";
import Servicios from "@/components/Servicios";
import Historia from "@/components/Historia";
import Visita from "@/components/Visita";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Joyeria />
        <Relojeria />
        <Servicios />
        <Historia />
        <Visita />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
