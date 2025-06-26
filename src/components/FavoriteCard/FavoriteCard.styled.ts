import styled from 'styled-components';
import { IconFavorite } from '../../assets/icons';

export const Card = styled.div`
  padding: 20px;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const CardTop = styled.div`
  display: flex;
  gap: 15px;
`;

export const CardImage = styled.img`
  width: 120px;
  height: 99px;
  border-radius: 10px;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  flex: 1;
`;

export const CardText = styled.div`
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

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const IconStyled = styled(IconFavorite)<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  color: ${({ $active }) => ($active ? '#C75E5E' : '#808080')};
  cursor: pointer;
  flex-shrink: 0;
`;
