import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PersonalDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedState, selectedDistrict, pincode, mobileNumber } =
    location.state || {};
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    const userData = {
      state: selectedState,
      district: selectedDistrict,
      pincode,
      phonenumber: mobileNumber,
      name,
      gender,
      age: age ? parseInt(age) : null,
    };
    if (dob) {
      userData.dob = dob;
    }
    if ((name, gender)) {
      fetch("http://localhost:8800/api/save-user-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User data saved:", data);
          navigate("/welcome");
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
    }
  };

  return (
    <div className="personal-details">
      <div className="personal-details-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr;
        </button>
        <h1>Personal Details</h1>
      </div>
      <div className="personal-details-body">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>DOB/Age</label>
          <div className="dob-age-group">
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <span>OR</span>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <button className="submit" onClick={handleSubmit}>
          Next
        </button>
        <p className="info-text">
          This information helps us suggest schemes that are right for you.
        </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
