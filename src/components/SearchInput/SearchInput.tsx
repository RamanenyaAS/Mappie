import type { ISearchInput } from '../../types/interfaces';
import { Input, InputWrapper, SearchIcon } from './SearchInput.styled';

function SearchInput({ value, onChange }: ISearchInput) {
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

export default SearchInput;
