import Header from '@/components/Header/index';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section text={'ABC Virtual'} img={"/svg/logo.svg"} left="img"></Section>
        <Section text={'ABC Virtual'} img={"/svg/logo.svg"} left="text"></Section>
        <section>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
          <div>
            <h3>ABC Virtual</h3>
            <p>&quot;Explore o universo das letras: Alfabetize-se enquanto viaja pelos jogos espaciais!&quot;</p>
          </div>
        </section>
        <section>
          <div>
            <h3>Quem somos?</h3>
            <p>&quot;O ABC Virtual é uma solução divertida para quem enfrenta dificuldade em aprender a ler e escrever.&quot;</p>
          </div>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
        </section>
        <section>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
          <div>
            <h3>Educativo</h3>
            <p>&quot;Todo o conteúdo da plataforma é estudado, analisado e aprovado por profissionais de educação&quot;</p>
          </div>
        </section>
        <section>
          <div>
            <h3>Divertido</h3>
            <p>&quot;Desvende os segredos das letras enquanto explora o espaço! Com nossos jogos educativos, aprender a se alfabetizar é fácil e divertido. Diga adeus à monotonia dos livros e embarque em uma jornada interativa rumo ao conhecimento. Descubra como é mais simples aprender brincando!&quot;</p>
          </div>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
        </section>
        <section>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
          <div>
            <h3>Planos de Assinatura</h3>
            {/* 3 cards para apresentação das assinaturas */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
