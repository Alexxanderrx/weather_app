"use client"
import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./GoogleMaps.css";

export default function GoogleMaps() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}

function Map() {
    const center = useMemo(() => ({
        lat: 44, lng: -80
    }));
    const [open, setOpen] = useState(true);

    function closeO() {
        setOpen(!open)
    }
    let CLASSMAP = "map-container";
    open == true ? CLASSMAP = "map-container close" : CLASSMAP = "map-container ";
    return (
        <>
            <button type="button" className="btn btn-secondary rounded-circle" onClick={closeO}>
                <i className="bi bi-geo-alt-fill"></i>
            </button>

            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName={CLASSMAP}
            >
                <Marker position={{ lat: 44, lng: -80 }} />
            </GoogleMap>
        </>

    );
}