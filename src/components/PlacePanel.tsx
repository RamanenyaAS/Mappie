import styled from 'styled-components';
import IconFavorite from '../assets/icons/IconFavorite.svg?react';
import IconRoute from '../assets/icons/IconRoute.svg?react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { addFavorite, removeFavorite } from '../slices/favoriteSlice';

const Panel = styled.div`
  width: 490px;
  height: 100vh;
  box-shadow: 1px 0px 20px 0px #0000001a;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  position: relative;
`;

const PlaceImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const PlaceTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 20px 0 10px;
`;

const PlaceDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

const FavoriteButton = styled(BaseButton)<{ active: boolean }>`
  border: 3px solid #c4c4c4;
  background-color: white;
  color: ${({ active }) => (active ? '#C75E5E' : '#808080')};

  svg {
    color: currentColor;
  }
`;

const RouteButton = styled(BaseButton)`
  background-color: #5e7bc7;
  color: white;
  border: none;
`;

function PlacePanel() {
  const dispatch = useDispatch<AppDispatch>();
  const poi = useSelector((state: RootState) => state.poi.selectedPOI);
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const isFavorite = poi && favorites.some((item) => item.id === poi.id);

  if (!poi) return null;

  const handleFavoriteToggle = () => {
    if (!poi) return;
    if (isFavorite) {
      dispatch(removeFavorite(poi.id));
    } else {
      dispatch(addFavorite(poi));
    }
  };

  return (
    <Panel>
      {poi.photo && <PlaceImage src={poi.photo} alt={poi.name} />}
      <PlaceTitle>{poi.name || 'Без названия'}</PlaceTitle>
      <PlaceDescription>{poi.description || 'Нет описания'}</PlaceDescription>
      <Address>{poi.address || 'Адрес не указан'}</Address>
      <ButtonGroup>
        <FavoriteButton active={!!isFavorite} onClick={handleFavoriteToggle}>
          <IconFavorite />
          Избранное
        </FavoriteButton>
        <RouteButton>
          <IconRoute />
          Маршрут
        </RouteButton>
      </ButtonGroup>
    </Panel>
  );
}

export default PlacePanel;
