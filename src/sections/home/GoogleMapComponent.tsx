import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GoogleMapComponentProps {
  center: { lat: number; lng: number };
  zoom?: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center,
  zoom = 14,
}) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
