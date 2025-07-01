import { IconNavArrow } from '../../assets/icons';
import type { IGoBackButtonProps } from '../../types/interfaces';
import { StyledGoBackButton } from './GoBackButton.styled';

function GoBackButton({ onGoBack }: IGoBackButtonProps) {
  return (
    <StyledGoBackButton onClick={onGoBack}>
      <IconNavArrow />
    </StyledGoBackButton>
  );
}

export default GoBackButton;
