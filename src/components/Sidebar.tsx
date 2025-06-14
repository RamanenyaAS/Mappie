import styled from "styled-components"
import IconButton from "./IconButton"
import type { ISidebar } from "../types/interfaces"

import IconLogo from "../assets/icons/IconLogo.svg"
import IconSearch from "../assets/icons/IconSearch.svg"
import IconFavorite from "../assets/icons/IconFavorite.svg"
import IconLogin from "../assets/icons/IconLogin.svg"

const SidebarWrapper = styled.div`
  width: 110px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const Logo = styled.img`
  width: 32px;
  height: 30px;
  margin-bottom: 40px;
`

function Sidebar({ activeTab, setActiveTab }: ISidebar) {

  const toggleTab = (tab: "Search" | "Favorite") => {
    const newTab = activeTab === tab ? null : tab;
    setActiveTab(newTab);
  }

  return (
    <SidebarWrapper>
      <TopSection>
        <Logo src={IconLogo} alt="Logo" />
        <IconButton
          type="Search"
          icon={IconSearch}
          alt="Search"
          isActive={activeTab === "Search"}
          onClick={() => toggleTab("Search")}
        />
        <IconButton
          type="Favorite"
          icon={IconFavorite}
          alt="Favorite"
          isActive={activeTab === "Favorite"}
          onClick={() => toggleTab("Favorite")}
        />
      </TopSection>
      <IconButton type="Login" icon={IconLogin} alt="Login" />
    </SidebarWrapper>
  )
}

export default Sidebar
