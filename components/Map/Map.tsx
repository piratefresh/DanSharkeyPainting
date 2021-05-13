import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Pin from "./Pin";

export default function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 39.9078,
    longitude: -75.3879,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [marker, setMarker] = React.useState({
    latitude: 39.9078,
    longitude: -75.3879,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      mapboxApiAccessToken="pk.eyJ1IjoibWFnbmlsIiwiYSI6ImNqd3Vxa3pzbTAwNXQ0Ym8yZzVrdmxhcHUifQ.tkN3T_f6Ef38L7S2uZkdQA"
      mapStyle="mapbox://styles/magnil/cjsncgqdf1xua1gri9yaw0hyo"
      // onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        offsetTop={-20}
        offsetLeft={-10}
      >
        <Pin size={20} />
      </Marker>
    </ReactMapGL>
  );
}
