import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.styled';

const Button = ({isBlue, isSmall, hasMargin, children}) => (
  <S.Button hasMargin={hasMargin} isBlue={isBlue} isSmall={isSmall}>
    {children}
  </S.Button>
);

Button.defaultProps = {
  isBlue: false,
  isSmall: false,
  hasMargin: false,
};

Button.propTypes = {
  isBlue: PropTypes.bool,
  isSmall: PropTypes.bool,
  hasMargin: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
