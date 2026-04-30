import { Container, Imgfundo, Dourado, P1, P2, Roxo, Paragrafo, Caixa } from './style.tsx';
import { useIsMobile } from './../../hooks/useIsMobile';
export default function Sobre() {
    const isMobile = useIsMobile();
    return (
        <Container id="sobre">
            
                {!isMobile && <Imgfundo src="/imgsegundaria.png" alt="Imagem de fundo" />}
                {isMobile && <Imgfundo src="/imgsegundariamobile.png" alt="Imagem de fundo" />}

            <Paragrafo>
                <h5><Roxo>SOBRE A AGÊNCIA</Roxo></h5>
                <h1>Mais que posts <br />
                    Construímos  {isMobile && <br />} <Dourado>marcas fortes.</Dourado> </h1>
               {!isMobile && <div>
                <p>Na Agencia Acelerar, unimos estratégia, criatividade e análise<br />
                    para transformar perfis em verdadeiros ativos de crescimento.<br />
                    Nosso compromissi é com resultado, clareza e paeceria.</p>
                <Caixa>
                    <Caixa>
                        <img src="/avatar.png" alt="" />
                        <div>
                            <P1><Dourado>+50</Dourado> </P1>
                            <br />
                            <P2>Marcas aceleradas</P2>
                        </div>

                    </Caixa>
                    <Caixa>
                        <img src="/grafico2.png" alt="" />
                        <div>
                            <P1><Dourado>+237%</Dourado> </P1>
                            <br />
                            <P2>Crecimento médio</P2>
                        </div>

                    </Caixa>
                    <Caixa>
                        <img src="/escudo2.png" alt="" />
                        <div>
                            <P1><Dourado>100%</Dourado> </P1>
                            <br />
                            <P2>Foco em resultado</P2>
                        </div>

                    </Caixa>
                    

                </Caixa>
                </div>}
            </Paragrafo>

        </Container>
    );
}