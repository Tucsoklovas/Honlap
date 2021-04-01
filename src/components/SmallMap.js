import React, {useState} from "react"
import ReactMapGl, {Marker} from "react-map-gl"
import marker from "../assets/marker.png"
export default function App(){
    let [viewport, setViewport] = useState({
        latitude: 47.4496841,
        longitude:18.5443055,
        zoom:13,
        width:"300px",
        height:"250px"
    });
    return(
        <ReactMapGl
            mapboxApiAccessToken={
                "pk.eyJ1IjoidHVjc29rIiwiYSI6ImNrbXVob3hyYTExZzUybnA5azBuOHN4c2UifQ.Us9UcRlsFiO2qHdvD98vkA"            }
            {...viewport}
            onViewportChange={(newView) => setViewport(newView)}
            mapStyle={"mapbox://styles/mapbox/streets-v11"}
        >
            <Marker latitude={47.4496841} longitude={18.5443055}>
                <img src={marker} width={"25px"} alt={"térkép"}/>
            </Marker>

        </ReactMapGl>
    )
}
