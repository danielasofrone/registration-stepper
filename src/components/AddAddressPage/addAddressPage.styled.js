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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ShortInput = styled.input`
  width: 86px;
  height: 48px;
  margin: 0 3px 5px 3px;
  background: #dce2e5;
  border-radius: 5px;
  font-family: 'Nunito Sans';
  font-size: 14px;
  line-height: 14px;
  color: #939799;
  font-weight: 700;
  border: none;
  text-align: center;
`;

export const MiddleInput = styled.input`
  width: 248px;
  height: 48px;
  margin: 0 3px 5px 3px;
  background: #dce2e5;
  border-radius: 5px;
  font-family: 'Nunito Sans';
  font-size: 14px;
  line-height: 14px;
  color: #939799;
  font-weight: 700;
  border: none;
  text-align: center;
`;

export const LongInput = styled.input`
  width: 343px;
  height: 48px;
  margin: 0 3px 5px 3px;
  background: #dce2e5;
  border-radius: 5px;
  font-family: 'Nunito Sans';
  font-size: 14px;
  line-height: 14px;
  color: #939799;
  font-weight: 700;
  border: none;
  text-align: center;
`;
