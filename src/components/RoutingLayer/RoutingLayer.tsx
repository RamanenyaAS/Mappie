import 'leaflet-routing-machine';

import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';

type RoutingLayerProps = {
  from: [number, number];
  to: { lat: number; lon: number };
};

function RoutingLayer({ from, to }: RoutingLayerProps) {
  const map = useMap();
  const controlRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    if (controlRef.current) {
      map.removeControl(controlRef.current);
    }

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to.lat, to.lon)],
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: () => null,
      show: false,
    });

    controlRef.current = routingControl;
    routingControl.addTo(map);

    const container = routingControl.getContainer();
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }

    return () => {
      if (controlRef.current) {
        map.removeControl(controlRef.current);
      }
    };
  }, [from, to, map]);

  return null;
}

export default RoutingLayer;
