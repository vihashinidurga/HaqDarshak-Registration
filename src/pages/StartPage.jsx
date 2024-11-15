import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HQImage from "../assets/HQ 4.png";

function StartPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/loading");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="start">
        <div className="image-container">
          <img className="logo-image" src={HQImage} alt="HQ Image" />
        </div>
      </div>
    </>
  );
}

export default StartPage;
