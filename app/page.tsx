import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { WorkList } from "@/components/sections/work-list";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { Experience } from "@/components/sections/experience";
import { Capabilities } from "@/components/sections/capabilities";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <WorkList />
      <MarqueeSection />
      <Experience />
      <Capabilities />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
