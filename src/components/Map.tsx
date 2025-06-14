import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import IconUserLocation from '../assets/icons/IconUserLocation.svg'
import IconCenterMap from '../assets/icons/IconCenterMap.svg'

type Position = [number, number];
const DEFAULT_POSITION: Position = [53.9, 27.5667];

const DefaultIcon = L.icon({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon;

const CenterButton = ({position} : {position: Position}) => {
  const map = useMap();
  const handleClick = () => {
    map.setView(position, 13);
  }
  return (
    <StyledCenterButton onClick={handleClick}>
      <img src={IconCenterMap}></img>
    </StyledCenterButton>
  )
}

const userLocationIcon = L.icon({
  iconUrl: IconUserLocation,
  iconSize: [32,24],
  iconAnchor: [16,24],
  popupAnchor: [0,-24],
})

const StyledCenterButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 50px;
  z-index: 1000;
  background-color: white;
  border: 1px solid #ccc;
  padding: 3px 3px;
  border-radius: 4px;
  cursor: pointer;
`

const StyledMap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`

function Map() {
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        setPosition([latitude, longitude]);
      },
      () => {
        setPosition(DEFAULT_POSITION);
      }
    )
  }, [])
  
  return (
    <StyledMap>
      {position && (
        <StyledMapContainer center={position} zoom={13} zoomControl={false}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position} icon={userLocationIcon} />
          <ZoomControl position='bottomright'/>
          <CenterButton position={position}/>
        </StyledMapContainer>
      )}
    </StyledMap>
  )
}

export default Map