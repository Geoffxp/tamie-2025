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

export const metadata = {
  title: "Tammy L. Boxx Deady - Black Diamond Mayor 2025",
  description:
    "Learn more about Tammy's vision, biography, and how to get involved in the 2025 Black Diamond Mayor election.",
  openGraph: {
    title: "Tammy L. Boxx Deady - Black Diamond Mayor 2025",
    description:
      "Join Tammy's campaign for a better future. Discover her story, priorities, and ways to connect.",
    url: "https://tamieformayor.com/",
    type: "website",
  },
};
