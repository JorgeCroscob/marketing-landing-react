import {
    Container,
    Logo,
    Menu,
    MenuBtn,
    CloseBtn,
    List,
    LinkItem,
    Overlay
} from './style';

import Button from './../button/Button';
import React from 'react';
import { useIsMobile } from './../../hooks/useIsMobile';

function NavBar() {
    const [open, setOpen] = React.useState(false);
    const isMobile = useIsMobile();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <section id="inicio">
            <Container>
                
                <Logo src="/logo.PNG" />

                <MenuBtn onClick={() => setOpen(!open)}>
                    <img src="/hamburger.png" alt="menu" />
                </MenuBtn>

                <Menu open={open} isMobile={isMobile}>
                    
                    <CloseBtn onClick={() => setOpen(false)}>
                        ✕
                    </CloseBtn>

                    <List>
                        <li><LinkItem onClick={() => scrollTo("inicio")}>Inicio</LinkItem></li>
                        <li><LinkItem onClick={() => scrollTo("servicos")}>Serviços</LinkItem></li>
                        <li><LinkItem onClick={() => scrollTo("sobre")}>Sobre</LinkItem></li>
                        <li><LinkItem onClick={() => scrollTo("depoimentos")}>Depoimentos</LinkItem></li>
                        <li><LinkItem onClick={() => scrollTo("contato")}>Contato</LinkItem></li>
                    </List>

                    {isMobile && <Button text="falar com especialista" />}
                </Menu>

                {!isMobile && <Button text="falar com especialista" />}

            </Container>

            {open && <Overlay onClick={() => setOpen(false)} />}
        </section>
    );
}

export default NavBar;