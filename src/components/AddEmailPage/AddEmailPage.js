import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import * as S from './addEmailPage.styled';

const AddEmailPage = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Gib deine E-Mail Adresse ein</S.WelcomeTitle>
      <InputField type="text" value="" placeholder="E-mail Adresse" />
      <S.Undertitle>
        Mit dem Fortfahren der Registrierung bestätige ich die{' '}
        <a
          href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"
          target="blank"
        >
          Hinweise zum Datenschutz{' '}
        </a>
        sowie die geltenden{' '}
        <a
          href="https://de.wikipedia.org/wiki/Allgemeine_Gesch%C3%A4ftsbedingungen"
          target="blank"
        >
          Nutzungsbedingungen
        </a>{' '}
        gelesen und akzeptiert zu haben.
      </S.Undertitle>
      <S.ButtonsContainer>
        <S.ButtonWrapper>
          <Link to={'/add-name'}>
            <Button isSmall hasMargin>
              Zurück
            </Button>
          </Link>
          <Link to={'/verification-code'}>
            <Button isSmall isBlue>
              Weiter
            </Button>
          </Link>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default AddEmailPage;
