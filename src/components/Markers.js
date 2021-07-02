import React from 'react'
import { Marker } from 'react-leaflet'
import { IconMarker } from './IconMarker'


const Markers = (props) => {

    //Obtenemos el arreglo places desde props
    const { places } = props;

    const markers =  places.map((place, i) => (
        <Marker key={i + place.name} position={place.coordinates}
         icon={IconMarker} />
    ));              
    return markers;
}

export default Markers
