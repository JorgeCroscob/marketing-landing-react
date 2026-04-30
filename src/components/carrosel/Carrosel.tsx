import { useState, useEffect } from "react";
import {
    Container,
    Carrossel,
    Track,
    Card,
    CardInner,
    Button,
    Dots,
    Dot,
    Info,
    Avatar
} from "./style";

const data = [
    { text: "A Agência transformou nosso perfil.", name: "Juliana" },
    { text: "Estratégia clara e resultados reais.", name: "Lucas" },
    { text: "Melhor investimento que fizemos.", name: "Carla" },
    { text: "Crescimento absurdo em pouco tempo.", name: "Rafael" },
    { text: "Equipe muito profissional.", name: "Marina" },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(1);

    // detecta tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            setVisible(window.innerWidth >= 769 ? 3 : 1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = data.length - visible;

    const next = () => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <Container id="depoimentos">
            <h2>
                O que nossos <span>clientes</span> dizem
            </h2>

            <Carrossel>
                <Button onClick={prev}>‹</Button>

                <Track $index={index} $visible={visible}>
                    {data.map((item, i) => (
                        <Card key={i} $visible={visible}>
                            <CardInner>
                                <img src="/citar.png" alt="" />
                                <p>"{item.text}"</p>

                                <Info>
                                    <Avatar src="/cliente1.jpg" />
                                    <strong>{item.name}</strong>
                                </Info>
                            </CardInner>
                        </Card>
                    ))}
                </Track>

                <Button onClick={next}>›</Button>
            </Carrossel>

            <Dots>
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <Dot key={i} $active={i === index} />
                ))}
            </Dots>
        </Container>
    );
}