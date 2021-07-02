import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'

/*
--Se tiene que importar la hoja de estilos de leaflet para que se visualice correctamente el mapa
--Se agrega las dimensiones del mapa llamado .leaflet-container en una hoja de estilos
 */
const MapView = () => {
    return (<MapContainer center={{ lat: '19.42885428645738', lng: '-99.16721049943848' }} zoom={10} >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <Markers/>
    </MapContainer>)

}
export default MapView;
