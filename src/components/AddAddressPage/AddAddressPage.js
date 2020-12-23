import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import * as S from './addAddressPage.styled';

const AddAddressPage = () => {
  return (
    <S.Wrapper>
      <S.WelcomeTitle>Sag uns, wo du arbeitest</S.WelcomeTitle>
      <S.Undertitle>
        Zur Verifizierung benötigen wir den genauen Namen und die Adresse der
        Werkstatt, in der du arbeitest oder die du betreibst.
      </S.Undertitle>
      <S.InputContainer>
        <S.LongInput type="text" placeholder="Werkstattname" />
        <S.MiddleInput type="text" placeholder="Straße" />
        <S.ShortInput type="text" placeholder="Nr." />
        <S.ShortInput type="text" placeholder="PLZ" />
        <S.MiddleInput type="text" placeholder="Stadt" />
      </S.InputContainer>
      <S.ButtonsContainer>
        <S.ButtonWrapper>
          <Link to={'/add-password'}>
            <Button isSmall hasMargin>
              Zurück
            </Button>
          </Link>
          <Link to={'/finish'}>
            <Button isSmall isBlue>
              Weiter
            </Button>
          </Link>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default AddAddressPage;
