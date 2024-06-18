import Header from '@/components/Header/index';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Card from '@/components/Card/Mensalidade';
import './style.css'

export default function Home() {
  const texts = [
    {
      title: 'ABC Virtual',
      img: '/img/foguete2.png',
      text: 'Explore o universo das letras: Alfabetize-se enquanto viaja pelos jogos espaciais!',
    },
    {
      title: 'Quem somos?',
      img: '/img/celular.png',
      text: 'O ABC Virtual é uma solução divertida para quem enfrenta dificuldade em aprender a ler e escrever.',
    },
    {
      title: 'Educativo',
      img: '/svg/astronauta-lousa.svg',
      text: 'Todo o conteúdo da plataforma é estudado, analisado e aprovado por profissionais de educação.',
    },
    {
      title: 'Divertido',
      img: '/svg/astronauta-planeta.svg',
      text: 'Desvende os segredos das letras enquanto explora o espaço! Com nossos jogos educativos, aprender é fácil e divertido.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {texts.map((e, index) => <Section key={index} title={e.title} text={e.text} img={e.img} imgLeft={index % 2 == 1}/>)}
        <section>
          <h1>mensalidades</h1>
          <Card/>
        </section>
      </main>
      <Footer />
    </>
  );
}
