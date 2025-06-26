import type { IFilterItem } from '../../types/interfaces';
import { Wrapper } from './FilterItem.styled';

function FilterItem({ label, icon: Icon, selected, onClick }: IFilterItem) {
  return (
    <Wrapper selected={selected} onClick={onClick}>
      <Icon />
      <span>{label}</span>
    </Wrapper>
  );
}

export default FilterItem;
