import { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import FilterItem from './FilterItem';
import type { IFilterItemData } from '../types/interfaces';
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
  { label: 'Природа', icon: IconNature },
  { label: 'Культура', icon: IconCulture },
  { label: 'История', icon: IconHistory },
  { label: 'Религия', icon: IconReligion },
  { label: 'Архитектура', icon: IconArchitecture },
  { label: 'Индустриальные объекты', icon: IconFactory },
  { label: 'Разное', icon: IconOther },
  { label: 'Развлечения', icon: IconEntertainment },
  { label: 'Спорт', icon: IconSport },
  { label: 'Авто', icon: IconAuto },
  { label: 'Заправки', icon: IconGas },
  { label: 'Велосипеды', icon: IconBike },
  { label: 'Магазины', icon: IconShop },
  { label: 'Еда', icon: IconFood },
  { label: 'Кофе/чай', icon: IconCoffee },
  { label: 'Банки', icon: IconBank },
  { label: 'Место для сна', icon: IconSleep },
];

function SearchPanel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [radius, setRadius] = useState('45');
  const [searchValue, setSearchValue] = useState('');

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
        <SearchButton />
      </BottomSection>
    </Panel>
  );
}

export default SearchPanel;
