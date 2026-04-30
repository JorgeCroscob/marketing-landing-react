import {
  FooterContainer,
  FooterContent,
  Column,
  Logo,
  Copy,
  Socials
} from "./style";

export default function Footer() {
  const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
  };
  return (
    <FooterContainer id="contato">
      <FooterContent>

        {/* LOGO + DESCRIÇÃO */}
        <Column>
          <Logo>
            <div>
              <img src="/logo.PNG" alt="" />
            </div>

          </Logo>
          <p>
            Marketing digital e social media que<br /> posiciona, conecta e vende.
          </p>

          <Socials>
            <a href="https://www.instagram.com/agenciaacelerar/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a
              href={`https://wa.me/5527995226819?text=${encodeURIComponent(
                "Olá, tenho interesse no plano. Pode me passar mais detalhes?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whastapp.png" alt="WhatsApp" />
            </a>
            <a href="https://www.linkedin.com/company/agenciaacelerar/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
          </Socials>
        </Column>

        {/* NAVEGAÇÃO */}
        <Column>
          <h3>Navegação</h3>
          <a onClick={() => scrollTo("inicio")}>Inicio</a>
          <a onClick={() => scrollTo("servicos")}>Serviços</a>
          <a onClick={() => scrollTo("sobre")}>Sobre</a>
          <a onClick={() => scrollTo("depoimentos")}>Depoimentos</a>
          <a onClick={() => scrollTo("contato")}>Contato</a>
        </Column>

        {/* CONTATO */}
        <Column>
          <h3>Contato</h3>
          <p>📞 (27) 995226819</p>
          <p>📸 @agenciaacelerar</p>
          <p>✉ agenciaacelerarmkt@icloud.com</p>
          <p>📍 VILA VELHA - ES</p>
        </Column>

      </FooterContent>

      <Copy>
        © 2024 Agencia Acelerar. Todos os direitos reservados.
      </Copy>
    </FooterContainer>
  );
}