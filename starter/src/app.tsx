import React from "react";
import { createRoot } from "react-dom/client";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

const App = () => (
  <APIProvider
    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <Map
      defaultZoom={13}
      defaultCenter={{ lat: 11.562108, lng: 104.888535 }}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    ></Map>
  </APIProvider>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
