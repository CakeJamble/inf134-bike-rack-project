"use client";
import React from 'react';
// import {createRoot} from 'react-dom/client';
import { AdvancedMarker, APIProvider, Map, MapCameraChangedEvent, Pin } from '@vis.gl/react-google-maps';
import BikeRackMarkers from '@/components/bikeRackMarkers';

type Poi = { key: string, location: google.maps.LatLngLiteral }
const bikeRacks: Poi[] = [
  { key: "SST", location: { lat: 33.6463888, lng: -117.8399187 } },
];

const MyMap = () => {
  // need NEXT_PUBLIC to expose environemnt vairables to client-side
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const ID = process.env.NEXT_PUBLIC_MAP_ID;

  return (
    <APIProvider
      apiKey={apiKey!}
      onLoad={() => {}}
    >
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: 33.669445, lng: -117.823059 }}
        mapId={ID!}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
        <BikeRackMarkers pois={bikeRacks} />
      </Map>
    </APIProvider>
  );
};
//<BikeRackMarkers pois={bikeRacks} />

export default MyMap;
