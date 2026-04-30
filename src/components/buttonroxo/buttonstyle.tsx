import styled from "styled-components";

export const Botaoroxo = styled.button`
    background-color: #000000;
    color:white;
    margin:  0 30px 0 0 ;
    border: 2px solid #7B2CFF;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;   /* alinha verticalmente */
    justify-content: center; /* centraliza tudo */
    gap: 10px;  /* espaço entre o ícone e o texto */
    

    &:hover {
        color: #F5B439;
    }
    @media (max-width: 768px) {
    font-size: 10px;
    }
    `