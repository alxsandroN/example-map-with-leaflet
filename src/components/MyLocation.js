import React, {useEffect, useState} from 'react'
import {Link ,useLocation} from 'react-router-dom'

const MyLocation = () => {

    const [locationMine, setLocation] = useState({
        longitude:0,
        latitude:0
    });
    
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition( function(position){
            setLocation({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
        }, function(error){
            console.log(error)
        },{
            //para ser más precisa la localización
            enableHighAccuracy:true
        } )
    },[] )


console.log("My location", locationMine);
    return (
        <div>
           <h1>Mi geolocalización</h1> 
           <p>Longitud:{locationMine.longitude} </p>
           <p>Latitud:{locationMine.latitude} </p>
       <Link to={{
           pathname:'/',
           myLocation:locationMine
       }}>Ver mi localización</Link>
        </div>
    )
}

export default MyLocation
