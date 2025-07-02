import type { IGoBackButtonProps } from '@appTypes/interfaces';
import { IconNavArrow } from '@assets/icons';

import { StyledGoBackButton } from './GoBackButton.styled';

function GoBackButton({ onGoBack }: IGoBackButtonProps) {
  return (
    <StyledGoBackButton onClick={onGoBack}>
      <IconNavArrow />
    </StyledGoBackButton>
  );
}

export default GoBackButton;
