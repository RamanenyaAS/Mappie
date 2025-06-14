import styled from "styled-components";
import SearchInput from "./SearchInput";
import FavoritePlace from "./FavoritePlace";
import { icon } from "leaflet";

const Panel = styled.div`
  width: 400px;
  box-shadow: 1px 0px 20px 0px #0000001A;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  scrollbar-width:
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
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
  gap: 25px
`;

function FavoritePanel() {
  const favorites = [
    {
      id: 1,
      title: "Фантаcмагарический музей им. П.М. Машерова",
      text: "Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.",
      image: "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg",
      icons: ["https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg", "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg"],
    },
    {
      id: 2,
      title: "Городской парк",
      text: "Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.",
      image: "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg",
      icons: ["https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg", "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg"],
    },
    {
      id: 3,
      title: "Фантаcмагарический музей им. П.М. Машерова",
      text: "Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.",
      image: "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg",
      icons: ["https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg", "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg"],
    },
    {
      id: 4,
      title: "Фантаcмагарический музей им. П.М. Машерова",
      text: "Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast svennefiera håven postfaktisk. Atomslöjd defåling nigovena tegt i platt-tv. Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don. Apfälla menskopp eftersom spetät senessa inklusive mepaktiga. Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster. Hjärtslagslag defånera. Neck röstsamtal möbelhund. Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos. Du kan vara drabbad.",
      image: "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg",
      icons: ["https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg", "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg"],
    },
  ];

  return (
    <Panel>
      <SearchInput />
      <Title>Избранное:</Title>
      <CardList>
        {favorites.map((item) => (
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
