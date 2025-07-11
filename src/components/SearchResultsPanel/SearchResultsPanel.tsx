import FavoriteCard from '@components/FavoriteCard/FavoriteCard';
import SearchInput from '@components/SearchInput/SearchInput';
import { filters } from '@constants/filters';
import { fetchPOI, fetchPOIByName, setSelectedPOI } from '@slices/poiSlice';
import type { AppDispatch, RootState } from '@store/store';
import { PanelContentWrapper, Title } from '@styles/BaseStyle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Panel } from './SearchResultsPanel.styled';

function SearchResultsPanel() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: poi,
    loading,
    error,
  } = useSelector((state: RootState) => state.poi);
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const radius = useSelector((state: RootState) => state.userLocation.radius);
  const [selectedFilters] = useState<string[]>([]);

  const validPoi = poi.filter(
    (item) => item.name || item.description || item.photo
  );

  const handleSearch = () => {
    if (!userLocation.lat || !userLocation.lon) {
      alert('Местоположение не определено');
      return;
    }

    const selectedCategories = filters
      .filter((f) => selectedFilters.includes(f.label))
      .map((f) => f.category);

    const kinds =
      selectedCategories.length > 0 ? selectedCategories.join(',') : undefined;
    const radiusMeters = Number(radius) * 1000;
    const { lat, lon } = userLocation;

    if (searchValue.trim()) {
      dispatch(
        fetchPOIByName({ query: searchValue, lat, lon, radius: radiusMeters })
      );
    } else {
      dispatch(fetchPOI({ lat, lon, radius: radiusMeters, kinds }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCardClick = (item: (typeof poi)[number]) => () => {
    dispatch(setSelectedPOI(item));
  };

  const isItemFavorite = (id: string) =>
    favorites.some((favoriteItem) => favoriteItem.id === id);

  if (loading) return <Panel>Загрузка...</Panel>;
  if (error) return <Panel>Ошибка: {error}</Panel>;
  if (!validPoi.length) return <Panel>Ничего не найдено</Panel>;

  return (
    <Panel>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onKeyDown={handleKeyDown}
      />
      <Title>Результаты поиска:</Title>
      <PanelContentWrapper>
        {validPoi.map((item) => (
          <FavoriteCard
            key={item.id}
            id={item.id}
            title={item.name || 'Без названия'}
            text={item.description || 'Описание недоступно'}
            isFavorite={isItemFavorite(item.id)}
            image={item.photo || ''}
            icons={[]}
            onClick={handleCardClick(item)}
          />
        ))}
      </PanelContentWrapper>
    </Panel>
  );
}

export default SearchResultsPanel;
