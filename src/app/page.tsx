import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { About } from "@/components/sections/about";
import { Departments } from "@/components/sections/departments";
import { Doctors } from "@/components/sections/doctors";
import { Facilities } from "@/components/sections/facilities";
import { PatientJourney } from "@/components/sections/patient-journey";
import { Packages } from "@/components/sections/packages";
import { Awards } from "@/components/sections/awards";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";
import { News } from "@/components/sections/news";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { StickyBookingBar } from "@/components/sticky-booking-bar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <Departments />
        <Facilities />
        <PatientJourney />
        <Doctors />
        <Packages />
        <CaseStudies />
        <Awards />
        <Testimonials />
        <News />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyBookingBar />
    </div>
  );
}
