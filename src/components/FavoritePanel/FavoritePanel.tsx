import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setSelectedPOI } from '../../slices/poiSlice';
import type { RootState } from '../../store/store';
import { PanelContentWrapper, Title } from '../../styles/BaseStyle';
import type { IPOI } from '../../types/interfaces';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import SearchInput from '../SearchInput/SearchInput';
import { CardList, Panel } from './FavoritePanel.styled';

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
      <PanelContentWrapper>
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
      </PanelContentWrapper>
    </Panel>
  );
}

export default FavoritePanel;
