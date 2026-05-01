import styled from "styled-components";

export const Linha = styled.h1`
  font-size: 20px;
 &::after {
    content: "";
    display: block;

    width: 80px;   /* tamanho da linha */
    height: 3px;   /* espessura */

    background-image: linear-gradient(to right,#4D1086,#A855F7); /* cor */

    margin: 15px auto 0; /* centraliza */
    border-radius: 2px;
   
  }
     @media (max-width: 768px) {
    line-height: 0.9;
}
`
export const H1 = styled.h1`
font-size: 38px;
`

export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;  
width: auto;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    
    align-items: center;
}
`
export const Card1 = styled.div`
display: flex;
flex-direction: column;
width: 300px;
border: 2px solid #0a090a;
border-radius: 10px;
background-color: #09080c;  
padding: 20px;
ul {
    list-style: none;
    padding: 0;
    margin: 20px 5px;
    display: flex;
    flex-direction: column;
    line-height: 0.5;
}  
p{
  text-align: left;
  
}

 div {
    margin: 0px 20px; 
}
    div p {
        font-size: 24px;
        margin: 0 0 10px 0;
        color: white;
    }
h3 {
   color: white;
}
   @media (max-width: 1094px) {
    div p {
    font-size: 20px;
    }
    Buttonroxo {  
    font-size: 20px;
    a:hover {
        font-size: 22px;
        color:red;
    }
    p{
    border: 1px solid red;
  }
    }
   }

   @media (max-width: 768px) {
 flex-direction: column;
  width: 250;
  gap: 15px;
  padding: 30px;
   div p {
        font-size: 15px;
        margin: 0 0 10px 0;
        color: white;
    }


    
`

export const Center = styled.div`
display: flex;
justify-content: center;
@

`
export const CardImg = styled.div<{ img: string }>`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow:
  0 0 10px #9333ea,
  0 0 20px #9333ea,
  0 0 40px #9333ea;

  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
`
export const Body = styled.div`
margin: 5px 70px;
@media (max-width: 920px) {
  margin: 5px 20px;
}
@media (max-width: 768px) {
   margin: 5px 10px;
    }
`
export const Checkmark = styled.img`
 width: 16px;
  height: 16px;
  min-width: 16px; /* impede encolher */
  object-fit: contain;

  background-color: white;
  border-radius: 60%;


`
export const Item = styled.li`
  display: flex;
  align-items: left; 
  gap: auto;
  line-height: 0.9;
  padding: 5px 0; 
  
  p {
    text-align: left;
    font-size: 14px;  
  }
    @media (max-width: 768px) {
    
`
export const Informesevico = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 20px 0;



    @media (max-width: 768px) {
      flex-wrap: wrap;
      
    div {
    width: calc(50% - 7.5px); /* 👈 2 por linha */
    padding: 15px;
    border-radius: 10px;
   
  }
   > div {
      width: calc(90% - 7.5px);
      display: flex;
     img {
      width: 80px;
      height: 80px;
      object-fit: cover;
}
}

  }
`

