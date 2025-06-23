import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPOI } from '../slices/poiSlice';
import type { RootState, AppDispatch } from '../store/store';
import FavoriteCard from './FavoriteCard';

const Panel = styled.div`
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  padding: 20px;
  border-right: 1px solid #ddd;
`;

function SearchResultsPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: poi,
    loading,
    error,
  } = useSelector((state: RootState) => state.poi);
  const favorites = useSelector((state: RootState) => state.favorite.items);

  const validPoi = poi.filter(
    (item) => item.name || item.description || item.photo
  );

  if (loading) return <Panel>Загрузка...</Panel>;
  if (error) return <Panel>Ошибка: {error}</Panel>;
  if (!validPoi.length) return <Panel>Ничего не найдено</Panel>;

  return (
    <Panel>
      {validPoi.map((item) => (
        <FavoriteCard
          key={item.id}
          id={item.id}
          title={item.name || 'Без названия'}
          text={item.description || 'Описание недоступно'}
          isFavorite={favorites.some((f: { id: string }) => f.id === item.id)}
          image={item.photo || ''}
          icons={[]}
          onClick={() => dispatch(setSelectedPOI(item))}
        />
      ))}
    </Panel>
  );
}

export default SearchResultsPanel;
