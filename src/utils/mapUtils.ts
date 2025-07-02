import { IconPOIMarker, IconUserLocation } from '@assets/icons';
import {
  DEFAULT_MARKER_ICON_SIZE,
  POI_ICON_SIZE,
  USER_ICON_SIZE,
} from '@constants/mapConfig';
import L from 'leaflet';

export const DefaultIcon = L.icon({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: DEFAULT_MARKER_ICON_SIZE,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const userLocationIcon = L.icon({
  iconUrl: IconUserLocation,
  iconSize: USER_ICON_SIZE,
  iconAnchor: [10, 7],
  popupAnchor: [0, -7],
});

export const poiIcon = L.icon({
  iconUrl: IconPOIMarker,
  iconSize: POI_ICON_SIZE,
  iconAnchor: [9, 18],
  popupAnchor: [0, -20],
});
