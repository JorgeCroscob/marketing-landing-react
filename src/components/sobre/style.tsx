import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 920px) {
        display: flex;
    flex-direction: row-reverse;
    }
    @media (max-width: 768px) {
     display: flex;
    flex-direction: row-reverse;
    }
    `
export const Imgfundo = styled.img`
  width: 630px;
  height: auto;
  object-fit: cover;

  @media (max-width: 920px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`
export const Dourado = styled.span`
    color: #D4AF37;    
    `
export const Roxo = styled.span`    
    color: #4A0D86;
    `
export const Paragrafo = styled.div`
    text-align: left;
    margin: 5px;
    h1{
        line-height: 0.8;
        font-size: 48px;
    }
    h5{
        font-size: 20px;
        margin-bottom: 0;
    }
    width: 600px;
    
   >p {
    
  margin-top: 10px;

  &::after {
    content: "";
    display: block;

    width: 100%;
    height: 1px;

    background: linear-gradient(to right, #19191a, #1f1f1f);

    margin-top: 5px; /* 🔥 distância da linha */
  }
    }
    
  @media (max-width: 768px) {
    width:90vw;
    
     
    
    z-index: 2; /* 🔥 garante que fica acima */
    color: white;
    h1{
        font-size:30px;
    }
    }
    @media (max-width: 920px) {
        width: auto;
        h5{
            font-size: 20px;
        }
        h1{
            font-size: 30px;
        }
    }
        p{
        font-size: 14px;
}

`
export const Caixa = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 18px;
   p{
    font-size: 11px;
    }
     img {
      width: 38px;
      height: 38px;
      object-fit: cover;
    }

    
    `
export const P1 = styled.span`
    fonte-size: 18px;
    margin-left:5px;
    `
export const P2 = styled.span`
    font-size:10px;
    margin-left:5px;
    `    
export const Posisao = styled.div`
    @media (max-width: 768px) {
    position: absolute;
}
    `




    