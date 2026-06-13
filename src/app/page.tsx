import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Features from '@/components/Features/Features';
import Pricing from '@/components/Pricing/Pricing';
import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
