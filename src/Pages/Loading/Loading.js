import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loading = () => {
  return (
    <div
      className="custom-container text-center mt-5"
      style={{
        padding: "150px 0",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
