import { Body, Container, Titulo, Botaoroxo, Dourado, Subtitulo, Container1 } from "./style";
import Button from './../button/Button';

import { Img } from "./style";
import { useIsMobile } from './../../hooks/useIsMobile';

function Inicio() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const isMobile = useIsMobile();
    return (
        <Body>
            <Container>
                <div>
                    <div>
                        <h1>
                            <Titulo>
                                O POSICIONAMENTO<br />
                                <Dourado>PREMIUM</Dourado>  que sua{isMobile && <br />} marca{!isMobile && <br />}
                                <Dourado>  MERECE NO{isMobile && <br />} INSTAGRAM</Dourado>
                            </Titulo>
                        </h1>
                        <Subtitulo>
                            Estratégias de marketing digital{isMobile && <br />} que geram autoridade,engajamento,{!isMobile && <br />}
                            {isMobile && <br />}conexão e resultados reais{!isMobile && <br />} {isMobile && <br />}para o seu negócio.
                        </Subtitulo>

                    </div>
                    <div>
                        <Container1>
                            <div>
                                <Button text="QUERO ACELERAR MINHA MARCA" />
                            </div>
                            <div>
                                <a onClick={() => scrollTo("servicos")}>
                                    <Botaoroxo>
                                        <img src="/seta-para-baixo.png" alt="seta" />
                                        VER SERVIÇOS

                                    </Botaoroxo> </a>

                            </div>
                        </Container1>


                    </div>
                </div>

                <div>
                    {!isMobile && <Img src="/imginicial.png" alt="" />}

                </div>
            </Container>
        </Body>
    )
}

export default Inicio;