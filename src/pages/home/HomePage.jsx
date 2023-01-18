import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("[ HomePage ] We are in Route: ", location.pathname);

  const goTo = (path) => {
    navigate(path);
  };

  const goToProps = (path) => {
    //Introducimos en el path los query params que necesitemos
    path += "?online=true&user=Daniel";
    //Introducimos en el state las props que queramos 
    navigate(path, {
      state: {
        online: true,
      },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="text-center">HOME</h1>
      <button
        className="btn btn-primary mx-auto my-2 "
        onClick={() => goTo("/profile")}
      >
        Go to Profile{" "}
      </button>
      <button
        className="btn btn-success mx-auto my-2"
        onClick={() => goToProps("/state")}
      >
        Go to State{" "}
      </button>
    </div>
  );
};

export default HomePage;
