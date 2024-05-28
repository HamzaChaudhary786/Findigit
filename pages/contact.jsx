import CTA from '@/components/CTA';
import ContactHero from '@/components/ContactHero';
import ContactUs from '@/components/ContactUs';
import LogoCarousel from '@/components/LogoCarousel';

const page = () => {
  return (
    <>
      <ContactHero />
      <LogoCarousel />
      <ContactUs />
      <CTA />
    </>
  );
};

export default page;
