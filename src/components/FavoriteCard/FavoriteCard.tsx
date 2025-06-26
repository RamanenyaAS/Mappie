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
} from './FavoriteCard.styled';
import { IconNavArrow } from '../../assets/icons';

function FavoriteCard({
  id,
  title,
  text,
  image,
  // icons, !!! ДОБАВИТЬ ИКОНКИ!!
  onClick,
}: IFavoriteCard & { onClick?: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const isFavorite = favorites.some((f) => f.id === id);

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
        <CardImage
          src={image || '/fallback.jpg'}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/fallback.jpg';
          }}
        />
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
