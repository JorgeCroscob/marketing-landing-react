import styled from "styled-components";

export const FooterContainer = styled.footer`
  
  color: ;
  padding: 40px 20px 20px;
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;  ;

  h3 {
    color: white;
    margin: 1px;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #aaa;
    transition: 0.3s;
    font-size: 14px;
    line-height: 1;
  }

  a:hover {
    color: #f5b439;
  }

  p {
    margin: 0;
    font-size: 14px;
    text-align: left;
    line-height: 1;
  }
`;

export const Logo = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
  font-size:14px;
  margin: 0 0 0 -22px;
  }
  color: white;
  font-size: 18px;
 

`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  span {
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Copy = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
  color: #666;
`;