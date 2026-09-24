import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Departments } from "@/components/sections/departments";
import { Doctors } from "@/components/sections/doctors";
import { Facilities } from "@/components/sections/facilities";
import { Packages } from "@/components/sections/packages";
import { News } from "@/components/sections/news";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { EmergencyFloat } from "@/components/emergency-float";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Departments />
        <Doctors />
        <Facilities />
        <Packages />
        <Testimonials />
        <News />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <EmergencyFloat />
    </div>
  );
}
