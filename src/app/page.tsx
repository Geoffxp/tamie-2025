import Biography from "./components/Biography";
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
    </main>
  );
}
