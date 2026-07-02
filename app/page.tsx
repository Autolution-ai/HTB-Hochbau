import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { UseCase } from "@/components/UseCase";
import { Audiences } from "@/components/Audiences";
import { References } from "@/components/References";
import { WhyHTB } from "@/components/WhyHTB";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <UseCase />
        <Audiences />
        <References />
        <WhyHTB />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
