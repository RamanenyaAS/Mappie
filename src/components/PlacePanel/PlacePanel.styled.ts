import styled from 'styled-components';

export const Panel = styled.div`
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

export const PlaceImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const PlaceTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 20px 0 10px;
`;

export const PlaceDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
`;

export const Address = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const FavoriteButton = styled(BaseButton)<{ active: boolean }>`
  border: 3px solid #c4c4c4;
  background-color: white;
  color: ${({ active }) => (active ? '#C75E5E' : '#808080')};

  svg {
    color: currentColor;
  }
`;

export const RouteButton = styled(BaseButton)`
  background-color: #5e7bc7;
  color: white;
  border: none;
`;
