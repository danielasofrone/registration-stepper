import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import * as S from './addPasswordPage.styled';

const AddPasswordPage = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Sichere dein Konto mit einem Passwort</S.WelcomeTitle>
      <S.ButtonsContainer>
        <InputField type="password" placeholder="Passwort" isPasswordField />
        <InputField
          type="password"
          value=""
          placeholder="Passwort wiederholen"
          isPasswordField
        />
        <S.Undertitle>
          Das Passwort muss mindestens 8 Zeichen lang sein und sowohl Zahlen wie
          auch Buchstaben enthalten.
        </S.Undertitle>

        <S.ButtonWrapper>
          <Link to={'/verification-code'}>
            <Button isSmall hasMargin>
              Zurück
            </Button>
          </Link>
          <Link to={'/add-address'}>
            <Button isSmall isBlue>
              Weiter
            </Button>
          </Link>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default AddPasswordPage;
