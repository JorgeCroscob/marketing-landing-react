import { Botaoroxo } from "./buttonstyle";

type Props = {
  text: string;
  plano: string; //  obrigatório (nome do plano)
};

function ButtonRoxo({ text, plano }: Props) {

  const enviarWhatsApp = () => {
    const numero = "5527995226819"; //  seu número

    const mensagem = `Olá, tenho interesse no ${plano}. Pode me passar mais detalhes?`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <Botaoroxo onClick={enviarWhatsApp}>
      {text}
      <img src="/seta-para-baixo.png" alt="seta" />
    </Botaoroxo>
  );
}

export default ButtonRoxo;