import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { IconMarker } from './IconMarker'


const Markers = (props) => {

    //Obtenemos el arreglo places desde props
    const { places } = props;

    const markers = places.map((place, i) => (

        <Marker key={i + place.name} position={place.coordinates}
            icon={IconMarker} >
            <Popup>
               {place.name}
            </Popup>
        </Marker>

    ));
    return markers;
}

export default Markers
