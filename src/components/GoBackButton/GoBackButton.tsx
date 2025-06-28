import { IconNavArrow } from '../../assets/icons';
import { StyledGoBackButton } from './GoBackButton.styled';
import type { IGoBackButtonProps } from '../../types/interfaces';

function GoBackButton({ onGoBack }: IGoBackButtonProps) {
  return (
    <StyledGoBackButton onClick={onGoBack}>
      <IconNavArrow />
    </StyledGoBackButton>
  );
}

export default GoBackButton;
