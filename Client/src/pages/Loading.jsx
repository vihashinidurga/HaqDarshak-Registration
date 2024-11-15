import React from "react";
import people from "../assets/people.png";
import LoadingBar from "../components/LoadingBar";
const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="message">Getting benefits is now easy!</div>
        <LoadingBar />

        <div className="people-image-container">
          <img src={people} className="people-image" />
        </div>
      </div>
    </>
  );
};

export default Loading;
