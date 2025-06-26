import { IconRoute, IconFavorite } from '../../assets/icons';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { addFavorite, removeFavorite } from '../../slices/favoriteSlice';
import {
  Address,
  ButtonGroup,
  FavoriteButton,
  Panel,
  PlaceDescription,
  PlaceImage,
  PlaceTitle,
  RouteButton,
} from './PlacePanel.styled';

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
