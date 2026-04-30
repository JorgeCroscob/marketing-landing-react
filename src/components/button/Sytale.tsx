import styled from 'styled-components'

const Botao = styled.button`
  margin: 0;
  padding: 10px;
  display: flex;
  align-items: center;   /* alinha verticalmente */
  justify-content: center; /* centraliza tudo */
  gap: 10px;  /* espaço entre o ícone e o texto */
  background-color: #F5B439; /* cor de fundo do botão */
  border: none;
  color: black; /* cor do texto */
  border-radius: 10px; /* bordas arredondadas */
  @media (max-width: 768px) {
    font-size: 10px;
     gap: 5px;
      padding: 8px;
      margin: 5px 0; 

}
  
}
  &:hover {
    color: white;
  }
     
    
  `
export default Botao  