import styled from 'styled-components';

export const Button = styled.div`
  min-width: ${({isSmall}) => (isSmall ? '150px' : '300px')};
  max-width: ${({isSmall}) => (isSmall ? '163px' : '343px')};
  margin-right: ${({hasMargin}) => (hasMargin ? '20px' : '0')};
  margin-bottom: ${({hasMarginbuttom}) => (hasMarginbuttom ? '16px' : '0')};
  height: 48px;
  font-family: 'Nunito Sans';
  font-size: 14px;
  text-align: center;
  line-height: 48px;
  border: ${({isBlue}) => (isBlue ? '' : '1px solid #DCE2E5')};
  border-radius: 5px;
  background: ${({isBlue}) => (isBlue ? '#0071BC;' : '#ffffff')};
  cursor: pointer;
  color: ${({isBlue}) => (isBlue ? '#ffffff' : '#000;')};
  text-decoration: none;
  &:hover {
    background: ${({isBlue}) => (isBlue ? '#1881c7;' : '#ffffff')};
    transition: background-color 0.3s;
    border: ${({isBlue}) => (isBlue ? '' : '1px solid #0071BC')};
  }
`;
