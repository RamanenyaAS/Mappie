import type { FC, SVGProps, ReactNode } from 'react';

export type TPosition = [number, number];

export interface IErrorBoundaryProps {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  errorInfo: string | null;
}

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

export interface IUserSlice {
  id: string | null;
  email: string | null;
  token: string | null;
  emailVerified: boolean | null;
}

export interface IPOI {
  id: string;
  lat: number;
  lon: number;
  name?: string;
  category?: string;
}

export interface IPOIState {
  items: IPOI[];
  loading: boolean;
  error: string | null;
}

export interface IOverpassElement {
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: { name?: string };
}
