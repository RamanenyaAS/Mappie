import { setUserLocation } from '@slices/userLocationSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export function useUserLocation() {
  const dispatch = useDispatch();
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const coords: [number, number] = [latitude, longitude];
      setPosition(coords);
      dispatch(setUserLocation({ lat: latitude, lon: longitude }));
    });
  }, [dispatch]);

  return position;
}
