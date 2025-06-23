import styled from 'styled-components';
import type { IFavoriteCard } from '../types/interfaces';
import IconFavorite from '../assets/icons/IconFavorite.svg?react';
import IconNavArrow from '../assets/icons/IconNavArrow.svg?react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { addFavorite, removeFavorite } from '../slices/favoriteSlice';

const Card = styled.div`
  padding: 20px;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardTop = styled.div`
  display: flex;
  gap: 15px;
`;

const CardImage = styled.img`
  width: 120px;
  height: 99px;
  border-radius: 10px;
  object-fit: cover;
`;

const CardTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  flex: 1;
`;

const CardText = styled.div`
  font-size: 10px;
  font-weight: 600;
  margin-top: 10px;
  color: #373737;
  max-height: 3.6em;
  overflow: hidden;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const IconStyled = styled(IconFavorite)<{ active: boolean }>`
  width: 20px;
  height: 20px;
  color: ${({ active }) => (active ? '#C75E5E' : '#808080')};
  cursor: pointer;
  flex-shrink: 0;
`;

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
        <IconStyled active={isFavorite} onClick={handleFavoriteClick} />
        <IconNavArrow />
      </CardBottom>
    </Card>
  );
}

export default FavoriteCard;
