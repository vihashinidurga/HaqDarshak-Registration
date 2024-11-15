import React, { useState } from "react";
import MapView from "../components/MapView";
import LocationDetails from "../components/LocationDetails";
const MapPage = () => {
  const [address, setAddress] = useState("");
  const handleLocationSelect = (address) => {
    setAddress(address);
    console.log(address);
  };

  return (
    <>
      <div>
        <MapView onLocationSelect={handleLocationSelect} />
        <LocationDetails address={address} />
      </div>
    </>
  );
};

export default MapPage;
