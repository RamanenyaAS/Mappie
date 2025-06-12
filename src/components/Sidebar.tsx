import styled from "styled-components";
import IconLogo from '../assets/icons/IconLogo.svg';
import IconButton from "./IconButton";
import IconSearch from '../assets/icons/IconSearch.svg';
import IconFavorite from '../assets/icons/IconFavorite.svg';
import IconLogin from '../assets/icons/IconLogin.svg';

const SidebarWrapper = styled.div`
  width: 110px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  width: 32px;
  height: 30px;
  justify-content: center;
  margin: 30px 0px 40px 0px;
`;



function Sidebar() {
  return (<>
    <SidebarWrapper>
      <TopSection>
        <Logo src={IconLogo} alt="Mappie Logo" />
        <IconButton type="Search" icon={IconSearch} alt="Search"/>
        <IconButton type="Favorite" icon={IconFavorite} alt="Favorite"/>
      </TopSection>
      <IconButton type="Login" icon={IconLogin} alt="Login"/>
    </SidebarWrapper>
  </>);
}

export default Sidebar;