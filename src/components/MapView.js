import React,{useState, useEffect} from 'react'

import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'
import { IconMarker } from './IconMarker'

import {useLocation, useHistory} from 'react-router-dom'
import {places} from '../assets/locations-example.json'
//Importamos el arreglo places del json para obtener los lugares
/*
--Se tiene que importar la hoja de estilos de leaflet para que se visualice correctamente el mapa
--Se agrega las dimensiones del mapa llamado .leaflet-container en una hoja de estilos
 */
const MapView = () => {

    const location = useLocation();
    //const history = useHistory();
    console.log("Utilizando useLocation", location);

   
    // const para definir centro y zoom del mapa inicial
    const [mapCenter, setMapCenter] = useState(
        {
            coordinates:[19.42699655663159,-99.1676650667239] ,
            zoom:10
        }
    )



      
      if(location.myLocation  ){
          console.log("gggggg")
          return(<MapContainer center={{lat:location.myLocation.latitude, lng:location.myLocation.longitude}} zoom={18} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={{lat:location.myLocation.latitude, lng:location.myLocation.longitude}}
            icon={IconMarker} >
            <Popup>
               Ubicación Actual
            </Popup>
        </Marker>
        </MapContainer>)
      
      }
    return (<MapContainer center={mapCenter.coordinates} zoom={mapCenter.zoom} >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <Markers places={places} /> {/* Se envia el arreglo a través de Props al componente hijo Markers*/}
    </MapContainer>)

}
export default MapView;
