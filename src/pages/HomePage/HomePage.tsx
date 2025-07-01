import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import FavoritePanel from '../../components/FavoritePanel/FavoritePanel';
import Map from '../../components/Map/Map';
import PlacePanel from '../../components/PlacePanel/PlacePanel';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import SearchResultsPanel from '../../components/SearchResultsPanel/SearchResultsPanel';
import Sidebar from '../../components/Sidebar/Sidebar';
import { clearPOI, setSelectedPOI } from '../../slices/poiSlice';
import type { AppDispatch, RootState } from '../../store/store';
import { MapWrapper, Wrapper } from './HomePage.styled';

function HomePage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const poi = useSelector((state: RootState) => state.poi.items);
  const dispatch = useDispatch<AppDispatch>();
  const selectedPOI = useSelector((state: RootState) => state.poi.selectedPOI);

  const handleTabChange = (tab: string | null) => {
    setActiveTab(tab);
    dispatch(setSelectedPOI(null));
    if (tab === 'Search') {
      dispatch(clearPOI());
    }
  };

  useEffect(() => {
    if (selectedPOI) {
      setActiveTab(null);
    }
  }, [selectedPOI]);

  return (
    <>
      <Wrapper>
        <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
        {activeTab === 'Search' &&
          (poi.length > 0 ? <SearchResultsPanel /> : <SearchPanel />)}
        {activeTab === 'Favorite' && <FavoritePanel />}
        {selectedPOI && <PlacePanel />}
        <MapWrapper>
          <Map />
        </MapWrapper>
      </Wrapper>
    </>
  );
}

export default HomePage;
