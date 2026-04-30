import Botao from "./Sytale";
import React from "react";

type Props = {
  text: string;
  mensagem?: string; 
};

export default function Button({ text, mensagem }: Props) {
  const [hover, setHover] = React.useState(false);

  const enviarWhatsApp = () => {
    const numero = "5527995226819";

    const texto =
      mensagem ||
      "Olá, vim pelo site e gostaria de mais informações.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <Botao
      onClick={enviarWhatsApp}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? "/LogoWhastappBranca.png" : "/LogoWhastapp.png"}
        alt="whatsapp"
      />
      {text}
    </Botao>
  );
}