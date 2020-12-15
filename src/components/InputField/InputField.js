import React, {useState} from 'react';
import PropTypes from 'prop-types';
import visible_password from '../../assets/icons/visible_password.svg';
import * as S from './inputField.styled';

const InputField = ({type, placeholder, isPasswordField}) => {
  const [value, setValue] = useState('');

  const handleOnChange = evt => {
    evt.preventDefault();
    setValue(evt.target.value);
  };

  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      ></S.Input>
      <S.IconContainer isPasswordField={isPasswordField}>
        <S.Icon src={visible_password} />
      </S.IconContainer>
    </>
  );
};

InputField.defaultProps = {
  placeholder: '',
  isPasswordField: false,
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  isPasswordField: PropTypes.bool,
};

export default InputField;
