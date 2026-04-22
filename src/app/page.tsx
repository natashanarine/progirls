import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import BlurSection from '@/components/BlurSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <BlurSection><About /></BlurSection>
      <BlurSection><Events /></BlurSection>
    </main>
  );
}
