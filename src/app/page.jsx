import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section/style';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
          <div>
            <h3>ABC Virtual</h3>
            <p>"Explore o universo das letras: Alfabetize-se enquanto viaja pelos jogos espaciais!"</p>
          </div>
        </Section>
        <Section>
          <div>
            <h3>Quem somos?</h3>
            <p>"O ABC Virtual é uma solução divertida para quem enfrenta dificuldade em aprender a ler e escrever."</p>
          </div>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
        </Section>
        <Section>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
          <div>
            <h3>Educativo</h3>
            <p>"Todo o conteúdo da plataforma é estudado, analisado e aprovado por profissionais de educação"</p>
          </div>
        </Section>
        <Section>
          <div>
            <h3>Divertido</h3>
            <p>"Desvende os segredos das letras enquanto explora o espaço! Com nossos jogos educativos, aprender a se alfabetizar é fácil e divertido. Diga adeus à monotonia dos livros e embarque em uma jornada interativa rumo ao conhecimento. Descubra como é mais simples aprender brincando!"</p>
          </div>
          <Image width={400} height={400} src="/svg/logo.svg" alt="logo" />
        </Section>
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
