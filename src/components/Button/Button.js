import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.styled';

const Button = ({isBlue, isSmall, hasMargin, hasMarginbuttom, children}) => (
  <S.Button
    hasMargin={hasMargin}
    isBlue={isBlue}
    isSmall={isSmall}
    hasMarginbuttom={hasMarginbuttom}
  >
    {children}
  </S.Button>
);

Button.defaultProps = {
  isBlue: false,
  isSmall: false,
  hasMargin: false,
  hasMarginbuttom: false,
};

Button.propTypes = {
  isBlue: PropTypes.bool,
  isSmall: PropTypes.bool,
  hasMargin: PropTypes.bool,
  hasMarginbuttom: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
