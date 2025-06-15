import styled from 'styled-components';
import type { IFavoriteCard } from '../types/interfaces';
import IconFavorite from '../assets/icons/IconFavorite.svg?react';
import IconNavArrow from '../assets/icons/IconNavArrow.svg?react';

const Card = styled.div`
  padding: 20px 30px 23px 20px;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CardTopBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 99px;
`;

const CardImage = styled.img`
  height: 99px;
  width: 120px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  padding-left: 20px;
  word-break: break-word;
  flex-grow: 1;
`;

const CardText = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #373737;
  padding-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;
  /* text-overflow: ellipsis; // можно убрать, не нужен для multiline */

  line-height: 1.2em; /* задаём высоту строки */
  max-height: 3.6em; /* 3 строки * 1.2em */
`;

const IconsWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  gap: 5px;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 100px;
  border: 1px solid #c4c4c4;
  object-fit: cover;
`;

const CardBottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  height: 20px;
`;
const BottomIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  сursor: pointer;
`;

const StyledFavoriteIcon = styled(IconFavorite)`
  width: 20px;
  height: 20px;
  color: #c75e5e;
`;

function FavoriteCard({ title, text, image, icons }: IFavoriteCard) {
  return (
    <Card>
      <CardTopBlock>
        <ImageWrapper>
          <CardImage src={image} alt={title} />
          {icons && icons.length > 0 && (
            <IconsWrapper>
              {icons.slice(0, 2).map((iconUrl, i) => (
                <Icon key={i} src={iconUrl} alt={`icon-${i}`} />
              ))}
            </IconsWrapper>
          )}
        </ImageWrapper>
        <CardTitle>{title}</CardTitle>
      </CardTopBlock>
      <CardText>{text}</CardText>
      <CardBottomBlock>
        <BottomIcon>
          <StyledFavoriteIcon />
        </BottomIcon>
        <BottomIcon>
          <IconNavArrow />
        </BottomIcon>
      </CardBottomBlock>
    </Card>
  );
}

export default FavoriteCard;
