import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="w-full">
      <ScrollProgress />
      <Nav />
      <WhatsAppButton />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
