import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: 90px auto;
`;

export const Logo = styled.img`
  width: 140px;
  height: 171px;
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
  margin: 36px 20px 0 20px;
`;

export const TextContainer = styled.div`
  margin: 0 25px;
`;

export const Undertitle = styled.p`
  font-family: 'Nunito Sans';
  font-size: 14px;
  margin-top: 20px;
  line-height: 19px;
  margin-bottom: ${({hasMargin}) => (hasMargin ? ' 59px;' : '0')};

  white-space: normal;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  margin-top: 16px;
  float: left;
  bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
  @media (min-width: 576px) {
    position: initial;
    margin-top: 70px;
  }
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
