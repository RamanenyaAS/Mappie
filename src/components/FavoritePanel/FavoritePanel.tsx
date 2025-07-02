import type { IPOI } from '@appTypes/interfaces';
import FavoriteCard from '@components/FavoriteCard/FavoriteCard';
import SearchInput from '@components/SearchInput/SearchInput';
import { setSelectedPOI } from '@slices/poiSlice';
import type { RootState } from '@store/store';
import { PanelContentWrapper, Title } from '@styles/BaseStyle';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CardList, Panel } from './FavoritePanel.styled';

function FavoritePanel() {
  const [searchValue, setSearchValue] = useState('');
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const dispatch = useDispatch();

  const handleCardClick = (poi: IPOI) => () => {
    handleSelect(poi);
  };

  const handleSelect = useCallback(
    (poi: IPOI) => {
      dispatch(setSelectedPOI(poi));
    },
    [dispatch]
  );

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
          {filteredFavorites.map((item: IPOI) => {
            const { id, name, description, photo } = item;

            return (
              <FavoriteCard
                key={id}
                id={id}
                title={name || 'Без названия'}
                text={description || 'Нет описания'}
                image={photo || ''}
                icons={[]}
                isFavorite={true}
                onClick={handleCardClick(item)}
              />
            );
          })}
        </CardList>
      </PanelContentWrapper>
    </Panel>
  );
}

export default FavoritePanel;
