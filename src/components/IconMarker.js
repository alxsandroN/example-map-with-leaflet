import IconMine from '../assets/icon-pin-marker.png'
// marcador
import L from 'leaflet'

//Se exporta el IconMarker creado 

export const IconMarker = L.icon({
    iconUrl: IconMine,
    //iconUrl: require("../assets/icon-pin-marker.png"), // tambien se puede llamar la imagen con require desde aquí
    iconRetinaUrl: IconMine, 
    iconAnchor:null,
    shadowUrl:null,
    shadowSize:null,
    shadowAnchor:null,
    iconSize:[20],
    classNam:"leaflet-venue-icon"

})



