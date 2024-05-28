import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Services />
      <CTA />
    </>
  );
}
