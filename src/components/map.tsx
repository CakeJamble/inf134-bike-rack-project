"use client";
import React from 'react';
// import {createRoot} from 'react-dom/client';
import { AdvancedMarker, APIProvider, Map, MapCameraChangedEvent, Pin } from '@vis.gl/react-google-maps';
import BikeRackMarkers from './bikeRackMarkers';

type Poi = { key: string, location: google.maps.LatLngLiteral }
const bikeRacks: Poi[] = [
  { key: "SST", location: { lat: 33.6463888, lng: -117.8399187 } }
];

const MyMap = () => {
  // need NEXT_PUBLIC to expose environemnt vairables to client-side
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider
      apiKey={apiKey!}
      onLoad={() => console.log(`Maps API has loaded. key: ${apiKey}`)}
    >
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: 33.669445, lng: -117.823059 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
    </APIProvider>
  );
};

export default MyMap;
