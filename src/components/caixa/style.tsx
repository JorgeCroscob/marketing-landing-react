import styled from "styled-components";

export const Box = styled.div`
 margin: 40px auto;
  max-width: 900px;
  padding: 1px;
  border-radius: 16px;

  background: linear-gradient(90deg, #4d1086, #a855f7);
`;

export const Content = styled.div`
  position: relative;
  overflow: visible;
  background: #130718;
  border-radius: 16px;

  padding: 20px 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;  

 box-shadow: 0 0 30px rgba(168, 85, 247, 0.2);

  Button{
    font-size: 14px;
  }

  @media (max-width: 768px) {
    align-items: center;
  justify-content: space-between;  
    padding: 20px 10px;
  }
`;

export const Text = styled.div`
  max-width: 400px;
  text-align: left;
  h1 {
    font-size: 30px;
    color: white;
    margin: 0;
    padding: 0;
  }

  span {
    color: #f5b439;
  }

  p {
    color: #aaa;
    margin-top: 10px;
    font-size: 13px;
    margin: 0;
    line-height: 1.3;
  }
  @media (max-width: 768px) {
  h1 {    
  font-size: 20px;
  }
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  right: -10px;
  bottom: -35px;
 

  @media (max-width: 768px) {
    position: static;
    margin-top: 20px;
    padding-left: 5px;
  }
`;

export const Image = styled.img`
  width: 125px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;