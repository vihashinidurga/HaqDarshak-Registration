import axios from "axios";
import React, { useState } from "react";
import State from "../components/State";
import { useNavigate } from "react-router-dom";
function ChooseLocation() {
  const navigate = useNavigate();

  const handleMapOption = () => {
    navigate("/map-page");
  };
  return (
    <>
      <div className="choose-location">
        <div className="choose-locat-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h1>Choose location</h1>
        </div>
        <div className="choose-locat-body"></div>
        <State />
        -----------------or---------------
        <button className="submit" onClick={handleMapOption}>
          {" "}
          Use current location{" "}
        </button>
        <p> This is used to give you information more accurate to your area.</p>
      </div>
    </>
  );
}

export default ChooseLocation;
