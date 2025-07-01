import { IconLogo } from '../../assets/icons';
import { useAuth } from '../../hooks/useAuth';
import type { ISidebar } from '../../types/interfaces';
import IconButton from '../IconButton/IconButton';
import { Logo, SidebarWrapper, TopSection } from './Sidebar.styled';

function Sidebar({ activeTab, setActiveTab }: ISidebar) {
  const toggleTab = (tab: 'Search' | 'Favorite') => {
    const newTab = activeTab === tab ? null : tab;
    setActiveTab(newTab);
  };

  const { logout } = useAuth();

  return (
    <SidebarWrapper>
      <TopSection>
        <Logo src={IconLogo} alt="Logo" />
        <IconButton
          type="Search"
          alt="Search"
          isActive={activeTab === 'Search'}
          onClick={() => toggleTab('Search')}
        />
        <IconButton
          type="Favorite"
          alt="Favorite"
          isActive={activeTab === 'Favorite'}
          onClick={() => toggleTab('Favorite')}
        />
      </TopSection>
      <IconButton type="Logout" alt="Logout" onClick={logout} />
    </SidebarWrapper>
  );
}

export default Sidebar;
