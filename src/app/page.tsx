
import {Contact} from "@/components/Contact";
import Hero from "@/components/Hero";
import { KeyMetrics } from "@/components/KeyMetrics";
import LogoAnimation from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import ReactLenis from "lenis/react";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <ReactLenis root>
    <Hero />
    <Stack />
    <LogoAnimation />
    <Portfolio/>
    <KeyMetrics/>
    <Services />
    <Contact />
    </ReactLenis>
  );
}
