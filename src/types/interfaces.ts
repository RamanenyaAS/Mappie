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
  type: 'Search' | 'Favorite' | 'Logout';
  alt?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ISidebar {
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
}

export interface IFavoriteCard {
  id: string;
  title: string;
  text: string;
  image: string;
  icons?: FC<SVGProps<SVGSVGElement>>[];
  isFavorite: boolean;
}

export interface IFilterItemData {
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  category: string;
}

export interface IFilterItem extends IFilterItemData {
  selected: boolean;
  onClick: () => void;
}

export interface ISearchInput {
  value: string;
  onChange: (val: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
  name: string;
  category?: string;
  description?: string;
  photo?: string;
  address?: string;
}

export interface IPOIState {
  items: IPOI[];
  loading: boolean;
  error: string | null;
  selectedPOI: IPOI | null;
}

export interface IOverpassElement {
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: { name?: string };
}

export interface ISearchButton {
  onClick?: () => void;
}

export interface ILocationState {
  lat: number | null;
  lon: number | null;
}

export interface IOverpassPOIItem {
  xid: string;
  point: {
    lat: number;
    lon: number;
  };
}

export interface IFeatureItem {
  properties: { xid: string };
  geometry: {
    coordinates: [number, number];
  };
}

export interface IGoBackButtonProps {
  onGoBack?: () => void;
}
