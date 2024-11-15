import React from "react";

const LocationDetails = ({ address }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#f4f4f8",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>You are here right now</h2>
      <p>{address || "Locating your address..."}</p>
      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#5e35b1",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Proceed
      </button>
    </div>
  );
};

export default LocationDetails;
