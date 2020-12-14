import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../Button/Button';
import InputField from '../../InputField/InputField';
import * as S from './verificationCode.styled';

const VerificationCode = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Gib deinen Verifizierungscode ein</S.WelcomeTitle>
      <S.Undertitle>
        Wir haben dir eine E-Mail an <br /> s.beeken@yahoo.de <br /> geschickt.
        Bitte gib den darin enthaltenen sechsstelligen Verifizierungscode hier
        ein.
      </S.Undertitle>
      <S.ButtonsContainer>
        <InputField
          type="text"
          placeholder="E-Mail Adresse oder Benutzername"
        ></InputField>
        <InputField
          type="password"
          value=""
          placeholder="Passwort"
        ></InputField>
        <S.ButtonWrapper>
          <Link to={'/'}>
            <Button isSmall hasMargin>
              Zurück
            </Button>
          </Link>
          <Link to={'/add-name'}>
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
