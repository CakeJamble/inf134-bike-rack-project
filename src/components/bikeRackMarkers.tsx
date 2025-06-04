import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

type Poi = { key: string, location: google.maps.LatLngLiteral }

const BikeRackMarkers = (props: { pois: Poi[] }) => {
    return (
        <>
            {props.pois.map((poi: Poi) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}>
                    <Pin background={"#46A70A"} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default BikeRackMarkers;