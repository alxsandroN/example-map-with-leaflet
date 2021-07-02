import React,{useState} from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'

import {places} from '../assets/locations-example.json'
import { map } from 'leaflet'
//Importamos el arreglo places del json para obtener los lugares

/*
--Se tiene que importar la hoja de estilos de leaflet para que se visualice correctamente el mapa
--Se agrega las dimensiones del mapa llamado .leaflet-container en una hoja de estilos
 */
const MapView = () => {
    // const para definir centro y zoom del mapa inicial
    const [mapCenter, setMapCenter] = useState(
        {
            coordinates:[19.42699655663159,-99.1676650667239] ,
            zoom:10
        }
    )

    return (<MapContainer center={mapCenter.coordinates} zoom={mapCenter.zoom} >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <Markers places={places} /> {/* Se envia el arreglo a través de Props al componente hijo Markers*/}
    </MapContainer>)

}
export default MapView;
