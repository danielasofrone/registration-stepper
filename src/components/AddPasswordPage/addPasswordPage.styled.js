import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: 90px auto;
`;

export const WelcomeTitle = styled.div`
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin: 153px 20px 36px 20px;
`;

export const Undertitle = styled.p`
  font-family: 'Nunito Sans';
  font-size: 14px;
  margin-top: 20px;
  line-height: 19px;
  margin-top: 36px;
  margin: 0 25px 48px 25px;
  white-space: normal;
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
