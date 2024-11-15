import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import LocationDetails from "./LocationDetails";
const MapView = ({ onLocationSelect }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAmxsnmXabxeLCoWKmNoOgKJMvaAYZo7ME", // Replace with your API key
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [address, setAddress] = useState("");

  // Function to fetch address based on current coordinates
  const fetchAddress = async (lat, lng) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAmxsnmXabxeLCoWKmNoOgKJMvaAYZo7ME`;
    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.results && data.results[0]) {
        const address = data.results[0].formatted_address;
        setAddress(address); // Update the address state
        onLocationSelect(address); // Send address to the parent component
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    // Get user's current location when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCurrentLocation({ lat, lng }); // Set current location
          fetchAddress(lat, lng); // Fetch the address based on current location
        },
        (error) => console.error("Error getting current location:", error),
        { enableHighAccuracy: true }
      );
    }
  }, [onLocationSelect]);

  // Handler for when the marker is dragged to a new location
  const handleMarkerDragEnd = (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setCurrentLocation({ lat: newLat, lng: newLng }); // Update marker location
    fetchAddress(newLat, newLng); // Fetch new address based on updated position
  };

  if (!isLoaded || !currentLocation) return <div>Loading map...</div>;

  return (
    <div>
      <GoogleMap
        center={currentLocation}
        zoom={15}
        mapContainerStyle={{
          width: "100%",
          height: "400px",
          borderRadius: "10px",
        }}
      >
        {/* Draggable Red Marker at the User's Current Location */}
        <Marker
          position={currentLocation}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red marker icon
          }}
          draggable={true} // Enable dragging
          onDragEnd={handleMarkerDragEnd} // Event for handling drag end
        />
      </GoogleMap>
      {/* Display the selected address */}
    </div>
  );
};

export default MapView;
