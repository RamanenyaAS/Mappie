import FilterItem from '@components/FilterItem/FilterItem';
import SearchButton from '@components/SearchButton/SearchButton';
import SearchInput from '@components/SearchInput/SearchInput';
import { filters } from '@constants/filters';
import { fetchPOI, fetchPOIByName } from '@slices/poiSlice';
import { setSearchRadius } from '@slices/userLocationSlice';
import type { AppDispatch, RootState } from '@store/store';
import { Title } from '@styles/BaseStyle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DistanceBlock,
  FilterBlock,
  Panel,
  RadiusInput,
  RadiusInputText,
  TopSection,
} from './SearchPanel.styled';

function SearchPanel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const userLocation = useSelector((state: RootState) => state.userLocation);

  const radius = useSelector((state: RootState) => state.userLocation.radius);

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

  const toggleFilter = (label: string) => {
    setSelectedFilters((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Panel>
      <TopSection>
        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          onKeyDown={handleKeyDown}
        />
        <Title>Искать:</Title>
        <FilterBlock>
          {filters.map((item) => (
            <FilterItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              category={item.category}
              selected={selectedFilters.includes(item.label)}
              onClick={() => toggleFilter(item.label)}
            />
          ))}
        </FilterBlock>
        <Title>В радиусе</Title>
        <DistanceBlock>
          <RadiusInput
            type="number"
            value={radius}
            onChange={(e) => dispatch(setSearchRadius(e.target.value))}
          />
          <RadiusInputText>км</RadiusInputText>
        </DistanceBlock>
      </TopSection>
      <SearchButton onClick={handleSearch} />
    </Panel>
  );
}

export default SearchPanel;
