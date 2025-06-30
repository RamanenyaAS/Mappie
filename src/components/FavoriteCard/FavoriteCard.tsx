import type { IFavoriteCard } from '../../types/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { addFavorite, removeFavorite } from '../../slices/favoriteSlice';
import {
  Card,
  CardBottom,
  CardImage,
  CardText,
  CardTitle,
  CardTop,
  IconStyled,
  Placeholder,
} from './FavoriteCard.styled';
import { IconNavArrow } from '../../assets/icons';
import { useState } from 'react';

function FavoriteCard({
  id,
  title,
  text,
  image,
  onClick,
}: IFavoriteCard & { onClick?: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const isFavorite = favorites.some((f) => f.id === id);

  const [hasImageError, setHasImageError] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(
        addFavorite({
          id,
          name: title,
          description: text,
          photo: image,
          lat: 0,
          lon: 0,
        })
      );
    }
  };

  return (
    <Card onClick={onClick}>
      <CardTop>
        {image && !hasImageError ? (
          <CardImage
            src={image}
            alt={title}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <Placeholder>Нет фото</Placeholder>
        )}
        <CardTitle>{title}</CardTitle>
      </CardTop>
      <CardText>{text}</CardText>
      <CardBottom>
        <IconStyled $active={isFavorite} onClick={handleFavoriteClick} />
        <IconNavArrow />
      </CardBottom>
    </Card>
  );
}

export default FavoriteCard;
