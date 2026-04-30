import style from "styled-components";

export const Body = style.div`
margin: 30px 0;
@media (max-width: 768px) {
  background: url('/fundoMobile.png') no-repeat center;
  background-size: cover;
  background-position:  top;
  margin: 0;
  padding: 20px;
  height: 100vh;
  z-index: -1;
}
`
export const Container = style.div`
display: flex;
justify-content: space-between;
position: relative;
overflow: hidden;
height: 525px;

&::before {
 content: "";
  position: absolute;
  inset: 0;
  background: url('/avaliacao.png') no-repeat left bottom;
  background-size: 280px;
  pointer-events: none;
  
  
}
  @media (max-width: 768px) {
  flex-direction: column;
  height: auto;
  text-align: center;
  height: 600px;
  background: none;
  
Button {
  justify-content: left; 
  margin: 0 ;
  padding: 10px;
}
  h1 {
    margin-bottom: 10px;
  }
  &::before {
 background: none;
} 
}
`
export const Container1 = style.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
  flex-direction: column;
  align-items: left;
}
`
export const Titulo = style.div`
font-size: 58px;
line-height: 1.1;
max-width: 700px;
text-align: left;

@media (max-width: 768px) {
    font-size: 24px;
   margin-bottom: 0px;
}
`
export const Dourado = style.span`
color:#F5B439
`
export const Subtitulo = style.div`
font-size: 18px;
text-align: left;
color:white;
margin-bottom: 30px;
@media (max-width: 768px) {
font-size: 12px;
margin-bottom: 10px;
line-height: 1;
}
`
export const Img = style.img`
background: url('./../../public/imginicial.png') no-repeat;
background-size: cover;
width: 630px;
`
export const Botaoroxo = style.button`
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