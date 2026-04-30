import { Box, Content, Text, ImgWrapper, Image } from './style';
import Button from '../button/Button';
import { useIsMobile } from './../../hooks/useIsMobile';
export default function Caixa() {
    const isMobile = useIsMobile();
    return (
        <Box>
            <Content>

                <Text>
                    <h1>
                        Pronto para acelerar <span>sua marca?</span>
                    </h1>

                    <p>
                        Fale com a gente e descubra o plano{isMobile && <br />} ideal para o seu
                        negócio {!isMobile && <br />}creser  de{isMobile && <br />} verdade no digital.
                    </p>
                     {isMobile && <Button text="FALAR COM ESPECIALISTA" />}
                </Text>

               {!isMobile && <Button text="FALAR COM ESPECIALISTA" />}
                <div>
                    <ImgWrapper>
                        <Image src="/02.png" alt="celular" />
                    </ImgWrapper>
                </div>
            </Content>
        </Box>
    );
}