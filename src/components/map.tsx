"use client";
import React from 'react';
// import {createRoot} from 'react-dom/client';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

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
        }
      />
    </APIProvider>
  );
};

export default MyMap;
