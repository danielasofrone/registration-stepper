import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  text-align: center;
  margin: 90px auto;
  @media (min-width: 576px) {
    width: 50%;
  }
`;

export const WelcomeTitle = styled.div`
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin: 153px 0 36px 0;
`;

export const Undertitle = styled.p`
  font-family: 'Nunito Sans';
  font-size: 14px;
  margin-top: 20px;
  line-height: 19px;
  margin-bottom: 36px;
  white-space: normal;
  a {
    text-decoration: none;
    color: #0071bc;
  }
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
