import styled from 'styled-components';

export const InputContainer = styled.div`
  /* width: 90%; */
  margin-bottom: 20px;
  height: 48px;
  background: #dce2e5;
  border-radius: 5px;
  font-size: 14px;
  color: #939799;
  border: none;
  /* @media (min-width: 576px) {
    width: 50%;
  } */
`;

export const Input = styled.input`
  width: 300px;
  margin-bottom: 20px;
  height: 48px;
  background: #dce2e5;
  border-radius: 5px;
  font-size: 14px;
  color: #939799;

  border: none;
  height: 47px;
  background: #dce2e5;
  font-family: 'Nunito Sans';
  font-size: 14px;
  color: #939799;
  padding: 0 10px;
  border: none;
`;

export const IconContainer = styled.span`
  float: right;
  margin-right: 18px;
  margin-top: -50px;
  position: relative;
  z-index: 2;
  display: ${({isPasswordField}) => (isPasswordField ? 'block' : 'none')};
`;

export const Icon = styled.img``;
