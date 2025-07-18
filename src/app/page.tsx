import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ThreeCards from "./components/ThreeCard";
import Why from "./components/Why";

export default function Home() {
  return (
    <main>
      <Hero />
      <Biography />
      <Why />
      <ThreeCards />
      <Contact />
    </main>
  );
}
