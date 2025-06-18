import styled from 'styled-components';
import IconSearch from '../assets/icons/IconSearch.svg?react';
import type { ISearchInput } from '../types/interfaces';

const InputWrapper = styled.div`
  position: relative;
  padding: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 19px 72px;
  font-size: 16px;
  font-weight: 600;
  color: #373737;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(94, 123, 199, 0.5);
  }
`;

const SearchIcon = styled(IconSearch)`
  position: absolute;
  top: 50%;
  left: 55px;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  color: #373737;
  pointer-events: none;
`;

export default function SearchInput({ value, onChange }: ISearchInput) {
  return (
    <InputWrapper>
      <SearchIcon />
      <Input
        placeholder="Место, адрес.."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputWrapper>
  );
}
