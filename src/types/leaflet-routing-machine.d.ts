import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Routing {
    type Waypoint = L.LatLng | L.LatLngLiteral;

    interface Plan {
      setWaypoints(waypoints: Waypoint[]): void;
      getWaypoints(): Waypoint[];
    }

    interface Router {
      route(
        waypoints: Waypoint[],
        callback: (err: Error | null, routes: IRoute[]) => void
      ): void;
    }

    interface IRoute {
      name: string;
      coordinates: L.LatLng[];
      instructions: IInstruction[];
      summary: {
        totalDistance: number;
        totalTime: number;
      };
    }

    interface IInstruction {
      type: string;
      distance: number;
      time: number;
      text: string;
      index: number;
    }

    interface RoutingControlOptions extends L.ControlOptions {
      waypoints?: Waypoint[];
      router?: Router;
      plan?: Plan;
      fitSelectedRoutes?: boolean;
      lineOptions?: L.PolylineOptions;
      altLineOptions?: L.PolylineOptions;
      show?: boolean;
      routeWhileDragging?: boolean;
      autoRoute?: boolean;
      showAlternatives?: boolean;
      altLineStyles?: L.PathOptions[];
      createMarker?: (i: number, waypoint: Waypoint) => L.Marker | null;
      addWaypoints?: boolean;
      draggableWaypoints?: boolean;
    }

    class Control extends L.Control {
      constructor(options?: RoutingControlOptions);
      getPlan(): Plan;
      setWaypoints(waypoints: Waypoint[]): void;
    }

    function control(options?: RoutingControlOptions): Control;
  }

  interface RoutingStatic {
    control(options?: Routing.RoutingControlOptions): Routing.Control;
  }

  let Routing: RoutingStatic;
}
