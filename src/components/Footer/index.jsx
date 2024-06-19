import Image from 'next/image';
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterContainer>
      <content>
        <S.Logo>
          <Image src="/svg/logo.svg" alt="ABC Virtual Logo" width={250} height={100} />
        </S.Logo>
        <S.LinksSection>
          <S.LinksColumn>
            <h3>Sobre nós</h3>
            <p>Nossa História</p>
            <p>Visão e Valores</p>
            <p>Nossa Equipe</p>
          </S.LinksColumn>
          <S.LinksColumn>
            <h3>Sobre nós</h3>
            <p>Nossos Serviços</p>
            <p>Parcerias</p>
            <p>Depoimentos</p>
          </S.LinksColumn>
          <S.LinksColumn>
            <h3>Sobre nós</h3>
            <p>Sustentabilidade</p>
            <p>Carreiras</p>
            <p>Contato</p>
          </S.LinksColumn>
        </S.LinksSection>
        <S.SocialMediaSection>
          <Image src="/img/social-icon/instagram.png" alt="Instagram" width={50} height={50} />
          <Image src="/img/social-icon/facebook.png" alt="Facebook" width={50} height={50} />
          <Image src="/img/social-icon/whatsapp.png" alt="WhatsApp" width={50} height={50} />
          <Image src="/img/social-icon/youtube.png" alt="YouTube" width={50} height={50} />
        </S.SocialMediaSection>
      </content>
      <S.Copyright>
        © 2024 Teck Wave - Todos os Direitos Reservados
      </S.Copyright>
    </S.FooterContainer>
  );
};

export default Footer;
