import styled from 'styled-components';

export const Header = styled.header`
  height: 10vh;
  background-color: rgb(32, 32, 36);

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const HeaderBrand = styled.img`
  height: 50px;
  width: 50px;

  @media (max-width: 370px) {
    height: 40px;
    width: 40px;
  }
`;
