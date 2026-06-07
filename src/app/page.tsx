import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Schedule />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
