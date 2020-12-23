import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: 85px auto;
`;

export const WelcomeTitle = styled.div`
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin: 96px 20px 36px 20px;
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

export const EmailContainer = styled.div`
  color: #0071bc;
  margin: 15px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 25px;
`;

export const Input = styled.input`
  width: 35px;
  height: 40px;
  margin: 0 3px 0 3px;
  background: #dce2e5;
  border-radius: 5px;
  font-family: 'Nunito Sans';
  font-size: 24px;
  color: #000;
  font-weight: 700;
  border: none;
  text-align: center;
`;
