import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: 183px auto;
`;

export const WelcomeTitle = styled.div`
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin: 153px 20px 0 20px;
`;

export const Undertitle = styled.p`
  font-family: 'Nunito Sans';
  font-size: 14px;
  line-height: 19px;
  margin: 20px 25px 0 25px;
  strong {
    font-weight: 800;
  }
  margin-bottom: ${({hasMargin}) => (hasMargin ? '36px' : '0')};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  a {
    text-decoration: none;
  }
  @media (min-width: 576px) {
    position: initial;
    margin-top: 70px;
  }
`;
