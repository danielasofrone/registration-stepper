import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import varificationIcon from '../../assets/icons/varificationIcon.png';
import * as S from './finishPage.styled';

const FinishPage = () => {
  return (
    <S.Wrapper>
      <S.Logo src={varificationIcon} />
      <S.TextContainer>
        <S.WelcomeTitle>Du bist wirklich Profi</S.WelcomeTitle>
        <S.Undertitle hasMargin>
          Mach ein Foto von deinem Meister- oder Gesellenbrief bzw,
          Servicetechniker-Zertifikat oder Ausbildungsvertrag. Visitenkarten
          o.ä. sind leider kein gültiger Nachweis. Die Daten werden nicht
          veröffentlicht und dienen nur der Verifizierung.
        </S.Undertitle>
        <S.Undertitle>
          Du kannst diesen Schritt überspringen. Bis dahin kannst Du nur
          mitlesen, nach 5 Tagen blockt dich das System.
        </S.Undertitle>
      </S.TextContainer>
      <S.ButtonsContainer>
        <S.ButtonWrapper>
          <Button hasMarginbuttom>Bild hochladen</Button>
          <S.BottomButtons>
            <Link to={'/add-address'}>
              <Button isSmall hasMargin>
                Zurück
              </Button>
            </Link>
            <Link to={'/'}>
              <Button isSmall isBlue>
                Ab zu FabuCar
              </Button>
            </Link>
          </S.BottomButtons>
        </S.ButtonWrapper>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default FinishPage;
