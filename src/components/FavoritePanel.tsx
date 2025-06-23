import styled from 'styled-components';
import SearchInput from './SearchInput';
import FavoriteCard from './FavoriteCard';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { IPOI } from '../types/interfaces';
import { useDispatch } from 'react-redux';
import { setSelectedPOI } from '../slices/poiSlice';

const Panel = styled.div`
  width: 400px;
  box-shadow: 1px 0px 20px 0px #0000001a;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 510px;
    transform: translateY(-50%);
    width: 45px;
    height: 80px;
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1000;
  }
`;

const Title = styled.div`
  padding: 5px 0px 15px 30px;
  font-weight: 800;
  font-size: 20px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  gap: 25px;
`;

function FavoritePanel() {
  const [searchValue, setSearchValue] = useState('');
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const dispatch = useDispatch();

  const filteredFavorites = favorites.filter(
    (item: IPOI) =>
      item.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Panel>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <Title>Избранное:</Title>
      <CardList>
        {filteredFavorites.map((item: IPOI) => (
          <FavoriteCard
            key={item.id}
            id={item.id}
            title={item.name || 'Без названия'}
            text={item.description || 'Нет описания'}
            image={item.photo || ''}
            icons={[]}
            isFavorite={true}
            onClick={() => dispatch(setSelectedPOI(item))}
          />
        ))}
      </CardList>
    </Panel>
  );
}

export default FavoritePanel;
