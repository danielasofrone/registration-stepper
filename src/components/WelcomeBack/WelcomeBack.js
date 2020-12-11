import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import * as S from './welcomeBack.styled';

const WelcomeBack = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Willkommen zurück bei FabuCar</S.WelcomeTitle>
      <S.Undertitle>
        Melde dich mit deiner E-Mail Adresse oder deinem Benutzernamen an. Falls
        du dein Passwort nicht mehr weißt, klicke einfach auf “vergessen”.
      </S.Undertitle>
      <S.ButtonsContainer>
        <form>
          <S.InputFieldWrapper>
            <InputField
              type="text"
              placeholder="E-Mail Adresse oder Benutzername"
            ></InputField>
          </S.InputFieldWrapper>
          <S.InputFieldWrapper>
            <InputField
              type="password"
              value=""
              placeholder="Passwort"
            ></InputField>
          </S.InputFieldWrapper>
        </form>
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

export default WelcomeBack;
