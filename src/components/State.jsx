import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import statesData from "../assets/pincode_IN.json";
function State() {
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    if (state) {
      navigate("/location-form", { state: { selectedState: state } });
    }
    console.log(state);
  };
  return (
    <>
      <select onChange={handleStateChange}>
        <option value="">Select State</option>
        {Object.keys(statesData).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </>
  );
}

export default State;
