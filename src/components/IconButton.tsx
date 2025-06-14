import styled from "styled-components";
import type { IIconButton } from "../types/interfaces";

// 🎨 Цвета кнопок
const buttonColors: Record<IIconButton["type"], string> = {
  Search: "#5E7BC7",
  Favorite: "#C75E5E",
  Login: "#808080",
};

// 🎨 Фильтры для перекраски иконок
const iconFilters: Record<"Search" | "Favorite", string> = {
  Search:
    "invert(41%) sepia(25%) saturate(2165%) hue-rotate(198deg) brightness(93%) contrast(90%)",
  Favorite:
    "invert(50%) sepia(55%) saturate(741%) hue-rotate(337deg) brightness(90%) contrast(90%)",
};

const StyledButton = styled.button<{
  $variant: IIconButton["type"];
  $active: boolean;
}>`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $active }) => ($active ? "3px solid #C4C4C4" : "none")};
  background-color: ${({ $variant, $active }) =>
    $active ? "transparent" : buttonColors[$variant]};
  transition: all 0.2s ease;
  margin-top: ${({ $variant }) => ($variant === "Favorite" ? "15px" : "0")};
  margin-bottom: ${({ $variant }) => ($variant === "Login" ? "35px" : "0")};

  &:hover {
    border: 3px solid #C4C4C4;
  }
`;

const StyledIcon = styled.img<{
  $variant: IIconButton["type"];
  $active: boolean;
}>`
  width: 24px;
  height: 24px;
  transition: filter 0.2s ease;
  filter: ${({ $variant, $active }) =>
    $active && $variant !== "Login" ? iconFilters[$variant as "Search" | "Favorite"] : "none"};
`;

const IconButton = ({
  type,
  icon,
  alt,
  isActive = false,
  onClick,
}: IIconButton) => {
  return (
    <StyledButton $variant={type} $active={isActive} onClick={onClick}>
      <StyledIcon src={icon} alt={alt} $variant={type} $active={isActive} />
    </StyledButton>
  );
};

export default IconButton;
