export interface IIconButton {
  icon: string;
  type: "Search" | "Favorite" | "Login";
  alt?: string;
  isActive?: boolean,
  onClick?: () => void;
}

export interface ISidebar {
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
}

export interface IFavoriteCard{
  title: string;
  text: string;
  image: string;
  icons: string[];
};