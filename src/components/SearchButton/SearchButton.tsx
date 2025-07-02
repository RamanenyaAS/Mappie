import type { ISearchButton } from '@appTypes/interfaces';
import { IconSearch } from '@assets/icons';

import { Button } from './SearchButton.styled';

function SearchButton({ onClick }: ISearchButton) {
  return (
    <Button onClick={onClick}>
      <IconSearch />
    </Button>
  );
}

export default SearchButton;
