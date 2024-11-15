import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import statesData from "../assets/pincode_IN.json";

function LocationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedState } = location.state || {};
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setPincode("");
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };
  const handleSubmit = () => {
    if (!selectedDistrict || !pincode) {
      setError("Please select both district and pincode.");
    } else {
      navigate("/mobile-number", {
        state: {
          selectedState,
          selectedDistrict,
          pincode,
        },
      });
    }
  };

  return (
    <>
      <div className="location-form">
        <div className="location-from-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h1>Where are you from?</h1>
        </div>
        <div className="location-form-body">
          <option value="">{selectedState}</option>
          <div>
            <label>
              <select onChange={handleDistrictChange} value={selectedDistrict}>
                <option value="">Select District</option>
                {Object.keys(statesData[selectedState] || {}).map(
                  (district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  )
                )}
              </select>
            </label>
          </div>
          {selectedDistrict && (
            <div>
              <label>
                <select onChange={handlePincodeChange} value={pincode}>
                  <option value="">Select Pincode</option>
                  {Object.entries(
                    statesData[selectedState][selectedDistrict] || {}
                  ).map(([place, pin]) => (
                    <option key={place} value={pin}>
                      {place} - {pin.trim()}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
          <button className="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default LocationForm;
