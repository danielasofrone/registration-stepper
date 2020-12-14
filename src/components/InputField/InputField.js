import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as S from './inputField.styled';

const InputField = ({type, placeholder}) => {
  const [username, setUsername] = useState('');

  const handleOnChange = evt => {
    evt.preventDefault();
    setUsername(evt.target.value);
  };

  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={username}
        onChange={handleOnChange}
      />
    </>
  );
};

InputField.defaultProps = {
  placeholder: '',
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default InputField;
