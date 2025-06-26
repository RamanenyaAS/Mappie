import styled from 'styled-components';

export const Panel = styled.div`
  width: 400px;
  height: 100vh;
  box-shadow: 1px 0px 20px 0px #0000001a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 510px;
    transform: translateY(-50%);
    width: 45px;
    height: 80px;
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1000;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 15px 25px 5px;
  font-weight: 800;
  font-size: 20px;
`;

export const FilterBlock = styled.div`
  width: 350px;
  height: 467px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
  padding: 20px 60px 20px 20px;
  overflow-y: auto;
  margin-left: 25px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #00000080;
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: #00000080 transparent;
`;

export const DistanceBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 15px 25px;
`;

export const RadiusInput = styled.input`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 3px solid #c4c4c4;
  padding-left: 30px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
`;

export const RadiusInputText = styled.div`
  font-weight: 800;
  font-size: 16px;
`;
