import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import * as S from './addNamePage.styled';

const AddNamePage = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Gib deinen Namen ein</S.WelcomeTitle>
      <S.Undertitle>
        Wichtig ist, dass du deinen richtigen Namen eingibst, da wir nur so
        deine Qualifikation zuordnen können.
      </S.Undertitle>
      <S.Undertitle hasMargin>
        <strong>Hinweis:</strong> Für eine vollständige Registrierung muss ein
        Nachweis als Berufs-KFZler erbracht werden.
      </S.Undertitle>
      <S.ButtonsContainer>
        <InputField type="text" placeholder="Vor- und Nachname" />
        <S.ButtonWrapper>
          <Link to={'/welcome'}>
            <Button isSmall hasMargin>
              Zurück
            </Button>
          </Link>
          <Link to={'/add-email'}>
            <Button isSmall isBlue>
              Weiter
            </Button>
          </Link>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default AddNamePage;
