import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import * as S from './addEmailPage.styled';

const AddEmailPage = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Willkommen zurück bei FabuCar</S.WelcomeTitle>
      <S.Undertitle>
        Melde dich mit deiner E-Mail Adresse oder deinem Benutzernamen an. Falls
        du dein Passwort nicht mehr weißt, klicke einfach auf “vergessen”.
      </S.Undertitle>
      <S.ButtonWrapper>
        <Link to={'/add-name'}>
          <Button isSmall hasMargin>
            Zurück
          </Button>
        </Link>
        <Link to={'/'}>
          <Button isSmall isBlue>
            Weiter
          </Button>
        </Link>
      </S.ButtonWrapper>
      <S.Undertitle>Du hast bereits einen Account? Anmelden</S.Undertitle>
    </S.Wrapper>
  );
};

export default AddEmailPage;
