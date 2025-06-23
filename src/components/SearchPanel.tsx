import { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import FilterItem from './FilterItem';
import type { IFilterItemData } from '../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { fetchPOI, fetchPOIByName } from '../slices/poiSlice';

import IconNature from '../assets/icons/IconNature.svg?react';
import IconCulture from '../assets/icons/IconCulture.svg?react';
import IconHistory from '../assets/icons/IconCulture.svg?react';
import IconReligion from '../assets/icons/IconReligion.svg?react';
import IconArchitecture from '../assets/icons/IconArchitecture.svg?react';
import IconFactory from '../assets/icons/IconFactory.svg?react';
import IconOther from '../assets/icons/IconOther.svg?react';
import IconEntertainment from '../assets/icons/IconEntertainment.svg?react';
import IconSport from '../assets/icons/IconSport.svg?react';
import IconAuto from '../assets/icons/IconAuto.svg?react';
import IconGas from '../assets/icons/IconGas.svg?react';
import IconBike from '../assets/icons/IconBike.svg?react';
import IconShop from '../assets/icons/IconShop.svg?react';
import IconFood from '../assets/icons/IconFood.svg?react';
import IconCoffee from '../assets/icons/IconCoffee.svg?react';
import IconBank from '../assets/icons/IconBank.svg?react';
import IconSleep from '../assets/icons/IconSleep.svg?react';

const Panel = styled.div`
  width: 400px;
  height: 100vh;
  box-shadow: 1px 0px 20px 0px #0000001a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 15px 25px 5px;
  font-weight: 800;
  font-size: 20px;
`;

const FilterBlock = styled.div`
  width: 350px;
  height: 467px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
  padding: 20px 60px 20px 20px;
  overflow-y: auto;
  margin-left: 25px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #00000080;
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: #00000080 transparent;
`;

const DistanceBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 15px 25px;
`;

const RadiusInput = styled.input`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
  padding-left: 30px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
`;

const RadiusInputText = styled.div`
  font-weight: 800;
  font-size: 16px;
`;

const BottomSection = styled.div``;

const filters: IFilterItemData[] = [
  { label: 'Природа', icon: IconNature, category: 'natural' },
  { label: 'Культура', icon: IconCulture, category: 'cultural' },
  { label: 'История', icon: IconHistory, category: 'historic' },
  { label: 'Религия', icon: IconReligion, category: 'religion' },
  { label: 'Архитектура', icon: IconArchitecture, category: 'architecture' },
  {
    label: 'Индустриальные объекты',
    icon: IconFactory,
    category: 'industrial_facilities',
  },
  { label: 'Разное', icon: IconOther, category: 'other' },
  { label: 'Развлечения', icon: IconEntertainment, category: 'entertainments' },
  { label: 'Спорт', icon: IconSport, category: 'sport' },
  { label: 'Авто', icon: IconAuto, category: 'car_services' },
  { label: 'Заправки', icon: IconGas, category: 'fuel' },
  { label: 'Велосипеды', icon: IconBike, category: 'bicycle' },
  { label: 'Магазины', icon: IconShop, category: 'shops' },
  { label: 'Еда', icon: IconFood, category: 'foods' },
  { label: 'Кофе/чай', icon: IconCoffee, category: 'catering' },
  { label: 'Банки', icon: IconBank, category: 'banks' },
  { label: 'Место для сна', icon: IconSleep, category: 'accomodations' },
];

function SearchPanel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [radius, setRadius] = useState('45');
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const userLocation = useSelector((state: RootState) => state.userLocation);

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

  return (
    <Panel>
      <TopSection>
        <SearchInput value={searchValue} onChange={setSearchValue} />
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
            onChange={(e) => setRadius(e.target.value)}
          />
          <RadiusInputText>км</RadiusInputText>
        </DistanceBlock>
      </TopSection>
      <BottomSection>
        <SearchButton onClick={handleSearch} />
      </BottomSection>
    </Panel>
  );
}

export default SearchPanel;
