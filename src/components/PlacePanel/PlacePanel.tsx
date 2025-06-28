import { IconRoute, IconFavorite } from '../../assets/icons';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { addFavorite, removeFavorite } from '../../slices/favoriteSlice';
import {
  ButtonGroup,
  FavoriteButton,
  Panel,
  PlaceDescription,
  PlaceImage,
  PlaceTitle,
  PlaceWrapper,
  RouteButton,
} from './PlacePanel.styled';
import SearchInput from '../SearchInput/SearchInput';
import { Title } from '../../common/common.styled';
import { useState } from 'react';

function PlacePanel() {
  const dispatch = useDispatch<AppDispatch>();
  const poi = useSelector((state: RootState) => state.poi.selectedPOI);
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const isFavorite = poi && favorites.some((item) => item.id === poi.id);
  const [searchValue, setSearchValue] = useState('');

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
      <SearchInput value={searchValue} onChange={setSearchValue}></SearchInput>
      <Title>Избранное</Title>
      <PlaceWrapper>
        {poi.photo && <PlaceImage src={poi.photo} alt={poi.name} />}
        <PlaceTitle>{poi.name || 'Без названия'}</PlaceTitle>
        <PlaceDescription>{poi.description || 'Нет описания'}</PlaceDescription>
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
      </PlaceWrapper>
    </Panel>
  );
}

export default PlacePanel;
