import styled from 'styled-components';
import SearchInput from './SearchInput';
import IconFavorite from '../assets/icons/IconFavorite.svg?react';
import IconRoute from '../assets/icons/IconRoute.svg?react';
import { useState } from 'react';

const Panel = styled.div`
  width: 490px;
  box-shadow: 1px 0px 20px 0px #0000001a;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 510px;
    transform: translateY(-50%);
    width: 45px;
    height: 80px;
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1000;
  }
`;

const Title = styled.div`
  padding-top: 5px;
  padding-left: 30px;
  font-weight: 800;
  font-size: 20px;
`;

const PlaceContainer = styled.div`
  width: 440px;
  height: 714px;
  gap: 20px;
  border-radius: 10px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 35px;
  padding-left: 20px;
  padding: 20px 20px 35px 20px;
  margin: 25px 15px;
  border: 3px solid #c4c4c4;
`;

const PlaceImage = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const IconsBlock = styled.div`
  display: flex;
  gap: 5px;
  padding-top: 20px;
  padding-bottom: 7px;
`;

const PlaceIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const FavoriteIcon = styled(IconFavorite)`
  width: 15px;
  height: 20px;
`;

const PlaceTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
`;

const PlaceSubtitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  padding-top: 15px;
  padding-bottom: 50px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonText = styled.span`
  font-weight: 700;
  font-size: 14px;
  font-family: Mont, sans-serif;
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border-radius: 5px;
  padding: 10px 22px;
  font-weight: 700;
  font-size: 14px;
  height: 40px;
  cursor: pointer;
`;

const FavoriteButton = styled(BaseButton)`
  border: 3px solid #c4c4c4;
  color: #c4c4c4;
  background-color: white;
`;

const RouteButton = styled(BaseButton)`
  border: none;
  background-color: #5e7bc7;
  color: white;
`;

function PlacePanel() {
  const [searchValue, setSearchValue] = useState('');
  const place = {
    id: 1,
    title: 'Фантаcмагарический музей им. П.М. Машерова',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    icons: [
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    ],
  };

  return (
    <Panel>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <Title>Избранное:</Title>
      <PlaceContainer>
        <PlaceImage src={place.image} alt={place.title} />
        <IconsBlock>
          {place.icons.map((iconUrl, index) => (
            <PlaceIcon key={index} src={iconUrl} alt="Type Icon" />
          ))}
        </IconsBlock>
        <PlaceTitle>{place.title}</PlaceTitle>
        <PlaceSubtitle>{place.text}</PlaceSubtitle>
        <ButtonBlock>
          <FavoriteButton>
            <FavoriteIcon />
            <ButtonText>Избранное</ButtonText>
          </FavoriteButton>
          <RouteButton>
            <IconRoute />
            <ButtonText>Маршрут</ButtonText>
          </RouteButton>
        </ButtonBlock>
      </PlaceContainer>
    </Panel>
  );
}

export default PlacePanel;
