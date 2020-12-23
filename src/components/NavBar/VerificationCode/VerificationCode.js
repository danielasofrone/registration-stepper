import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../Button/Button';
// import InputField from '../../InputField/InputField';
import * as S from './verificationCode.styled';

const VerificationCode = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Gib deinen Verifizierungscode ein</S.WelcomeTitle>
      <S.Undertitle>
        Wir haben dir eine E-Mail an{' '}
        <S.EmailContainer> s.beeken@yahoo.de </S.EmailContainer> geschickt.
        Bitte gib den darin enthaltenen sechsstelligen Verifizierungscode hier
        ein.
      </S.Undertitle>

      <S.InputWrapper>
        <S.Input type="text" maxLength="1" />
        <S.Input type="text" maxLength="1" />
        <S.Input type="text" maxLength="1" />
        <S.Input type="text" maxLength="1" />
        <S.Input type="text" maxLength="1" />
        <S.Input type="text" maxLength="1" />
      </S.InputWrapper>
      <S.ButtonsContainer>
        <S.ButtonWrapper>
          <Link to={'/add-email'}>
            <Button isSmall hasMargin>
              Zurück
            </Button>
          </Link>
          <Link to={'/add-password'}>
            <Button isSmall isBlue>
              Weiter
            </Button>
          </Link>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default VerificationCode;
