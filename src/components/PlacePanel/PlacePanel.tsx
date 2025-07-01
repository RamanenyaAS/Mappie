import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconFavorite, IconRoute } from '../../assets/icons';
import { addFavorite, removeFavorite } from '../../slices/favoriteSlice';
import { setRouteTarget } from '../../slices/routeSlice';
import type { AppDispatch, RootState } from '../../store/store';
import { Title } from '../../styles/BaseStyle';
import SearchInput from '../SearchInput/SearchInput';
import {
  ButtonGroup,
  FavoriteButton,
  Panel,
  PlaceDescription,
  Placeholder,
  PlaceImage,
  PlaceTitle,
  PlaceWrapper,
  RouteButton,
} from './PlacePanel.styled';

function PlacePanel() {
  const dispatch = useDispatch<AppDispatch>();
  const poi = useSelector((state: RootState) => state.poi.selectedPOI);
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const isFavorite = poi && favorites.some((item) => item.id === poi.id);
  const [searchValue, setSearchValue] = useState('');
  const [hasImageError, setHasImageError] = useState(false);

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
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <Title>Избранное</Title>
      <PlaceWrapper>
        {poi.photo && !hasImageError ? (
          <PlaceImage
            src={poi.photo}
            alt={poi.name}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <Placeholder>Нет фото</Placeholder>
        )}
        <PlaceTitle>{poi.name || 'Без названия'}</PlaceTitle>
        <PlaceDescription>{poi.description || 'Нет описания'}</PlaceDescription>
        <ButtonGroup>
          <FavoriteButton active={!!isFavorite} onClick={handleFavoriteToggle}>
            <IconFavorite />
            Избранное
          </FavoriteButton>
          <RouteButton
            onClick={() => {
              if (poi?.lat && poi?.lon) {
                dispatch(setRouteTarget({ lat: poi.lat, lon: poi.lon }));
              }
            }}
          >
            <IconRoute />
            Маршрут
          </RouteButton>
        </ButtonGroup>
      </PlaceWrapper>
    </Panel>
  );
}

export default PlacePanel;
