import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100wh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  line-height: 19px;
  margin-top: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin: 90px 10px 0 10px;
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
  }
`;

export const InputFieldWrapper = styled.div`
  margin-top: 36px;
`;
