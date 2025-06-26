import styled from 'styled-components';

export const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#373737' : '#000000')};
  font-weight: 600;

  svg {
    width: 24px;
    height: 24px;
  }
`;
