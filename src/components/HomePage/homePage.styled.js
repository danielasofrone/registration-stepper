import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100wh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 125px;
  height: 139px;
  margin-top: 30%;
  text-align: center;
  img {
    vertical-align: middle;
  }
`;

export const WelcomeTitle = styled.div`
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 96px;
`;

export const Undertitle = styled.p`
  font-family: 'Nunito Sans';
  font-size: 14px;
  line-height: 14px;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  margin: 90px 10px 0 10px;
  a {
    text-decoration: none;
  }
`;
