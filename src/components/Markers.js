import React from 'react'
import { Marker } from 'react-leaflet'
import {IconMarker} from './IconMarker'

const Markers = () => {
    return (

        <Marker position={{lat:'19.42743127166538', lng:'-99.16666719825562'}} icon={IconMarker} />

    )
}

export default Markers
