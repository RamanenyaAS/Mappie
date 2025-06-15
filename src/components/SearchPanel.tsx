import { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import FilterItem from './FilterItem';
// import NatureIcon from "../assets/icons/Nature.svg?react";
// import CultureIcon from "../assets/icons/Culture.svg?react";
// import SportIcon from "../assets/icons/Sport.svg?react";
import LoginIcon from '../assets/icons/IconLogin.svg?react';
import type { IFilterItemData } from '../types/interfaces';

const Panel = styled.div`
  width: 400px;
  height: 100vh;
  box-shadow: 1px 0px 20px 0px #0000001a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 15px 25px 53px;
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
  border: 3px solid #C4C4C4;
  padding-left: 30px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type="number"] {
    -moz-appearance: textfield;
`;

const RadiusInputText = styled.div`
  font-weight: 800;
  font-size: 16px;
`;

const BottomSection = styled.div``;

const filters: IFilterItemData[] = [
  { label: 'Природа', icon: LoginIcon },
  { label: 'Культура', icon: LoginIcon },
  { label: 'Спорт', icon: LoginIcon },
];

function SearchPanel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [radius, setRadius] = useState('45');

  const toggleFilter = (label: string) => {
    setSelectedFilters((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <Panel>
      <TopSection>
        <SearchInput />
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
