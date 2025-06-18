import styled from 'styled-components';
import SearchInput from './SearchInput';
import FavoritePlace from './FavoritePlace';
import { useState } from 'react';

const Panel = styled.div`
  width: 400px;
  box-shadow: 1px 0px 20px 0px #0000001a;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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

const Title = styled.div`
  padding: 5px 0px 15px 30px;
  font-weight: 800;
  font-size: 20px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  gap: 25px;
`;

const favorites = [
  {
    id: 1,
    title: 'Фантаcмагарический музей им. П.М. Машерова',
    text: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    image: 'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    icons: [
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    ],
  },
  {
    id: 2,
    title: 'Городской парк',
    text: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    image: 'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    icons: [
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    ],
  },
  {
    id: 3,
    title: 'Фантаcмагарический музей им. П.М. Машерова',
    text: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    image: 'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    icons: [
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    ],
  },
  {
    id: 4,
    title: 'Фантаcмагарический музей им. П.М. Машерова',
    text: 'Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.',
    image: 'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    icons: [
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
      'https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg',
    ],
  },
];

function FavoritePanel() {
  const [searchValue, setSearchValue] = useState('');

  const filteredFavorites = favorites.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Panel>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <Title>Избранное:</Title>
      <CardList>
        {filteredFavorites.map((item) => (
          <FavoritePlace
            key={item.id}
            title={item.title}
            text={item.text}
            image={item.image}
            icons={item.icons}
          />
        ))}
      </CardList>
    </Panel>
  );
}

export default FavoritePanel;
