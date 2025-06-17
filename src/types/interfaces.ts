import type { FC, SVGProps } from 'react';

export type TPosition = [number, number];

export interface IIconButton {
  icon: string;
  type: 'Search' | 'Favorite' | 'Login';
  alt?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ISidebar {
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
}

export interface IFavoriteCard {
  title: string;
  text: string;
  image: string;
  icons: string[];
}

export interface IFilterItemData {
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export interface IFilterItem extends IFilterItemData {
  selected: boolean;
  onClick: () => void;
}

export interface ISearchInput {
  value: string;
  onChange: (val: string) => void;
}
