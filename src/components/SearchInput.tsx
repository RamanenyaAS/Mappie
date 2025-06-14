import styled from "styled-components";
import IconSearch from "../assets/icons/IconSearch.svg";

const InputWrapper = styled.div`
  padding: 25px;
  position: relative;
`

const Input = styled.input`
  width: 100%;
  color:#373737;
  font-size: 16px;
  font-weight: 600;
  border: 3px solid #C4C4C4;
  border-radius: 10px;
  padding: 19px 72px;
  cursor: pointer;
  outline: none;
`

const SearchIcon = styled.img`
  filter: invert(41%) sepia(25%) saturate(2165%) hue-rotate(198deg) brightness(93%) contrast(90%)
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
`;


function SearchInput() {
  return (
    <>
      <InputWrapper>
        <SearchIcon src={IconSearch} alt="Search" />
        <Input placeholder="Место, адрес.." />
      </InputWrapper>
    </>
  );
}

export default SearchInput;