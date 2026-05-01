import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: white;
  padding: 50px 30px;

  span {
    color: #f5b439;
  }
`;

export const Carrossel = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1400px;
  margin: 40px 10px;
  padding: 20px 0;
`;

export const Track = styled.div<{ $index: number; $visible: number }>`
  display: flex;
  transition: transform 0.4s ease;

  transform: translateX(
    ${(p) => `-${p.$index * (100 / p.$visible)}%`}
  );
`;

export const Card = styled.div<{ $visible: number }>`
  flex: 0 0 ${(p) => 100 / p.$visible}%;
  padding: 20px;
`;

export const CardInner = styled.div`
  background: #0f0f15;
  border-radius: 12px;
  padding: 20px;
  height: 100%;
  
   display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

export const Button = styled.button`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  z-index: 10;

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #9333ea;
  color: white;
  font-size: 22px;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }

  &:hover {
    background: #9333ea;
  }

  @media (max-width: 768px) {
    
  }
`;

export const Dots = styled.div`
  margin-top: 15px;
`;

export const Dot = styled.span<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  margin: 5px;
  display: inline-block;
  border-radius: 50%;
  background: ${(p) => (p.$active ? "#9333ea" : "#555")};
`;
export const Info = styled.div`
  display: flex;
  align-items: center; /* 🔥 alinha verticalmente */
  gap: 10px; /* espaço entre foto e nome */
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 🔥 deixa redonda */
  object-fit: cover;
`;
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