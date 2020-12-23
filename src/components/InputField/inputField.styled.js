import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 300px;
  margin-bottom: 20px;
  height: 48px;
  background: #dce2e5;
  border-radius: 5px;
  font-size: 14px;
  color: #939799;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  border-radius: 5px;
  width: 270px;
  height: 48px;
  background: #dce2e5;
  color: #939799;
  border: none;
  background: #dce2e5;
  font-family: 'Nunito Sans';
  font-size: 14px;
  padding: 0 0 0 10px;
  &:focus {
    outline: none;
  }
`;

export const IconContainer = styled.span`
  float: right;
  margin: 16px 10px 0 0;
  display: ${({isPasswordField}) => (isPasswordField ? 'block' : 'none')};
`;

export const Icon = styled.img``;
