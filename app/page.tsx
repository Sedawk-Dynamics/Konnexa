import { Hero } from "./components/sections/hero";
import { Services } from "./components/sections/services";
import { Stats } from "./components/sections/stats";
import { About } from "./components/sections/about";
import { Team } from "./components/sections/team";
import { Testimonials } from "./components/sections/testimonials";
import { CTA } from "./components/sections/cta";
import { Contact } from "./components/sections/contact";

export default function Home() {
  return (
    <>

    
      <Hero />
      <Services />
      <Stats />
      <About />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
