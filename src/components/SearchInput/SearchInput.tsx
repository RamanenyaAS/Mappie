import type { ISearchInput } from '@appTypes/interfaces';

import { Input, InputWrapper, SearchIcon } from './SearchInput.styled';

function SearchInput({ value, onChange, onKeyDown }: ISearchInput) {
  return (
    <InputWrapper>
      <SearchIcon />
      <Input
        placeholder="Место, адрес.."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </InputWrapper>
  );
}

export default SearchInput;
