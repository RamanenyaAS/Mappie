import styled from 'styled-components';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import SearchPanel from '../components/SearchPanel';
import FavoritePanel from '../components/FavoritePanel';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;
const MapWrapper = styled.div`
  flex: 1;
  position: relative;
`;

function HomePage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <>
      <Wrapper>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Search' && <SearchPanel />}
        {activeTab === 'Favorite' && <FavoritePanel />}
        <MapWrapper>
          <Map />
        </MapWrapper>
      </Wrapper>
    </>
  );
}

export default HomePage;
