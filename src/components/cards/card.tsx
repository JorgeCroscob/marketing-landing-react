import { Dourado } from "../inicio/style"
import Buttonroxo from './../buttonroxo/buttonroxo';
import {
    Linha, H1, CardContainer, CardImg, Body, Card1, Center, Checkmark, Item, Informesevico
} from "./cardestilo";
function Card() {
    return (
        <Body id="servicos">
            <Linha> <H1>Nossos <Dourado>Serviços</Dourado> </H1></Linha>
            <CardContainer>
                {/* PLANO GROWTH - O primeiro da imagem */}
                <Card1>
                    <Center>
                        <CardImg img="/mao.jpeg" />
                    </Center>

                    <h3> ⭐ Plano Growth —<br /> Gestão de Redes Sociais</h3>

                    <p>
                        Gestão estratégica completa para 
                        marcas que querem crescer com 
                        consistência e autoridade.
                    </p>
                    <ul>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Estratégia personalizada</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Planejamento de conteúdo</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Tráfego pago</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Gestão e publicação</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Análise de resultados</p>
                        </Item>
                    </ul>
                    <div>
                        <p><Dourado>R$ 600,00</Dourado>/mês</p>
                        <Buttonroxo text="QUERO ESSE PLANO" 
                        plano="Plano Growth — Gestão de Redes Sociais. Gostaria de saber mais detalhes sobre a estratégia, entregas e como esse plano pode aumentar meu engajamento e resultados." />
                    </div>

                </Card1>

                {/* PLANO START - O do meio na imagem */}
                <Card1>
                    <Center>
                        <CardImg img="/play.jpeg" />
                    </Center>
                    <h3> 🚀 Plano Start —<br /> Gestão de Redes Sociais</h3>

                    <p>
                        Plano ideal para pequenos 
                        negócios que estão começando 
                        a se posicionar no digital.
                    </p>
                    <ul>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Planejamento básico</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Criação de conteúdo</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Publicações semanais</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Suporte e orientação</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Relatórios mensais</p>
                        </Item>
                    </ul>
                    <div>
                        <p><Dourado>R$ 300,00</Dourado>/mês</p>
                        <Buttonroxo text="QUERO ESSE PLANO" 
                        plano="Plano Start — Gestão de Redes Sociais. Quero entender melhor como funciona, valores e como vocês podem ajudar no crescimento do meu perfil." />
                    </div>
                </Card1>

                {/* PLANO PRO - O da direita na imagem */}
                <Card1>
                    <Center>
                        <CardImg img="/coroa.jpeg" />
                    </Center>
                    <h3> 👑 Plano Pro —<br /> Estratégia Digital Completa</h3>

                    <p>
                        Estratégia digital avançada com 
                        foco em resultados, tráfego e 
                        conversão.
                    </p>
                    <ul>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Estratégia completa 360°</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Gestão de redes sociais</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Tráfego pago e funil</p>
                        </Item>
                        <Item><Checkmark src="/vmark.png" alt="ok" />
                            <p>Relatórios e reuniões</p>
                        </Item>
                    </ul>
                    <div>
                        <p><Dourado>R$ 1.000,00</Dourado>/mês</p>
                        <Buttonroxo text="QUERO ESSE PLANO" 
                        plano="Plano Pro — Estratégia Digital Completa. Quero entender como funciona o planejamento completo, posicionamento e como vocês podem escalar meu negócio." />
                    </div>
                </Card1>
            </CardContainer>
            <Informesevico>
                <div>
                    <Center>
                        <img src="/flecha.png" />
                    </Center>
                    <p>
                        <Dourado>Estratégias Personalizadas</Dourado> <br />
                        Planos feitos sob medida <br />
                        para o seu objetivo.
                    </p>
                </div>
                <div>
                    <Center>
                        <img src="/grafico.png" />
                    </Center>
                    <p>
                        <Dourado>Resultados Reais</Dourado> <br />
                        Foco em cresimento, <br />
                        aotoridade e conversão.
                    </p>
                </div>

                <div>
                    <Center>
                        <img src="/usuarios.png" />
                    </Center>
                    <p>
                        <Dourado>Acompanhamento Próximo</Dourado> <br />
                        Suporte constante e <br />
                        relatorios completos.
                    </p>
                </div>

                <div>
                    <Center>
                        <img src="/escudo.png" />
                    </Center>

                    <p>
                        <Dourado>Posicionamento Primium</Dourado> <br />
                        Sua  marca vista, lembrada<br />
                        e escolhida.
                    </p>
                </div>



            </Informesevico>

        </Body>
    )
}

export default Card;