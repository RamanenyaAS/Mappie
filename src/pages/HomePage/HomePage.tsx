import Map from '../../components/Map/Map';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import FavoritePanel from '../../components/FavoritePanel/FavoritePanel';
import SearchResultsPanel from '../../components/SearchResultsPanel/SearchResultsPanel';
import { useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { clearPOI, setSelectedPOI } from '../../slices/poiSlice';
import PlacePanel from '../../components/PlacePanel/PlacePanel';
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
