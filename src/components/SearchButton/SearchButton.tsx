import { IconSearch } from '../../assets/icons';
import type { ISearchButton } from '../../types/interfaces';
import { Button } from './SearchButton.styled';

function SearchButton({ onClick }: ISearchButton) {
  return (
    <Button onClick={onClick}>
      <IconSearch />
    </Button>
  );
}

export default SearchButton;
