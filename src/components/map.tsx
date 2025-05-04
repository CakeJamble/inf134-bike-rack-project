"use client";
import React from 'react';
// import {createRoot} from 'react-dom/client';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const MyMap = () => (
 <APIProvider apiKey={'not uploading my API key to GitHub :) - Jake'} onLoad={() => console.log('Maps API has loaded.')}>
   <Map
      defaultZoom={13}
      defaultCenter={ { lat: 33.669445, lng: -117.823059 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
   </Map>
 </APIProvider>
);

export default MyMap;
