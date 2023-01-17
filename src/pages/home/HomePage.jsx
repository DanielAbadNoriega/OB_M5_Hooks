import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("[ HomePage ] We are in Route: ", location.pathname);

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div style={{display:"flex", flexDirection: "column"}}>
      <h1 className="text-center">HOME</h1>
      <button className="btn btn-primary mx-auto" onClick={() => goTo("/profile")}>
        Go to Profile{" "}
      </button>
    </div>
  );
};

export default HomePage;
