import Header from '@/components/Header/index';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section text="ABC VIRTUAL" img="/svg/logo.svg" imgLeft />
        <Section text="ABC VIRTUAL" img="/svg/logo.svg" imgLeft />
      </main>
      <Footer />
    </>
  );
}
