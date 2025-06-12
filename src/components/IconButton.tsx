import type { IIconButton } from "../types/interfaces";
import styled from "styled-components";

interface StyledButtonProps {
  $variant: 'Favorite' | 'Search' | 'Login'
}

const StyledButton = styled.button<StyledButtonProps> `
width: 60px;
height: 60px;
border-radius: 6px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

${({ $variant }) => {
  switch ($variant) {
  case 'Favorite':
    return `
      background-color: #C75E5E;
      color: white;
      border: none;
      margin-top: 15px;
    `
    case "Search":
      return `
        background-color: #5E7BC7;
        color: white;
        border: none;
      `;
    case "Login":
      return `
        background-color: #808080;
        color: white;
        border: none;
        margin-bottom: 35px
      `;
  }
}}
`

function IconButton({type, icon, alt} : IIconButton) {
  return <StyledButton $variant={type}>
    <img src={icon} alt={alt} />
  </StyledButton> ;
}

export default IconButton;