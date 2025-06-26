import styled from 'styled-components';

export const Panel = styled.div`
  width: 400px;
  box-shadow: 1px 0px 20px 0px #0000001a;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

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

export const Title = styled.div`
  padding: 5px 0px 15px 30px;
  font-weight: 800;
  font-size: 20px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  gap: 25px;
`;
