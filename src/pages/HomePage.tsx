import styled from "styled-components";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

function HomePage() {
  return ( 
    <>
      <Wrapper>
        <Sidebar/>
        <Map />
      </Wrapper>
    </>
   );
}

export default HomePage;