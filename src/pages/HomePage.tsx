import styled from "styled-components";
import Map from "../components/Map/Map";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

function HomePage() {
  return ( 
    <>
      <Wrapper>
        <Map />
      </Wrapper>
    </>
   );
}

export default HomePage;