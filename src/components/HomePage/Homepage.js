import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../assets/icons/image.png';
import Button from '../Button/Button';
import * as S from './homePage.styled';

const HomePage = () => {
  return (
    <S.Wrapper>
      <S.Logo src={image} />
      <S.WelcomeTitle>Herzlich Willkommen</S.WelcomeTitle>
      <S.Undertitle>Das Portal für KFZ Profis</S.Undertitle>
      <S.ButtonWrapper>
        <Link to={'/welcome'}>
          <Button isBlue>Jetzt registrieren</Button>
        </Link>
      </S.ButtonWrapper>
      <S.Undertitle>Du hast bereits einen Account? Anmelden</S.Undertitle>
    </S.Wrapper>
  );
};

export default HomePage;
